const Employee = require("../models/employee");

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
}

employeeCtrl.createEmployee = async(req, res)=> {
    console.log(req.body);
    res.json(req.body);
};

// employeeCtrl.getEmployee = function(){};

// employeeCtrl.editEmployee = function() {};

// employeeCtrl.deleteEmployee = function(){};

module.exports = employeeCtrl;
