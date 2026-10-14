// Acceso a datos de publicaciones (sin depender de req/res).
const db = require('../../models');

const findAll = () => db.Post.findAll();

const findById = (id) => db.Post.findByPk(id);

const create = ({ title, content, authorId }) => db.Post.create({ title, content, authorId });

// Devuelve el post actualizado o null si no existe.
const update = async (id, { title, content }) => {
  const post = await db.Post.findByPk(id);
  if (!post) return null;
  post.title = title;
  post.content = content;
  await post.save();
  return post;
};

// Devuelve true si se eliminó o false si no existe.
const remove = async (id) => {
  const post = await db.Post.findByPk(id);
  if (!post) return false;
  await post.destroy();
  return true;
};

module.exports = { findAll, findById, create, update, remove };
