mypy:
	mypy .
mailhog:
	Mailhog.exe
livedocs:
	sphinx-autobuild apps/docs/source apps/source/docs/_build/html --port 8001 --open-browser
builddocs:
	sphinx-build -b html apps/docs/source apps/source/docs/_build/html
runserver:
	python manage.py runserver