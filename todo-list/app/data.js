/**
 * TodoList
 */
function UUID() {
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const data={
  todoGroupList: [],
  todoList: [],
};

const methods = {
  init () {

  },
  /**
   * TodoGroup
   */
  addTodoGroup(obj) {
    data.todoGroupList.push(obj);
  },
  removeTodoGroup(id) {

  },
  /**
   * Todo
   */
  addTodo() {

  },
  removeTodo () {

  }
};

default methods;