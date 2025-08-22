import * as departmentService from "../services/departmentService.js";

export const getDepartments = async (req, res) => {
  const filters = {
    departmentId: req.query.departmentId,
  };

  const departments = await departmentService.getAllDepartments(filters);
  res.json(departments);
};

export const getDepartmentByID = async (req, res) => {
  const { id } = req.params;
  const department = await departmentService.getDepartmentByID(id);
  if (!department) {
    res.status(404);
    throw new Error("Department not found");
  }
  res.json(department);
};

export const createDepartment = async (req, res) => {
  const createdDepartment = await departmentService.createDepartment(req.body);
  res.status(201).json(createdDepartment);
};

export const deleteDepartmentsByIDs = async (req, res) => {
  const { ids } = req.body;
  if (!Array.isArray(ids) || ids.length === 0) {
    res.status(400);
    throw new Error("IDs array is required");
  }
  await departmentService.deleteDepartmentsByIDs(ids);
  res.json({ message: "Departments deleted successfully" });
};

export const replaceDepartment = async (req, res) => {
  const { id } = req.params;
  const updatedDepartment = await departmentService.updateFullDepartment(id, req.body);
  if (!updatedDepartment) {
    res.status(404);
    throw new Error("Department not found");
  }
  res.json(updatedDepartment);
};

export const updateDepartmentPartial = async (req, res) => {
  const { id } = req.params;
  const updatedDepartment = await departmentService.updateDepartmentPartial(id, req.body);
  if (!updatedDepartment) {
    res.status(404);
    throw new Error("Department not found");
  }
  res.json(updatedDepartment);
};

export const deleteDepartmentByID = async (req, res) => {
  const { id } = req.params;
  const deleted = await departmentService.deleteDepartmentByID(id);
  if (!deleted) {
    res.status(404);
    throw new Error("Department not found");
  }
  res.json({ message: "Department deleted successfully" });
};
