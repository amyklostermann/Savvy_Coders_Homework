// https://jsonplaceholder.typicode.com/todos
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))
const data = [
    {
       "userId": 9,
       "id": 161,
       "title": "ex hic consequuntur earum omnis alias ut occaecati culpa",
       "completed": true
     },
     {
       "userId": 9,
       "id": 162,
       "title": "omnis laboriosam molestias animi sunt dolore",
       "completed": true
     },
     {
       "userId": 9,
       "id": 163,
       "title": "natus corrupti maxime laudantium et voluptatem laboriosam odit",
       "completed": false
     },
     {
       "userId": 9,
       "id": 164,
       "title": "reprehenderit quos aut aut consequatur est sed",
       "completed": false
     },
     {
       "userId": 9,
       "id": 165,
       "title": "fugiat perferendis sed aut quidem",
       "completed": false
     },
     {
       "userId": 9,
       "id": 166,
       "title": "quos quo possimus suscipit minima ut",
       "completed": false
     },
     {
       "userId": 9,
       "id": 167,
       "title": "et quis minus quo a asperiores molestiae",
       "completed": false
     },
     {
       "userId": 9,
       "id": 168,
       "title": "recusandae quia qui sunt libero",
       "completed": false
     },
     {
       "userId": 9,
       "id": 169,
       "title": "ea odio perferendis officiis",
       "completed": true
     },
     {
       "userId": 9,
       "id": 170,
       "title": "quisquam aliquam quia doloribus aut",
       "completed": false
     },
     {
       "userId": 9,
       "id": 171,
       "title": "fugiat aut voluptatibus corrupti deleniti velit iste odio",
       "completed": true
     },
     {
       "userId": 9,
       "id": 172,
       "title": "et provident amet rerum consectetur et voluptatum",
       "completed": false
     },
     {
       "userId": 9,
       "id": 173,
       "title": "harum ad aperiam quis",
       "completed": false
     },
     {
       "userId": 9,
       "id": 174,
       "title": "similique aut quo",
       "completed": false
     },
     {
       "userId": 9,
       "id": 175,
       "title": "laudantium eius officia perferendis provident perspiciatis asperiores",
       "completed": true
     },
     {
       "userId": 9,
       "id": 176,
       "title": "magni soluta corrupti ut maiores rem quidem",
       "completed": false
     },
     {
       "userId": 9,
       "id": 177,
       "title": "et placeat temporibus voluptas est tempora quos quibusdam",
       "completed": false
     },
     {
       "userId": 9,
       "id": 178,
       "title": "nesciunt itaque commodi tempore",
       "completed": true
     },
     {
       "userId": 9,
       "id": 179,
       "title": "omnis consequuntur cupiditate impedit itaque ipsam quo",
       "completed": true
     },
     {
       "userId": 9,
       "id": 180,
       "title": "debitis nisi et dolorem repellat et",
       "completed": true
     }
     ]
     
 //create a list of user 9's to-dos
const user9ToDos = data.filter(task => task.userId === 9);
console.log(user9ToDos);

//then find the number of user 9's incomplete tasks
const user9UnfinishedTasks = user9ToDos.filter(
  task => task.completed === false
);
console.log(user9UnfinishedTasks);
