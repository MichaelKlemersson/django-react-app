from django.urls import reverse
from django.test import TestCase
from domains.todo.todo import Todo
from domains.todo.exceptions.invalid_todo_name import InvalidTodoException
from rest_framework.test import APITestCase
from rest_framework import status
import json

# Create your tests here.
class TodoClassTest(TestCase):

    def test_can_not_intantiate_todo_without_title(self):
        self.assertRaises(InvalidTodoException, Todo)
        self.assertRaises(InvalidTodoException, Todo, title='')

    def test_can_instantiate_todo(self):
        todo_title = 'a simple todo'
        todo = Todo(title=todo_title)
        self.assertEqual(todo_title, todo.title)

class TodoApiTest(APITestCase):

    def test_can_create_todo(self):
        todo_title = 'test todo'
        response = self.client.post(reverse('todo-list'), {'title': todo_title}, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(todo_title in list(response.data.values()))

    def test_can_set_todo_as_done(self):
        todo_title = 'test todo'
        todo = Todo.objects.create(title=todo_title)
        self.assertEqual(todo_title, todo.title)
        self.assertEqual(Todo.DOING, todo.status)

        response = self.client.put(reverse('todo-detail', kwargs={'pk': todo.id}), {'title': todo_title})
        self.assertEqual(response.status_code, status.HTTP_200_OK)