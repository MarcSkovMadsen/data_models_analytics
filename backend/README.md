# The Data, Models and Analytics Backend

## Introduction

The purpose of the Data, Models and Analytics Backend is to

- Model our data
- Automatically Extract, Transform and Load Data
- Manually manage our data via the [Django Admin](https://docs.djangoproject.com/en/2.1/ref/contrib/admin/)
- Serve our data via REST API endpoints to the Frontend, the API and the Users.
    1. The endpoint are typically json format when targetting other machines and
    2. XLSX, SVG, PNG formats when targetting users.
- Serve Static Assets to the Frontend, the API and the Users.
    1. This includes the static Docs and Blog sites.

The Backend is based on [Django](https://www.djangoproject.com/) and [Django REST Framework](https://www.django-rest-framework.org/).

## Getting started

### Local installation for development and testing

Prerequisites:

- Latest version of python installed from python.org
- pip and virtualenv installed
- The current directory of your console is the backend folder.

Create a virtual environment.

```bash
virtualenv .venv
```

Activate the virtual environment

```bash
.venv/Scripts/activate
```

Install the requirements from the requirements.txt file

```bash
pip install -r requirements/local.txt
```

Install the tools for local development and testing.

### Tasks: Building, Deploying, etc

Django comes with a cli. You can see the available commands via 'manage.py'. Below I've shown some of the commands I use the most.

```bash
$ python manage.py

Type 'manage.py help <subcommand>' for help on a specific subcommand.

Available subcommands:

....
[auth]
    changepassword
    createsuperuser
....
[django]
    check
....
    dbshell
....
    dumpdata
....
    inspectdb
....
    loaddata
....
    makemigrations
    migrate
....
    shell
....
    startapp
    startproject
....
[staticfiles]
....
    runserver
```

One of the most used commands is to run the development server. You can learn more about this command (on others) by adding the *--help* flag.

```bash
$ python manage.py runserver --help
usage: manage.py runserver [-h] [--version] [-v {0,1,2,3}]
                           [--settings SETTINGS] [--pythonpath PYTHONPATH]
                           [--traceback] [--no-color] [--ipv6] [--nothreading]
                           [--noreload] [--nostatic] [--insecure]
                           [addrport]

Starts a lightweight Web server for development and also serves static files.

positional arguments:
  addrport              Optional port number, or ipaddr:port

optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  -v {0,1,2,3}, --verbosity {0,1,2,3}
                        Verbosity level; 0=minimal output, 1=normal output,
                        2=verbose output, 3=very verbose output
  --settings SETTINGS   The Python path to a settings module, e.g.
                        "myproject.settings.main". If this isn't provided, the
                        DJANGO_SETTINGS_MODULE environment variable will be
                        used.
  --pythonpath PYTHONPATH
                        A directory to add to the Python path, e.g.
                        "/home/djangoprojects/myproject".
  --traceback           Raise on CommandError exceptions
  --no-color            Don't colorize the command output.
  --ipv6, -6            Tells Django to use an IPv6 address.
  --nothreading         Tells Django to NOT use threading.
  --noreload            Tells Django to NOT use the auto-reloader.
  --nostatic            Tells Django to NOT automatically serve static files
                        at STATIC_URL.
  --insecure            Allows serving static files even if DEBUG is False.
```

### Testing

We use [Pytest](https://pytest-django.readthedocs.io/en/latest/) with the [Pytest-Django](https://pytest-django.readthedocs.io/en/latest/) plugin.

You can run all tests via

```bash
pytest
```

Please note

- Running all tests may take a while, so during development you would add arguments pointing to the specific apps, files or methods you want to test.
- The settings for pytest are in the pytest.ini file.
- You can configure editors like VS Code and PyCharm to use Pytest for testing and debugging.

### Linting

We use [Pylint](https://www.pylint.org/) with the [Pylint_django](https://github.com/PyCQA/pylint-django) plugin to lint python code, i.e. to highlight syntactical and stylistic problems in our source code.

A theoretical example is

```bash
$ pylint hello_world.py
************* Module hello_world.py:1:0: C0111: Missing module docstring (missing-docstring)
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

## Contributing

If you have comments or questions feel free to post them on [Github](https://github.com/MarcSkovMadsen/data-models-analytics).

## Versioning

We currently don't version this package.

## Authors

- Marc Skov Madsen ([Email](mailto:marc.skov.madsen@gmail.com), [LinkedIn](https://www.linkedin.com/in/marcskovmadsen/))

## License

This backend is released under the [MIT License](LICENSE).