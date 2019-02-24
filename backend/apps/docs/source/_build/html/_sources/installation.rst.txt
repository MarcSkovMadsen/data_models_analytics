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
- To create the datase I had to do run

.. code-block:: bash

    createdb --port=5433 --username=postgres data_models_analytics

.. _CookiecutterDjango: https://github.com/pydanny/cookiecutter-django

.. _PythonOrg: www.python.org
.. _GitScm: https://git-scm.com
.. _Postgres: https://www.postgresql.org/