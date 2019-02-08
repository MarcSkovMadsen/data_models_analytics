import sys
from pathlib import Path

# Settings
PACKAGE = 'data_models_analytics'

# Locate path to package
PATH_TO_SRC = Path("../../api/src/").resolve()
print("")
if not PATH_TO_SRC.exists():
    PATH_TO_SRC = Path("../api/src/").resolve()
    if not PATH_TO_SRC.exists():
        raise ModuleNotFoundError(
            "Could not locate the trading analytics package. Please insert the full path to ../api/src in your PYTHONPATH")

# Locate path to requirements.txt file
PATH_TO_PACKAGE_REQUIREMENTS_FILE = PATH_TO_SRC / \
    PACKAGE/"requirements.txt"
if not PATH_TO_PACKAGE_REQUIREMENTS_FILE.exists():
    raise FileNotFoundError(
        "Could not locate the trading analytics requirements.txt file. Please contact MASMA.")

# Add path to package to Python system path
sys.path.insert(0, str(PATH_TO_SRC))

# Inform the user
print(f"""
Added the {PACKAGE} package to the system path with the command

    sys.path.insert(0, str('{PATH_TO_SRC}'))

This enables Python to import from the {PACKAGE} package, for example

    from {PACKAGE} import usefull_module

You should do the same in your python files or alternatively add '{PATH_TO_SRC}' permanently to your PYTHONPATH environment variable.

Please also make sure to install and update the required Python packages when ever you 'git pull' the repository using

    pip install -r '{PATH_TO_PACKAGE_REQUIREMENTS_FILE}'
or

    conda install --yes --file '{PATH_TO_PACKAGE_REQUIREMENTS_FILE}'

    """
      )
