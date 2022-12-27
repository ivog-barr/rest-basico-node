const { response, request } = require("express");

const userGet = (req, res = response) => {
    const {q, nombre, apikey} = req.query;
  res.json({
    msg: "Get API",
    q,
    nombre,
    apikey
  });
};

const userPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "Post API",
    nombre,
    edad,
  });
};

const userPut = (req, res = response) => {
    const {id} = req.params;
  res.json({
    msg: "Put API",
    id
  });
};

const userPatch = (req, res = response) => {
  res.json({
    msg: "Patch API",
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "Delete API",
  });
};

module.exports = {
  userGet,
  userDelete,
  userPatch,
  userPost,
  userPut,
};
