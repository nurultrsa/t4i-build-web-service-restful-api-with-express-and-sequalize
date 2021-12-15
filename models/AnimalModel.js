import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize;

const Animals = db.define('animals',{
	nama:{
		type: DataTypes.STRING
	},
	namaSpesies:{
		type: DataTypes.STRING
	},
	umur:{
		type: DataTypes.INTEGER
	},
},{
	freezeTableName:true
})

export default Animals 
