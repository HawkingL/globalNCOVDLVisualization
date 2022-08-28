import express, {Express, Router} from "express";
import axios from 'axios'


const app: Express = express()

const router: Router = express.Router()

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use('/api', router)

router.post('/list', async (req, res) => {
  const result = await axios.get('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf')
  res.json({
    ...result.data.data
  })
})


app.listen(8080, () => {
  console.log('success server http://localhost:8080');
})