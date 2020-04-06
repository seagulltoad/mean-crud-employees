const Employee = require("../models/employee");

const employeeCtrl = {};
// list
employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
// create
employeeCtrl.createEmployee = async (req, res) => {
  // const employee = new Employee(req.body);
  const employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  });
  await employee.save();
  res.json({
    status: "Employee Saved"
  });
};
//get 
employeeCtrl.getEmployee = async (req, res) => {
  // console.log(req.params.id)
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};
// edit
employeeCtrl.editEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };
  await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
  res.json({ status: "Employee Updated" });
};
// delete
employeeCtrl.deleteEmployee = async (req, res) => { 
  await Employee.findByIdAndRemove(req.params.id);
  res.json({
    status: "Employee Deleted"
  });
};

module.exports = employeeCtrl;
