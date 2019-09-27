const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DadosSchema = new Schema({
     dado: {
        type: String,
        required:true
    }
});

DadosSchema.plugin(mongoosePaginate);

module.exports = model('Dados', DadosSchema);