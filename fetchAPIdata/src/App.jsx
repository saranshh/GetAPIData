import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import UserData from './components/UserData'

function App() {
  const [users, setUsers] = useState([])

  const fetchAPIdata = async (url) => {
    try {
      const res = await axios.get(url)
      setUsers(res.data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAPIdata("http://localhost:3000/users")
  }, [])

  return (
    <>
    <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users} />
      </tbody>
    </table>
    </>
  )
}

export default App
