from rest_framework import viewsets
from .serializers import TodoSerializer
from domains.todo.todo import Todo

class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()