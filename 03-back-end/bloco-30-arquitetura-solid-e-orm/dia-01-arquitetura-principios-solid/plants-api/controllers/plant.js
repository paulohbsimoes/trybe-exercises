const PlantServices = require('../services/plant');
const rescue = require('../utils/rescue');

const findAll = rescue(async (_req, res) => {
  const result = await PlantServices.findAll();
  res.json(result);
});

const findById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await PlantServices.findById(id);
  res.json(result);
});

const count = rescue(async (_req, res) => {
  const result = await PlantServices.count();
  res.json({ message: `${result} registered plant${result > 1 ? 's' : ''}` });
});

const remove = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await PlantServices.remove(id);
  res.json(result);
});

const create = rescue(async (req, res) => {
  const { breed, needsSun, origin, specialCare, size } = req.body;

  const result = await PlantServices.create({
    breed, needsSun, origin, specialCare, size
  });

  res.json(result);
});

const edit = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await PlantServices.edit(id, req.body);
  res.json(result);
});

const findAllPlantsThatNeedsSun = rescue(async (_req, res) => {
  const result = await PlantServices.findAllPlantsThatNeedsSun();
  res.json(result);
});

const findPlantsWithSpecialNeedsById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await PlantServices.findPlantsWithSpecialNeedsById(id);
  res.json(result);
});

module.exports = {
  findAll,
  findById,
  count,
  remove,
  create,
  edit,
  findAllPlantsThatNeedsSun,
  findPlantsWithSpecialNeedsById
}
