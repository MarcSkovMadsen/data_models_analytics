"""In this module we define the urlpatterns of the docs app"""
from django.conf import settings
from django.urls import path, re_path
from django.views.static import serve

app_name = "docs"
urlpatterns = [
    path("", serve, {"document_root": settings.DOCS_ROOT, "path": "index.html"}),
    re_path("(?P<path>.*)$", serve, {"document_root": settings.DOCS_ROOT}),
    path("<str:path>", serve, {"document_root": settings.DOCS_ROOT}),
]
