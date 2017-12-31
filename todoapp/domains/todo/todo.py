from django.db import models
from domains.todo.exceptions.invalid_todo_name import InvalidTodoException

class Todo(models.Model):
    DOING = 'Doing'
    DONE = 'Done'

    STATUS_CHOICES = (
        (DOING, DOING),
        (DONE, DONE)
    )

    title = models.CharField(max_length=255, db_index=True)
    status = models.CharField(
        max_length=5,
        choices=STATUS_CHOICES,
        default=DOING,
        db_index=True
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if None == self.title or self.title.strip() == '':
            raise InvalidTodoException

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'todos'