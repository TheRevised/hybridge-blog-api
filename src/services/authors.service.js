// Acceso a datos de autores (sin depender de req/res).
const db = require('../../models');

const findAll = () => db.Author.findAll();

const findById = (id) => db.Author.findByPk(id);

const create = ({ name }) => db.Author.create({ name });

// Devuelve el autor actualizado o null si no existe.
const update = async (id, { name }) => {
  const author = await db.Author.findByPk(id);
  if (!author) return null;
  author.name = name;
  await author.save();
  return author;
};

// Devuelve true si se eliminó o false si no existe.
const remove = async (id) => {
  const author = await db.Author.findByPk(id);
  if (!author) return false;
  await author.destroy();
  return true;
};

module.exports = { findAll, findById, create, update, remove };
