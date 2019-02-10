# region imports
import tempfile
from datetime import date, datetime
import pathlib
import pandas
import pytest
import pytz
import os
from data_models_analytics.utils.etl_table import ETLTable

TIMEZONE = pytz.timezone("CET")
ETLTABLE_XLSX_FILE = 'api/tests/utils/fixtures/etl_table.xlsx'

# endregion imports
# region fixtures


@pytest.fixture
def timezone():
    return TIMEZONE


@pytest.fixture
def schema():
    return [{'source_column': 'Unnamed: 1'},
            {'source_column': 'Id',
             'target_column': 'id', 'dtype': 'int64'},
            {'source_column': 'Name',
             'target_column': 'name', 'dtype': 'object'},
            {'source_column': 'Published',
             'target_column': 'published', 'dtype': 'datetime64[ns]'},
            {'source_column': 'Imported',
             'target_column': 'imported', 'dtype': 'datetime64[ns]'},
            {'source_column': 'Value',
             'target_column': 'value', 'dtype': 'float64'},
            ]


@pytest.fixture
def Model():
    class Model():
        id: int
        name: str
        published: datetime
        imported: date
        value: float

        def __init__(self, id=None, name=None, published=None, imported=None, value=None):
            self.id = id
            self.name = name
            self.published = published
            self.imported = imported
            self.value = value

        def __str__(self):
            return self.name

        def __eq__(self, other):
            return (
                self.id == self.id and
                self.name == self.name and
                self.published == self.published and
                self.imported == self.imported and
                self.value == self.value

            )

        def __lt__(self, other):
            return self.id < other.id

    return Model


@pytest.fixture
def extract_dataframe():
    data = [
        {
            "Id": 1,
            "Name": "object 1",
            "Published": datetime(year=2018, month=2, day=28, hour=13, minute=2),
            "Imported": datetime(year=2018, month=2, day=28),
            "Value": -9.0
        },
        {
            "Id": 2,
            "Name": "object 2",
            "Published": datetime(year=2018, month=3, day=28, hour=13, minute=2),
            "Imported": datetime(year=2018, month=3, day=28),
            "Value": 9.0
        },


    ]
    return pandas.DataFrame(data=data)


@pytest.fixture
def io(extract_dataframe):
    path = str(pathlib.Path(ETLTABLE_XLSX_FILE).resolve())
    extract_dataframe.to_excel(excel_writer=path, index=False)
    return path


@pytest.fixture
def etl_table(io, schema, Model, timezone):
    return ETLTable(io=io, schema=schema, timezone=timezone, dataframe=None, Model=Model)


@pytest.fixture
def extract_dataframe():
    data = [
        {
            "Id": 1,
            "Name": "object 1",
            "Published": datetime(year=2018, month=2, day=28, hour=13, minute=2),
            "Imported": datetime(year=2018, month=2, day=28),
            "Value": -9.0
        },
        {
            "Id": 2,
            "Name": "object 2",
            "Published": datetime(year=2018, month=3, day=28, hour=13, minute=2),
            "Imported": datetime(year=2018, month=3, day=28),
            "Value": 9.0
        },


    ]
    return pandas.DataFrame(data=data)


@pytest.fixture
def transform_data():
    return [
        {
            "id": 1,
            "name": "object 1",
            "published": datetime(year=2018, month=2, day=28, hour=13, minute=2),
            "imported": datetime(year=2018, month=2, day=28),
            "value": -9.0
        },
        {
            "id": 2,
            "name": "object 2",
            "published": datetime(year=2018, month=3, day=28, hour=13, minute=2),
            "imported": datetime(year=2018, month=3, day=28),
            "value": 9.0
        },
    ]


@pytest.fixture
def transform_dataframe(transform_data):
    return pandas.DataFrame(data=transform_data)


@pytest.fixture
def transform_dataframe_row(transform_dataframe):
    return transform_dataframe.iloc[0]


