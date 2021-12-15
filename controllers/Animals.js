import Animals from "../models/AnimalModel.js"

export const Index = async(req, res) => {
	try{
		const animals = await Animals.findAll()
		res.json(animals)
	}catch(e){
		console.log(e)
	}
}

export const Store = async(req, res) => {
	const { nama, namaSpesies, umur } = req.body
	try{
		await Animals.create({
			nama: nama,
			namaSpesies: namaSpesies,
			umur: umur,
		})
		res.json({msg: "Success create animal"})
	}catch(e){
		console.log(e)
	}
}

export const Update = async(req, res) => {
	try{
		const animalId = req.params.id
		const { nama, namaSpesies, umur } = req.body
		const animal = {
	        nama: nama,
			namaSpesies: namaSpesies,
			umur: umur,
        }
		await Animals.update(animal, {
            where : {
                id : animalId
            }
        })
		res.json({msg: "Success update animal" + title})
	}catch(e){
		console.log(e)
	}
}

export const Delete = async(req, res) => {
	const animalId = req.params.id
	try{
		await Animals.destroy({
            where : {
                id : animalId
            }
        })
		res.json({msg: "Success delete animal" + title})
	}catch(e){
		console.log(e)
	}
}
