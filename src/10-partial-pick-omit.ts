interface Employee {
  name: string,
  id: number,
  salary: number,
  department: string
}
function updateEmployee(employee: Partial<Employee>) {
  return employee;
}
console.log(updateEmployee({ name: "Aminul" }))



type EmployeeBasic = Pick<Employee, "name" | "id">
const employeeBasic: EmployeeBasic = {
  name: "Aminul",
  id: 1
}
console.log(employeeBasic)


type EmployeeWithoutSalary = Omit<Employee, "salary">
const employeeInfo: EmployeeWithoutSalary = {
  name: "Aminul", id: 1, department: "IT"
}
console.log(employeeInfo)