//async javascript promise
fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

//async / await
async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
}

getUsers();