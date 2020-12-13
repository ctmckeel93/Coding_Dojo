from django.shortcuts import render, redirect, HttpResponse
import random, datetime
# Create your views here.
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
        request.session['values'] = []


    return render(request, 'index.html')

def find_gold(request):
    if request.POST['locations'] == 'farm':
        num = random.randint(10,20)
        request.session['gold'] += num
        

    elif request.POST['locations'] == 'cave':
        num = random.randint(5,10)
        request.session['gold'] += num

    elif request.POST['locations'] == 'house':
        num = random.randint(2,5)
        request.session['gold'] += num

    elif request.POST['locations'] == 'casino':
        num = random.randint(-50,50)
        request.session['gold'] += num
    value = request.POST['locations']
    request.session['values'].append({'locations' : value , 'gold' : num})
    return redirect('/')

def reset(request):
    if 'gold' in request.session:
        del request.session['gold']
    return redirect('/')