@pytest.fixture
def models(Model, transform_data):
    return [
        Model(**transform_data[0]),
        Model(**transform_data[1]),
    ]


@pytest.fixture
def model(Model, transform_data):
    return Model(**transform_data[0])


# endregion fixtures

# region test helpers

@pytest.mark.parametrize(["value", "expected"],
                         [(None, None),
                          (pandas.NaT, None),
                          (pandas.Timestamp(year=2018, month=2, day=28, hour=13, minute=2),
                           datetime(year=2018, month=2, day=28, hour=13, minute=2).astimezone(TIMEZONE)),
                          ])
@pytest.mark.unittest
def test_to_datetime(etl_table, value, expected):
    # Given: a timestamp
    # When: converting to datetime
    actual = etl_table.to_datetime(value)
    # Then:
    if actual:
        assert actual.replace(microsecond=0) == expected
    else:
        assert actual == expected


@pytest.mark.parametrize(["value", "expected"],
                         [(None, None),
                          (pandas.NaT, None),
                          (pandas.Timestamp(year=2018, month=2, day=28),
                           date(year=2018, month=2, day=28))
                          ])
@pytest.mark.unittest
def test_to_date(etl_table, value, expected):
    etl_table.to_date(value) == expected


@pytest.mark.parametrize(["value", "expected"],
                         [(pandas.NaT, None),
                          ("test", "test")])
def test_to_str(etl_table, value, expected):
    assert etl_table.to_str(value) == expected


@pytest.mark.parametrize(["value", "expected"],
                         [(None, None),
                          (pandas.NaT, None),
                          (1.2, 1.2)])
def test_to_float(etl_table, value, expected):
    assert etl_table.to_float(value) == expected

# endregion test helpers

# region tests


def test_constructor(io, schema, timezone, extract_dataframe, Model):
    # Given: schema
    # When: constructing
    etl_table = ETLTable(
        io=io,
        schema=schema,
        timezone=timezone,
        dataframe=extract_dataframe,
        Model=Model
    )
    # Then:
    etl_table.io == io
    etl_table.schema == schema
    etl_table.timezone == timezone
    etl_table.dataframe = extract_dataframe
    etl_table.Model = Model


@pytest.mark.unittest
def test_extract(etl_table, extract_dataframe):
    """Test of the extract method"""
    # Given: a file io and a schema
    # When: extracting the io
    result = etl_table.extract()
    # Then: the result is as expected
    assert result == etl_table
    pandas.testing.assert_frame_equal(
        result.to_dataframe(), extract_dataframe,
        check_like=True,
        check_dtype=False)


@pytest.mark.unittest
def test_transform(etl_table, extract_dataframe, transform_dataframe):
    """Test of the transform method"""
    # Given: etl_table and extract_dataframe
    etl_table.dataframe = extract_dataframe
    # When: transforming
    result = etl_table.transform()
    # Then: the transformed dataframe is as expected
    assert result == etl_table
    pandas.testing.assert_frame_equal(
        result.to_dataframe().reset_index(drop=True),
        transform_dataframe.reset_index(drop=True),
        check_like=True,
        check_dtype=False)


@pytest.mark.unittest
def test_to_models(etl_table, transform_dataframe, models, Model):
    """Test of the to_models method"""
    # Given: etl_table and transform_dataframe
    etl_table.dataframe = transform_dataframe
    # When: converting to a list of models
    result = etl_table.to_models()
    # Then: then the list of models is as expected
    assert len(result) == len(models)
    sorted(result)[0] == sorted(models)[0]
    sorted(result)[1] == sorted(models)[1]


@pytest.mark.unittest
def test_load(etl_table):
    """Test of the load method"""
    # Given: etl_table and list of models
    # When: loading
    # Then: a NotImplementedError is raised
    with pytest.raises(NotImplementedError):
        etl_table.load()

# endregion tests
