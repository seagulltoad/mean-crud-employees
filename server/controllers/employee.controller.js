const Employee = require("../models/employee");

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeeCtrl.createEmployee = async(req, res)=> {
    
};

employeeCtrl.getEmployee =  async(req, res)=> {};

employeeCtrl.editEmployee = async(req, res)=> {};

employeeCtrl.deleteEmployee = async(req, res)=>  {};

module.exports = employeeCtrl;
