const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data_criacao = require('./fields/data_criacao');
const data_atualizacao = require('./fields/data_atualizacao');
const email = require('./fields/email');
const senha = require('./fields/senha');
const nome = require('./fields/nome');


const _schema = {
  nome,
  senha,
  email,
  data_criacao,
  data_atualizacao,
  token: { type: String },
  ultimo_login: { type: Date, required: true, default: Date.now },
};

module.exports = mongoose.model('Usuario', new Schema(_schema));
