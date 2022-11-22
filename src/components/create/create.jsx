import React,{useState, useEffet} from 'react';
import axios from 'axios'

export default function Create() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')


  const api = axios.create({
    baseURL: `https://AntiqueInsecureObject.ahmedibrahim13.repl.co`
  })

  const sendData = () =>{
    api.post('/', 'okat')
  }
  return (
  <form>
  <label>
    Name:
    <input type="text" name="name" onChange={(e) =>{setFirst(e.target.value)}}/>
  </label>
  <input type="submit" value="Submit" onClick={sendData}/>
    <hr/>
    <label>
    Surname:
    <input type="text" name="name" onChange={(e) =>{setLast(e.target.value)}}/>
  </label>
  <input type="submit" value="Submit" onClick={sendData}/>
</form>
  );
}
