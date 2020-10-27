import React , {useEffect,useState} from 'react';
import './App.css';
import UserList from  './UserList'
import axios from 'axios'
function App() {

  const [listOfUsers, setListOfUsers] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>setListOfUsers(res.data)).catch(err=>setError(err))
 
 }, []);
 
 
  return (
    <div className="App">

    <UserList listOfUsers={listOfUsers} />

    </div>
  );
}

export default App;
