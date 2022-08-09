import './App.css';
import { useEffect, useState } from 'react';
import Practice from './Pages/Practice/Practice';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:3300/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])



  const formSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email }

    fetch('http://localhost:3300/user', {
      method: "POST",
      headers: {
        'content-Type': "application/json"
      },
      body: JSON.stringify(user)

    }).then(res => res.json())
      .then(data => {
        const newUsers = [...users, data]
        setUsers(newUsers)
      })


  }
  return (
    <div className="App">
      <h2>We are loading Data</h2>
      <h1>{users?.length}</h1>



      <div>
        <form onSubmit={formSubmit} >
          <input type="text" name='name' />
          <br />
          <input type="email" name="email" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>


      {
        users.map(user => <li>{user.name}</li>)
      }

    </div>
  );
}

export default App;
