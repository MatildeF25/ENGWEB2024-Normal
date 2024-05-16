var express = require('express');
var router = express.Router();
var axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:16000/contratos')
    .then(function(response){
      res.render('index', { title: "Página Inicial", contratos: response.data });
    })
    .catch(function(error){
      console.log(error);
    });
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos/' + req.params.id)
    .then(function(response){
      res.render('contrato', { title: "Contrato", contrato: response.data });
    })
    .catch(function(error){
      console.log(error);
    });
});

router.get('/entidade/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos?entidades=' + req.params.id)
    .then(function(response){
      const contratos = response.data;
      let totalContratos = 0;
      contratos.forEach(contrato => {
        totalContratos += contrato.precoContratual;});
      res.render('entidades', { title: "Entidade", entidade: req.params.id, contratos: response.data, NomeEntidade: response.data[0]["entidade_comunicante"], totalContratos: totalContratos });
    })
    .catch(function(error){
      console.log(error);
    });
});


module.exports = router;
