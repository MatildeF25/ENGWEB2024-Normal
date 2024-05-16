# ENGWEB2024-Normal

## Setup
- Após a análise do dataset fiz um ficheiro em python para converter o csv em json, depois de convertido alterei o "idcontrato" para _id para que o mongo não criasse outro id e usa-se o fornecido e também passei de atring para numero o _id o precoContratual e o prazoExecucao.
- Para importar o json para o mongo comecei por copiar o json para a pasta tmp do mongo com o comando:
```bash
docker cp contratos2024.json mongoEW:/tmp
```
- Depois importei o ficheiro para a base de dados contratos e para a coleção plantas com o comando:
```bash
docker exec mongoEW mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray
```
- Para verificar que a base de dados ficou criada e que a coleção foi preenchida com os dados do ficheiro json usei os comandos:
```bash
docker exec -it mongoEW mongosh
show dbs
use plantas
db.plantas.find()
```


## Ex1 API de dados
- Para criar a API corri, usei o Express Generator com o comando:
```bash
    npx express-generator --no-view ex1    
```
- Na pasta bin no ficheiro www, alterei a porta para 16000.
- Criei a pasta models e a pasta controllers onde iram ficar os ficheiros com as funções para aceder aos dados.
- Adicionei este código na app.js, para criar a conexão com o mongo:
```javascript
    var mongoose = require("mongoose");
    var mongoDB = "mongodb://127.0.0.1/contratos";
    mongoose.connect(mongoDB);
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB"));
    db.once("open", () => {
    console.log("Conexão ao MongoDB realizada com sucesso");
  });
```
- Para correr a API é preciso primeiro instalar as dependencias com os comandos:
```bash
    npm i mongoose --save
    npm i --save
```
- Depois de instalar as dependencias, correr a API com o comando:
```bash   
    npm start
 ```
- Para testar a API usei o Postman

## EX2 Interface 
- Para criar a interface usei o Express Generator com o comando:
```bash
    npx express-generator --view=pug ex2
```
- Na pasta bin no ficheiro www, alterei a porta para 16001.
- Fiz as páginas pug para a interface.
- Adicionei as routes para as páginas criadas.
- Para correr a Interface é preciso primeiro instalar as dependencias com os comandos:
```bash
    npm i --save
    npm i axios --save
```
- Depois de instalar as dependencias, correr a Interface com o comando:
```bash
    npm start
```
