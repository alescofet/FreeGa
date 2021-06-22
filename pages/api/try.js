import axios from "axios"

export default function api (req, res) {
  const url = `https://www.gamerpower.com/api/giveaways`
    axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}