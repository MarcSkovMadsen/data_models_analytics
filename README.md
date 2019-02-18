# Data, Models and Analytics Paradigm

Last Update: 2019-02-03

Status: ALPHA

## Introduction

I'm [Marc Skov Madsen], PhD, CFA® and Lead Data Scientist Developer at [Ørsted].

This repository contains a description of and ready to use version of my favourite paradigm for building internal web solutions and applications for data, models and analytics in an enterprise setting.

As i'm a Full Stack Data Scientist Developer and wan't to keep things simple, I stick to Python as my language of choice where ever possible.

![alt text][architecture]

[architecture]: docs/architecture.svg

## Stack

### Frameworks

* **Back end**: Python [Django](https://www.djangoproject.com/) with [Django REST API](https://www.django-rest-framework.org/)
* **Api**: [Python](https://www.python.org/)
* **Front end**: [Angular](https://angular.io/)

### Cloud

* **Cloud**: [Azure](https://azure.microsoft.com/en-us/)

### Application Services

* **Relational Databases**: [Postgres](https://www.postgresql.org/) or [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/)
* **Message Broker**: [Rabbit MQ](https://www.rabbitmq.com/)
* **Email Service**: Office 365
* **Directory Service**: [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/?&OCID=AID719807_SEM_dyM5xL2R&lnkd=Google_Azure_Brand&dclid=CjgKEAiAyrXiBRDHipvuoeyHlVYSJAB-M1M1BFaBq2Rsnl6G-_KZ1yeVrP2Ab_H6dYZ5P670h6lmlvD_BwE)
* **Application Monitoring**: [Sentry](https://github.com/getsentry/sentry)
* **Code repository**: [Azure DevOps]
* **CI/ CD**: [Azure Devops]

### Collaboration Services

* **Collaboration**: [Trello](https://trello.com/) or [Azure DevOps]

### Technologies

* **Containers**: [Docker](https://www.docker.com/)
* **HTTP Server**: [NGINX](https://www.nginx.com/)
* **Python WSGI HTTP Server**: [Gunicorn](https://gunicorn.org/)

### Tools

* **Code Editor**: [Visual Studio Code](https://code.visualstudio.com/)
* **Git Cli**: [Git](https://git-scm.com/)
* **Diagram Editor**: [Dia](https://sourceforge.net/projects/dia-installer/)

### Packages and Extensions

#### Python Packages

##### Development

* **Make file**: [pymake](https://github.com/tqdm/py-make)
* **Documentation** [Sphinx](http://www.sphinx-doc.org/en/master/) ([Docs](https://docs.readthedocs.io/en/latest/intro/getting-started-with-sphinx.html), [Quick Start](https://www.sphinx-doc.org/en/master/usage/quickstart.html))
    * Theme: [Read the Docs Theme](https://sphinx-rtd-theme.readthedocs.io/en/latest/index.html)
    * Restructured Text: [recommonmark](https://recommonmark.readthedocs.io/en/latest/)

##### Testing

* **Test Framework**: pytest
* **Profiling**: pytest-profiling
* **Browser testing**: Selenium

##### Django

##### Data Science

#### Angular Packages

#### VS Code Extensions

##### Python

* Python
* Python Extension Pack
* Jupyter
* Django
* [Djaneiro - Django Snippets](https://code.visualstudio.com/docs/python/tutorial-django)
* autoDocstring
* language-weave

##### Angular

* Angular 7 Snippets
* Angular Language Server
* Document This
* TsLint

##### Other

* Docker
* Markdownlint
* reSTructuredTExt
* Excel Viewer
* SVG Viewer
* Cobalt2 Them Official
* Visual Studio Intelli Code
* [VSNotebooks](https://marketplace.visualstudio.com/items?itemName=pavan.VSNotebooks)

## References

* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Angular Kick Starter](https://github.com/wulfsberg/angular-material-kickstart)
* [Python and Django tutorial in VS Code](https://code.visualstudio.com/docs/python/tutorial-django)



## How to setup the project

1. Create root directory
2. Add README.md [template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* Python distribution: Python
* Pip
* Virtualenv ([Tutorial](https://realpython.com/python-virtual-environments-a-primer/)
* Source Control: Git
* Editor: VS Code

Alternative you can use the Anaconda Python distribution and Conda (instead of Pip Virtualenv)

```
Give examples
```

### Installing

Open a command prompt and move to the folder where you want a clone of this repository as a subfolder.

```bash
C:/>cd repos
C:/repos>
```

Then clone the repository

```bash
C:/>git clone TODO
```

and move into the directory

```bash
C:/>cd data_model_analytics
```

create a virtual environment

```bash
C:\>virtualenv .venv
```


First you need to clone the repository

Todo: Show how to clone




A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

[Marc Skov Madsen]:(https://www.linkedin.com/in/marcskovmadsen/)
[Ørsted]:https://orsted.com
[Azure DevOps]:https://azure.microsoft.com/en-us/services/devops/