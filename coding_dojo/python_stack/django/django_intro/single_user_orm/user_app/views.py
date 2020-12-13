from django.shortcuts import render, redirect
from .models import User

# Create your views here.
def index(request):
    context = {
        'all_users' : User.objects.all()
    }
    return render(request, 'index.html', context)

def submit(request):
    if request.method == 'POST':
        # if request.POST.get('name') and request.POST.get('age') and request.POST.get('email'):
        post = User()
        post.name= request.POST.get('name')
        post.age = request.POST.get('age')
        post.email = request.POST.get('email')
        post.save()
    
    return redirect('/')
