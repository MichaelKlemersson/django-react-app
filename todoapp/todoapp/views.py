from django.shortcuts import render
from django.forms.models import model_to_dict
from domains.todo.todo import Todo
from django.core import serializers
import json

def home(request):
    todos = [model_to_dict(item) for item in Todo.objects.all()]
    return render(
        request,
        'todo/index.html',
        {
            'todos': json.dumps(todos)
        }
    )