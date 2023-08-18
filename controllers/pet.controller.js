const { Pet } = require('../models/index')

exports.cadastroMeuPet = async (req, res) => {
    try {
        const { nome, especie, raca, anos, vacinas, dono, cpf } = req.body

        const registerValidation = await Pet.findOne({where: {cpf}})

        if(registerValidation) {
            return res.status(200).json('Este pet já está cadastrado')
        }

        if(!nome || !dono || !cpf) {
            return res.status(400).json({'erro': 'Campo nome, dono, cpf são necessários. Por favor, tente novamente!'})
        }

        const dataPet = {
            nome: nome,
            especie: especie,
            raca: raca,
            anos: anos,
            vacinas: vacinas,
            dono: dono,
            cpf: cpf
        }
        
        const myPet = await Pet.create(dataPet)

        return res.status(200).json({Pet: myPet})
        
    } catch (error) {
        res.status(500).json('bichinho não cadastrado')
    }
}

exports.listaTodosPets = async (req, res) => {
    
    const encontraPet = await Pet.findAll()

    if(!encontraPet){
        return res.status(500).json('Não há lista de pets')
    }

    return res.status(200).json(encontraPet)

}

exports.listaUmPet = async (req, res) => {
    const  id = req.params.id
    const encontraUmPet = await Pet.findOne({ where: {id} })

    if(!encontraUmPet) {
        return res.status(404).json('Pet não encontrado.')
    }

    return res.status(200).json(encontraUmPet)

}

exports.atualizaPets = async (req, res) => {
    const id = req.params.id
    const novaInfos = req.body

    await Pet.update(novaInfos, { where: {id}})
    return res.status(200).json('Informações atualizadas')
}

exports.apagaPet = async (req, res) => {
    const id = req.params.id

    const apagarPet = await Pet.destroy({ where: {id}})
    return res.status(200).json('Pet deletado')
} 