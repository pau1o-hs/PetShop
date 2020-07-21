const { Router } = require('express');

const servicesController = require('../../controllers/services');

const router = Router();

router.get('/', servicesController.getAll);
router.get('/:slug', servicesController.getBySlug);
router.get('/group', servicesController.getGroup);

exports = router;
