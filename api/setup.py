from setuptools import setup

setup(
    name="Data, Models and Analytics",
    version="0.1",
    description="Package for Data, Models and Analytics",
    url="https://github.com/MarcSkovMadsen/data-models-analytics",
    author="Marc Skov Madsen",
    author_email="marc.skov.madsen@gmail.com",
    license="MIT",
    packages=["data_models_analytics"],
    install_requires=[
        "pandas",
        "beautifulsoup4==4.7.1",
        "openpyxl",
        "requests",
        "xlsxwriter",
        "xlrd",
    ],
    zip_safe=False,
)

