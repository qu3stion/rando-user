import axios from 'axios'

export async function fetchUser() {
  const response = await axios.get('https://api.randomuser.me/')
  console.log(response);
  return response
}
