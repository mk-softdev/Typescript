    // function showTodo(todo:{title:string,text:string}){
    //     return console.log(`${todo.title}: ${todo.text}`
    // }

    // let myTodo = {title : 'Trash', text : 'Take out Trash'}

    // showTodo(myTodo)

    //CREATING INTERFACE

    interface Todo{
        title : string;
        text : string;
    }

    function showTodo(todo:Todo){
        return console.log(`${todo.title}: ${todo.text}`)
    }

    let myTodo = {title : 'Client Metting', text: 'Bug Discussion'}

    showTodo(myTodo)