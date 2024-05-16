const contratos = require('../models/contratos');

module.exports.listarTudo = () => {
    return contratos.find().exec();
}

module.exports.findById = id => {
    const res = contratos.findOne({ _id: id }).exec();
    return res;
}

module.exports.findByEntidade = entidade => {
    const res = contratos.find({NIPC_entidade_comunicante: entidade }).exec();
    return res;
}

module.exports.findByTipo = tipo => {
    const res = contratos.find({ tipoprocedimento: tipo }).exec();
    return res;
}

module.exports.listarEntidades = () => {
    return contratos.distinct('entidade_comunicante').sort().exec();
}

module.exports.listarTipos = () => {
    return contratos.distinct('tipoprocedimento').sort().exec();
}

module.exports.acrescentarContrato = contrato => {
    return contratos.create(contrato);
}

module.exports.apagarContrato = id => {
    return contratos.deleteOne({ _id: id});
}

module.exports.alterarContrato = (id, contrato) => {
    return contratos.findByIdAndUpdate(id, contrato, {new: true}).exec();
}