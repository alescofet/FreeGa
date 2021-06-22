import styles from '../styles/Home.module.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';


export default function List() {
const [games,setGames] = useState()

useEffect(() => 
axios.get('/api/try')
.then((result)=>{
setGames(result.data.data)
})
.catch((err)=>{
console.log(err)
})
, [])

console.log(games)
return(
    
)







}