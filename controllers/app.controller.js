exports.hello = (req, res) => {
    res.status(200).json({msg: "Olá! A rota está funcionando."})
}
