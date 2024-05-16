const mongoose = require("mongoose");
const { Schema } = mongoose;

const contratosSchema = new Schema({
    _id: Number, // Using the contract ID as a unique identifier
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: Number,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: String,
    entidade_comunicante: String,
    fundamentacao: String
});

module.exports = mongoose.model("contratos", contratosSchema);