from django.shortcuts import render, HttpResponse, redirect 
import random

# Create your views here.
def index(request):
    message = ''
    if 'guess' in request.session and 'number' in request.session:
        if int(request.session['guess']) < request.session['number']:
            message = "Too low"
        elif int(request.session['guess']) > request.session['number']: 
            message = "Too high"
        elif int(request.session['guess'])== request.session['number']:
            message = "Correct!"

    context = {
        'message' : message
    }
    return render(request, 'index.html', context)

def result(request):
    num = int(request.POST['number'])
    request.session['guess'] = num
    request.session['number'] = random.randint(1,100)
    return redirect('/')

