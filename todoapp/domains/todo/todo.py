from django.db import models
from domains.todo.exceptions.invalid_todo_name import InvalidTodoException

class Todo(models.Model):
    def __init__(self, title):
        if title.strip() == '':
            raise InvalidTodoException
        self.title = title