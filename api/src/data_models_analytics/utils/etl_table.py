"""Module containing functionality for importing Historical Events"""
import pathlib
from typing import Optional, List, Dict

import pandas
import requests
from datetime import datetime, date
import pytz


class ETLTable():
    """Class for extracting, transforming and loading tabular data"""

    def __init__(self, io, schema: List[Dict], timezone: pytz.timezone('UTC'), dataframe: pandas.DataFrame = None, Model=None):
        """Initialization of an ETLTable

        Arguments:
            io {[type]} - - A string or file type as accepted by the used pandas extract method (for example pandas.read_excel) with source_columns as specified in schema
            schema {List[Dict]} -- A list of dictionaries.
                Each dictionary corresponding to a column in the source or target table and
                having the 'source_column', 'target_column', 'dtype' values
            timezone {[pytz.timezone]} -- Used when converting pandas.TimeStamp to time zone aware datetime
            dataframe {[pandas.DataFrame]} -- Normally None, but specify one if you only wan't to extract or load.
            Model {[object]} -- A model with attributes corresponding to the target_columns specified in the schema.
        """
        self.io = io
        self.schema = schema
        self.timezone = timezone
        self.dataframe = dataframe
        self.Model = Model

        # region helper functions

    def to_datetime(self, value) -> Optional[datetime]:
        """Transforms a source value to a target datetime"""
        if value is None or pandas.isnull(value):
            return None
        elif isinstance(value, pandas.Timestamp):
            return value.to_pydatetime().astimezone(self.timezone)
        else:
            raise NotImplementedError("Not yet implemented.")

    def to_date(self, value) -> Optional[date]:
        """Transforms a source value to a target date"""
        if value is None or pandas.isnull(value):
            return None
        elif isinstance(value, pandas.Timestamp):
            return value.date()
        else:
            raise NotImplementedError("Not yet implemented.")

    def to_str(self, value) -> Optional[str]:
        """Transforms a source value to a target str"""
        if value is None or pandas.isnull(value):
            return None
        else:
            return str(value)

    def to_float(self, value) -> float:
        """Transforms a source value to a target float"""
        if value is None or pandas.isnull(value):
            return None
        if isinstance(value, float):
            return value
        else:
            raise NotImplementedError("Not yet implemented.")

    def to_dicts(self) -> List[Dict]:
        """Converts the ETLTable to a list of dictionaries. Each dictionary corresponding to a row in the ETLTable

        Returns:
            List[Dict] -- A list of dictionaries. Each dictionary corresponding to a row in the ETLTable
        """

        rows = self.dataframe.to_dict(orient='records')

        return rows

    def to_models(self) -> []:
        """A list of Model objects

        Returns:
            [type] -- A list of Model objects. Each model corresponding to a row in the ETLTable.
        """
        return [self.Model(**row) for row in self.to_dicts()]

    def to_dataframe(self) -> pandas.DataFrame:
        """Converts the ETLTable to a pandas DataFrame

        Returns:
            pandas.DataFrame -- A pandas DataFrame representation of the ETLTable
        """

        return self.dataframe.copy(deep=True)

        # endregion helper functions

    def extract(self) -> 'ETLTable':
        """Extracts the table from the source io

        Returns:
            ETLTable -- Returns self
        """
        self.dataframe = pandas.read_excel(io=self.io)

        return self

    def transform(self) -> 'ETLTable':
        """Transforms the table

        Returns:
            ETLTable -- Returns self
        """
        SOURCE_COLUMNS_TO_KEEP = [column["source_column"]
                                  for column in self.schema if "target_column" in column]
        SOURCE_COLUMNS_TO_TARGET_COLUMNS_DICT = {column["source_column"]: column["target_column"]
                                                 for column in self.schema if "target_column" in column}
        TARGET_DTYPES = {column["target_column"]: column["dtype"]
                         for column in self.schema if "target_column" in column}

        self.dataframe = (
            self.dataframe[
                SOURCE_COLUMNS_TO_KEEP]
            .rename(index=str, columns=SOURCE_COLUMNS_TO_TARGET_COLUMNS_DICT)
            .astype(TARGET_DTYPES)
        )

        return self

    def load(self):
        """Load the table to a database, file or similar.

        Raises:
            NotImplementedError -- You must implement this method in a subclass
        """

        raise NotImplementedError(
            "You must implement this your self in a sub class")
