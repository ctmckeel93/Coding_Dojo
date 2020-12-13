from typing import Counter
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    if 'count'  not in request.session:
        request.session['count'] = 0
    else:
        request.session['count'] +=1
        
    return render(request, 'index.html')

def destroy(request):
    request.session['count'] = False
    return redirect('/')

def addTwo(request):
    request.session['count'] +=2
    return render(request, 'index.html')
    
