// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export default function handler(req, res) {
  axios.get('https://www.gamerpower.com/api/giveaways')
  .then((result)=>{
  console.log(result)
  })
  .catch((err)=>{
    console.log(err);
    
  })
}

