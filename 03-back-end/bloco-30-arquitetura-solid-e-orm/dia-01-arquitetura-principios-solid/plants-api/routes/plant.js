const express = require('express');
const router = express.Router();
const PlantControllers = require('../controllers/plant');

router.get('/sunny/:id', PlantControllers.findPlantsWithSpecialNeedsById);
router.get('/sunny', PlantControllers.findAllPlantsThatNeedsSun);
router.get('/count', PlantControllers.count);
router.get('/:id', PlantControllers.findById);
router.get('/', PlantControllers.findAll);

router.post('/', PlantControllers.create);

router.put('/:id', PlantControllers.edit);

router.delete('/:id', PlantControllers.remove);

module.exports = router;
