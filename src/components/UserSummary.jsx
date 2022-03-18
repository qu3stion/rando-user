import { useState, useEffect } from 'react'
import { fetchUser } from '../services/rando_user'

function RandomUser(props) {
  const [currentUser, setUser] = useState("")

  async function handleClick() {
    const answer = await fetchUser()

    setUser(answer.results)
      }
  useEffect(()  => {
    handleClick()
  }, [])

  return (
    <div>
      <h1>Random User API</h1>
      <button onClick={() => alert(useState.city)}>
      Click Here for a Random User
      </button>
      <p>{currentUser}</p>
    </div>

  )
}

export default RandomUser;
