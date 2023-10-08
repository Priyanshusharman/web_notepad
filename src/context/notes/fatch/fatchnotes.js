const requestOptions = {
    method: 'Get',
    headers:
        {
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzM5M2JkMWQ4ZGYwYjg3ZTRiZjA5In0sImlhdCI6MTY5NTYyODUwMH0.qajZbgtNSf34-Nit5-Aetqagz8uNyRkANU2JTqzRyks'
        }
};
const fatchnotes = fetch('http://localhost:7000/api/notes/getnotes', requestOptions)
    // .then(response => {return response.json()})
    // // .then(data =>{ return data});

export default fatchnotes
