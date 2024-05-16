var express = require('express');
var router = express.Router();
var contratos = require('../controllers/contratos');

router.get('/', function(req, res, next) {
    if (req.query.entidade) {
        contratos.findByEntidade(req.query.entidade)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
    }
    else if (req.query.tipo) {
        contratos.findByTipo(req.query.tipo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
    } 
    else{
        contratos.listarTudo()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
    }
});


router.get('/entidades', function(req, res, next) {
    contratos.listarEntidades()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.get('/tipos', function(req, res, next) {
    contratos.listarTipos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});


router.get('/:id', function(req, res, next) {
    contratos.findById(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.post('/', function(req, res, next) {
    contratos.acrescentarContrato(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.delete('/:id', function(req, res, next) {
    contratos.apagarContrato(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.put('/:id', function(req, res, next) {
    contratos.alterarContrato(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});


module.exports = router;