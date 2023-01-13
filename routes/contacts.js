const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts")


router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createSingle);

router.put('/:id', contactsController.updateSingle);

router.delete('/:id', contactsController.deleteSingle);

// router.get("/", function (req, res) {
//   res.send("Victor Lopez");
// });


module.exports = router;