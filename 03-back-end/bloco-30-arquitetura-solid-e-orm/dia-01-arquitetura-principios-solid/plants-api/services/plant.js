const PlantModel = require('../models/plant');
const PlantSchema = require('../schema/plant');

const findAll = () => PlantModel.findAll();

const findById = (id) => PlantModel.findById(id);

const count = async () => (await findAll()).length;

const remove = async (id) => PlantModel.removeById(id);

const create = async (plantData) => PlantModel.create(plantData);

const edit = async (id, plantData) => {
  const { error } = PlantSchema.validate(plantData);
  if (error) throw error;
  return PlantModel.edit(id, plantData);
}

const findAllPlantsThatNeedsSun = async () => {
  const plants = await PlantModel.findAll();
  return plants.filter((plant) => plant.needsSun);
}

const haveMinimumWaterFrequency = (plant, minimumWaterFrequency) => {
  const { specialCare } = plant;
  return (specialCare && (specialCare.waterFrequency > minimumWaterFrequency));
}

const findPlantsWithSpecialNeedsById = async (id) => {
  const plantsThatNeedsSun = await findAllPlantsThatNeedsSun();
  return plantsThatNeedsSun
    .filter((plant) => haveMinimumWaterFrequency(plant, 2))
    .find((plant) => String(plant._id) === id);
};

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
