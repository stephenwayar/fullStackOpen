import axios from "axios"

const baseURl = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(baseURl)
  return request.then(res => {
    return res.data
  })
}

const create = personObject => {
  const request = axios.post(baseURl, personObject)
  return request.then(res => {
    return res.data
  })
}

const update = (id, updatedNote) => {
  const request = axios.put(`${baseURl}/${id}`, updatedNote)
  return request
}

const del = deleteURL => {
  const request = axios.delete(deleteURL)
  return request
}

export default {
  getAll, 
  create, 
  update, 
  del
}