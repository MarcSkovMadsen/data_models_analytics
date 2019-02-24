# How can I deploy to and use my own python package on databricks?

I'm currently working on eveloping a our Data Lake and more specifically setting up a solution for data transformation jobs on Data Bricks. I have a custom developed python package for this and I would like to be able to use it from the Databricks notebooks.

Inspired by https://forums.databricks.com/questions/12855/how-to-install-python-package-from-github-on-datab.html i've formed the following solution hypothesis.

## Main Hypothesis

1. I can deploy my own python package to a databricks library using an egg package and import it in Databricks Notebooks.

## Sub Hypothesis

1. The egg package can depend on external packages.
2. The build of the egg package can be automated using VSTS CI.
3. The deployment of the egg package can be automated using VSTS CD and Databricks API.
4. I can secure usernames and passwords for databases and other resources.
5. I can schedule notebooks to run on a regular basis (from every 10 min to every day).

## How to build an egg package

First I need to turn my python files and folders into a package by placing an __init__.py file in each relevant folder.

python setup.py bdist_egg

## How to install an egg package

Then i tried deploying it to a new folder

python -m easy_install "transformationjobs-0.1-py3.6 .egg"