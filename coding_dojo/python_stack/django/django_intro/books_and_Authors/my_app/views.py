from django.shortcuts import render, redirect
from .models import Book, Author

# Create your views here.
def index(request):
    context= {
        "all_books" : Book.objects.all(),
        "all_authors" : Author.objects.all()
    }
    return render(request, 'index.html', context)

def add_book(request):
    Book.objects.create(title=request.POST['title'])
    return redirect('/')

def show_database(request):
    context= {
        "all_books" : Book.objects.all(),
        "all_authors" : Author.objects.all()
    }
    return render(request, 'database.html', context)

def add_author_to_book(request):
    this_author = Author.objects.get(id=request.POST['select_author'])
    this_book = Book.objects.get(id=request.POST['select_book'])

    this_book.authors.add(this_author)
    return redirect('/database')

def display_authors(request):
    context= {
        "all_books" : Book.objects.all(),
        "all_authors" : Author.objects.all()
    }
    return render(request, 'authors.html', context)

def add_author(request):
    Author.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'])
    return redirect('/authorlist')

def authors(request):
    context= {
        "all_books" : Book.objects.all(),
        "all_authors" : Author.objects.all()
    }

    return render(request, 'authordatabase.html', context)

def add_book_to_author(request):
    this_author = Author.objects.get(id=request.POST['select_author'])
    this_book = Book.objects.get(id=request.POST['select_book'])

    this_book.authors.add(this_author)
    return redirect('/add_author')



