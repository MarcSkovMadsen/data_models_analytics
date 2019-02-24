import pytest


@pytest.mark.django_db
@pytest.mark.parametrize(["url"], [("/docs/",), ("/docs/_static/file.png",)])
def test_docs(client, url):
    response = client.get(url)
    assert response.status_code == 200
