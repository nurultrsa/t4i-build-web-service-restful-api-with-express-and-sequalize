import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import db from "./config/Database.js"
import router from "./routes/index.js"
// Active comment to migrate 
// import Users from "./models/UserModel.js"
// import Animals from "./models/AnimalModel.js"

dotenv.config()
const app = express()
const port = 3000

async function checkConnection(){
	try{
		await db.authenticate()
		console.log("Connection Success")
		// Active comment to migrate 
		// await Users.sync()
		// await Animals.sync()
	}catch(e){
		console.log("Connection Error : ", e)
	}
}

checkConnection()

app.use(cors({ credentials:true, origin:'https://localhost:3000' }))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})