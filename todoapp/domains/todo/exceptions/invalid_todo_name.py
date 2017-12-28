class InvalidTodoException(Exception):
    def __init__(self):
        Exception.__init__(self, "Can not create a todo without a title")