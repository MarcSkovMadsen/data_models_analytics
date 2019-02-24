import pytest


@pytest.mark.django_db
def test_docs(client):
    response = client.get("/docs/")
    assert response.status_code == 200
