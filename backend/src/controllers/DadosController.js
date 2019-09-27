const mongoose = require('mongoose');

const Dados = mongoose.model('Dados');

// app.get("/", (req, res )=>{
//     Dados.create({dado: 'Ajuste'});

//     return res.send("TEste");
// });


module.exports = {

    async index(req, res){
        const {page = 1} = req.query;
        const dados = await Dados.paginate({}, {page:page, limit:10});

        return res.json(dados);
    },

}