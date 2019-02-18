****************
Technology Stack
****************

In this document I describe the different frameworks, services, technologies, tools and packages used in my :doc:`Data, Models and Analytics Paradigm <index>`

Frameworks
==========

- **Api**: Python_
- **Back end**: Python Django_ with `Django REST Framework`_.
- **Front end**: Angular_


Services
========

- **Application Monitoring**: Sentry_
- **CI/ CD**: `Azure DevOps`_
- **Cloud Paas**: Azure_
- **Code repository**: `Azure DevOps`_
- **Collaboration**: Trello_ or `Azure DevOps`_
- **Directory Service**: `Azure Active Directory`_
- **Email Service**: `Office 365`_

Technologies
============

- **Message Broker**: `Rabbit MQ`_
- **Relational Databases**: Postgres_ or `Microsoft SQL Server`_
- **Containers**: Docker_
- **HTTP Server**: NGINX_
- **Python WSGI HTTP Server**: Gunicorn_

Tools
=====

- **Code Editor**: `Visual Studio Code`_
- **Git Cli**: `Git`_
- **Diagram Editor**: Dia_

Packages
========

Python
------

Development
^^^^^^^^^^^

The below packages are listed in my `requirements.dev.text`_ file.

- **Auto formatter**: Black
- **Documentation** Sphinx_ (`Docs <Sphinx Docs>`_, `Quick Start <Sphinx Quick Start>`_, `Cheat Sheet <Sphinx Cheat Sheet>`_, `Practical Intro <Sphinx Practical Intro>`_, `Django <Sphinx Django>`_)
    - Theme: `Read the Docs theme`_
    - Markdown: Recommonmark_
- **Linter**: Pylint
- **Make file**: Pymake_
- **Shell**: Ipython



Test
^^^^

The below packages are listed in my `requirements.test.text`_ file.

- **Test Framework**: pytest
- **Profiling**: pytest-profiling
- **Browser testing**: Selenium

.. _requirements.test.text: ../../../requirements.test.txt
.. _requirements.dev.text: ../../../requirements.dev.txt
.. _Django: https://www.djangoproject.com/
.. _Django REST Framework:  https://www.django-rest-framework.org/
.. _Python: https://www.python.org/
.. _Angular: https://angular.io/
.. _Azure: https://azure.microsoft.com/en-us/
.. _Azure DevOps: https://azure.microsoft.com/en-us/services/devops/
.. _Sentry: https://github.com/getsentry/sentry
.. _Postgres: https://www.postgresql.org/
.. _Microsoft SQL Server: https://www.microsoft.com/en-us/sql-server/
.. _Rabbit MQ: https://www.rabbitmq.com/
.. _Office 365: https://www.office.com/?auth*2
.. _Azure Active Directory: https://azure.microsoft.com/en-us/services/active-directory/?&OCID*AID719807_SEM_dyM5xL2R&lnkd*Google_Azure_Brand&dclid*CjgKEAiAyrXiBRDHipvuoeyHlVYSJAB-M1M1BFaBq2Rsnl6G-_KZ1yeVrP2Ab_H6dYZ5P670h6lmlvD_BwE
.. _Trello: https://trello.com/
.. _Docker: https://www.docker.com/
.. _NGINX: https://www.nginx.com/
.. _Gunicorn: https://gunicorn.org/
.. _Visual Studio Code: https://code.visualstudio.com/
.. _Git: https://git-scm.com/
.. _Dia: https://sourceforge.net/projects/dia-installer/
.. _Restructured Text Cheat Sheet: https://github.com/ralsina/rst-cheatsheet/blob/master/rst-cheatsheet.rst#example
.. _Pymake: https://github.com/tqdm/py-make
.. _Sphinx: http://www.sphinx-doc.org/en/master/
.. _Sphinx Docs: https://docs.readthedocs.io/en/latest/intro/getting-started-with-sphinx.html
.. _Sphinx Quick Start: https://www.sphinx-doc.org/en/master/usage/quickstart.html
.. _Sphinx Cheat Sheet : https://github.com/ralsina/rst-cheatsheet/blob/master/rst-cheatsheet.rst
.. _Sphinx Practical Intro: https://youtu.be/0ROZRNZkPS8
.. _Sphinx Django: https://medium.freecodecamp.org/sphinx-for-django-documentation-2454e924b3bc
.. _Read the Docs theme: https://sphinx-rtd-theme.readthedocs.io/en/latest/index.html
.. _Recommonmark: https://recommonmark.readthedocs.io/en/latest/





