import axios from "axios"

const baseURl = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(baseURl)
  return request.then(res => {
    return res.data
  })
}

const create = (personObject) => {
  const request = axios.post(baseURl, personObject)
  return request.then(res => {
    return res.data
  })
}

export default {getAll, create}