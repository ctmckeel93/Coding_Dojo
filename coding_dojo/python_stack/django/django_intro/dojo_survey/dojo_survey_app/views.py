from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

# def create(request):
#     if

def result(request):
    context = {
        'fname': request.POST['fname'],
        'lname' : request.POST['lname'],
        'uname' : request.POST['uname'],
        'city' : request.POST['city'],
        'state' : request.POST['state'],
        'zip' : request.POST['zip'],
        'Agree_to_terms' : request.POST['agree'],
    }
    return render(request, 'result.html', context)
