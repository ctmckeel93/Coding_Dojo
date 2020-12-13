from django.shortcuts import render, redirect
from .models import dojos, ninjas

# Create your views here.
def index(request):
    context = {
        "all_dojos" : dojos.objects.all(),
    }
    return render(request, 'index.html', context)

    
def create_dojo(request):
    dojos.objects.create(name=request.POST['name'], city=request.POST['city'], state=request.POST['state'])
    return redirect('/')


def add_to_dojo(request):
    this_dojo = dojos.objects.all().get(id=request.POST['dojo'])
    ninja = ninjas.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], dojo=this_dojo)

    this_dojo.ninja.add(ninja)
    
    return redirect('/')

    
# def add_ninja(request):
#     new_ninja = ninjas.objects.get(id=request.POST["add_ninja"])
#     this_dojo = dojos.objects.get(id=request.POST['dojo'])


#     this_dojo.ninjas.add(new_ninja)
#     return redirect('/')


    





