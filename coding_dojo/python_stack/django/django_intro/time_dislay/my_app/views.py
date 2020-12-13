from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime

# Create your views here.
def index(request):
    return redirect('/time_display')

def time(request):
    context = {
        "time": strftime("%H: %M %p", gmtime()),
        "date": strftime("%b %d, %Y", gmtime())
    }
    return render(request,'index.html', context)
