import axios from 'axios'
const baseUrl = 'http://localhost:4001/api/articles'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  {
    console.log(response.headers)
    return response.data
  }
}

export default { getAll, getOne }
