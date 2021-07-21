import mongodb from 'mongodb';
// Connection URL
const url = 'mongodb://localhost:27017';

// Mongo instance, DB name and collection name
const client = new mongodb.MongoClient(url);

// Use connect method to connect to the server

export function connectMongo(){
  client.connect(function(err) {
    if(err)throw err;
    console.log('Connected successfully to server');
  });  
}

//Search user in DB and
export async function findUser(user){
  const db = getDb();
  const collection = db.collection('usuarios');
  const searchResult = await collection.find({_id: user._id}).toArray();
  return searchResult;
}

function getDb(){
  return client.db('cadastraUsuario');
}

export function saveUser(user){
  const db = getDb();
  const collection = db.collection('usuarios');
  return collection.insertOne(user, (err, result)=>{
    if(err) console.error(err);
    if(result) console.log(result);
  });
}

export function closeDb(){
  client.close();
}