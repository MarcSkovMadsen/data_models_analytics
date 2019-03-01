====================================
Setting up the paradigm from scratch
====================================

Prerequisites:

* Latest version of python from PythonOrg_ with pip and virtualenv.
* Latest version of git from from GitScm_.
* Latest version of Postgres from Postgres_


Steps:

1. Create a project folder a move into the root of into

.. code-block:: bash

    mkdir project
    cd project

2. Create a virtual environment

.. code-block:: bash

    pip install virtualenv
    virtualenv .venv
    .venv/Scripts/activate

3. Install the requirements you need

.. code-block:: bash

    pip install -r requirements.txt
    pip install -r requirements.dev.txt
    pip install -r requirements.test.txt

4. Install the Django Back End using pydanny's cookiecutter template from CookiecutterDjango_

.. code-block:: bash

    pip install "cookiecutter>=1.4.0"
    cookiecutter https://github.com/pydanny/cookiecutter-django

- As timezone I use 'Europe/Copenhagen'
- To create the datase I had to run

.. code-block:: bash

    createdb --port=5433 --username=postgres data_models_analytics

Customizations
- insert __init__.py file project root. If not pylint cannot be used from parent folder.
- Search and Replace python version '3.6' with '3.7' or similar.
- Rename backend to apps to dedicated apps folder and fix APP_ROOT in base.py and imports backend.users
- Move docs to docs app and setup urls and test_urls.py

5. Setup PYTEST and VS Code for integrated usage

See
- pytest.ini files
- .env_local_masma or .env files
- vscode settings.json files

When you are done you should be able to succesfully run 'Python: Discover Unit Tests" in VS Code
and in a terminal

Todo: Api Package https://python-packaging.readthedocs.io/en/latest/minimal.html

.. code-block: bash

    pytest

.. code-block: bash

    backend$ pytest

.. _CookiecutterDjango: https://github.com/pydanny/cookiecutter-django
.. _PythonOrg: www.python.org
.. _GitScm: https://git-scm.com
.. _Postgres: https://www.postgresql.org/

Readings
--------

- How to handle CORS: https://www.techiediaries.com/django-angular-cli/
- https://medium.com/swlh/django-angular-4-a-powerful-web-application-60b6fb39ef34