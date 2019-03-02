# The Data, Models and Analytics API

## Introduction

The purpose of the Data, Models and Analytics API is to

- provide a Python interface to the backend REST API.
    1. An example could be a method to get a Pandas dataframe of data from the backend REST API.
- provide functionality that can be shared by users and developers.
    1. An example could be a function to generate a chart.

Both users and developers are expected to use the API.

- A user working in a notebook might wan't to be able to use functionality in the API to get data and generate a set of charts.
- A developer might need the functionality to serve charts to the front end.

The idea is also to enable super users and developers to both contribute to the development of the API.

If you just wan't to use the api, the following is not relevant. Instead you should refer to the ../sandbox/README.md.

## Getting started for API contributers

### Installation

Prerequisites:

- Latest version of python installed from python.org
- pip and virtualenv installed
- The current directory of your console is the api folder.

Create a virtual environment.

```bash
virtualenv .venv
```

Activate the virtual environment

```bash
.venv/Scripts/activate
```

Install the data_models_analytics package and it's requirements for development using the *-e* flag.

```bash
pip install -e .
```

Install the tools for local development and testing.

```bash
pip install -r requirements/local.txt
```

You can finalize the installation by testing, linting and type checking the package.

### Testing

You can run all tests using [Pytest](https://docs.pytest.org/en/latest/)

```bash
pytest
```

Please note

- The settings for pytest are in the pytest.ini file.
- You can configure editors like VS Code and PyCharm to use pytest for testing and debugging.

### Linting

Linting highlights syntactical and stylistic problems in your Python source code. We use pylint for linting. An example is

```bash
$pylint data_models_analytics/hello_world.py
************* Module hello_world
data_models_analytics\hello_world.py:1:0: C0111: Missing module docstring (missing-docstring)
```

Please note:

- The settings for pylint are defined in the .pylintrc file.
- You can configure editors like VS Code and Pycharm to automatically run pylint when you save a file.

## Type checking

```bash
mypy data_models_analytics/hello_world.py
```

Please note:

- We currently don't have any custom settings for the mypy. If we did they would be located in a mypy.ini file.
- You can configure editors like VS Code and Pycharm to automatically run mypy.

## Deployment

The API is currently not deployed.

## Contributing

If you have comments or questions feel free to post them on [Github](https://github.com/MarcSkovMadsen/data-models-analytics).

## Versioning

We currently don't version this package.

## Authors

- Marc Skov Madsen ([Email](mailto:marc.skov.madsen@gmail.com), [LinkedIn](https://www.linkedin.com/in/marcskovmadsen/))

## License

This blog is released under the [MIT License](LICENSE).