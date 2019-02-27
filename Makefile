PY=python -m py_compile
mailhog:
	backend/Mailhog.exe
livedocs:
	sphinx-autobuild backend/apps/docs/source backend/apps/source/docs/_build/html --port 8001 --open-browser
runserver:
	python backend/manage.py runserver
.serveall:
	livedocs
	runserver