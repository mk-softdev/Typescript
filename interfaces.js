// function showTodo(todo:{title:string,text:string}){
//     return console.log(`${todo.title}: ${todo.text}`
// }
function showTodo(todo) {
    return console.log(todo.title + ": " + todo.text);
}
var myTodo = { title: 'Client Metting', text: 'Bug Discussion' };
showTodo(myTodo);
