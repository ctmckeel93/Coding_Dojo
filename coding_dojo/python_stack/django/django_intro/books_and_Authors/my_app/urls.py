from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('add_book', views.add_book),
    path('database', views.show_database),
    path('authortobook', views.add_author_to_book),
    path('authorlist', views.display_authors),
    path('add_author', views.add_author),
    path('authordatabase', views.authors),
    path('booktoauthor', views.add_book_to_author)

]