interface Todo {
    id: number;
    title: string;
    status: TodoStatus;
    completedOn?: Date;
}
enum TodoStatus {
    todo = "todo", inProgress = "in-progress", Done = "done"
}

const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 1, title: "Learn HTML", status: TodoStatus.inProgress }
]
function addTodoItem(todo: string): Todo {
    const id = getNextId(todoItems);
    const newTodo = {
        id, title: todo, status: TodoStatus.todo
    }
    todoItems.push(newTodo);
    return newTodo;
}
// id:number is a generic constrait as ts don't know about id and give error about id
function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => (x.id > max) ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy a gift for navne")


