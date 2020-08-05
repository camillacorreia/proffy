import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    console.log(request.body);
    
    const users = [
        {name: 'Camilla', age: 25 }
    ];

    return response.json(users);
});

app.listen(3333);