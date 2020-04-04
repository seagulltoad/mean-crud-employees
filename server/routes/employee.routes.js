const express = require("express");
const router = express.Router();

const employeeCtrl = require('../controllers/employee.controller');

router.get("/", employeeCtrl.getEmployees);
router.post("/", employeeCtrl.createEmployee);
router.get("/:id", employeeCtrl.getEmployee);
router.put("/:id", employeeCtrl.editEmployee);
router.delete("/:id", employeeCtrl.deleteEmployee);

module.exports = router;