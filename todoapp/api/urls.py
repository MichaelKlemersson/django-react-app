from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^todos$', views.todo_list, name='todo_list')
    
]
