export const createTodo = async(user, title, description, done) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            user,
            title,
            description,
            done
        }),
        redirect: 'follow'
    };

    fetch('http://localhost:8000/api/todos/', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
};

export const listTodos = async() => {
    const url = "http://localhost:8000/api/todos/";
    const res = await fetch(url);
    const data = await res.json();
    return data;
};