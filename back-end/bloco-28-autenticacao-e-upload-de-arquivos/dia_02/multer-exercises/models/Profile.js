const { getProfiles, setProfiles } = require('../utils/fsProfiles');

const serialize = ({ id, name, email, bio }) => ({ id, name, email, bio });

const create = async ({ id, name , email , password, bio }) => {
  const profiles = await getProfiles();
  profiles.push({ id, name, email, password, bio });
  await setProfiles(profiles);
  return { id, name, email, bio };
}

const getById = async (id) => {
  const profiles = await getProfiles();
  const result = profiles.find((profile) => profile.id === id);
  if (result) return serialize(result);
  return null;
}

const getAll = async () => {
  const profiles = await getProfiles();
  return profiles.map(serialize);
}

module.exports = {
  create,
  getById,
  getAll
}
