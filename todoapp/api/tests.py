from django.test import TestCase
from domains.todo.todo import Todo
from domains.todo.exceptions.invalid_todo_name import InvalidTodoException

# Create your tests here.
class TodoClassTest(TestCase):

    def test_can_not_intantiate_todo_without_title(self):
        self.assertRaises(TypeError, Todo)
        self.assertRaises(InvalidTodoException, Todo, title='')

    def test_can_instantiate_todo(self):
        todo_title = 'a simple todo'
        todo = Todo(title=todo_title)
        self.assertEqual(todo_title, todo.title)