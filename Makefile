PY=python -m py_compile
livedocs:
	sphinx-autobuild docs/source docs/build/html --port 8001 --open-browser
mailhog:
	backend/Mailhog.exe