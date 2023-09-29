import React from 'react'

const requestOptions = {
    method: 'POST',
    "headers": [
        {
            "name": "Content-Type",
            "value": "application/json"
        },
        {
            "name": "auth-token",
            "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzM5M2JkMWQ4ZGYwYjg3ZTRiZjA5In0sImlhdCI6MTY5NTYyODUwMH0.qajZbgtNSf34-Nit5-Aetqagz8uNyRkANU2JTqzRyks"
        }
    ],
    body: JSON.stringify({ title: 'Fetch POST Request Example' })
};
const fatchnotes = fetch('https://reqres.in/api/articles', requestOptions)
    .then(response => response.json())
    .then(data => element.innerHTML = data.id);

export default fatchnotes
