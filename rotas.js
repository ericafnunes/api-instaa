const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const postagens = require('./controladores/postagens');
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

// cadastro de usuarios

rotas.post('/cadastro', usuarios.cadastrarUsuario);

// login

rotas.post('/login', login.login);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

// obter e atualizar perfil do usuario logado 
rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil);

// postagens
rotas.post('/postagens', postagens.novaPostagem)
rotas.get('/postagens', postagens.feed)
rotas.post('/postagens/:postagemId/curtir', postagens.curtir);
rotas.post('/postagens/:postagemId/comentar', postagens.comentarPostagem);


module.exports = rotas;
