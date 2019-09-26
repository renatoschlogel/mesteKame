const { Schema, model } = require('mongoose'); 

const DadosSchema = new Schema({
     descricao: {
        type: String,
        required:true
    }
}, {
    timestamps: true
});

module.exports = model('Dados', DadosSchema);