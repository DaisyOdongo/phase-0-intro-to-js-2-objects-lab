const employee = {name: "Sam", streetAddress: "11 Broadway"};

function updateEmployeeWithKeyAndValue(employee, name, mary) {
    return {...employee,[name]:mary} 
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Jane) {
    employee[name] = Jane;
  
    return employee;
  };
 
  function deleteFromEmployeeByKey(employee, name, mary) {
    let newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
 };
 
 function destructivelyDeleteFromEmployeeByKey(employee, name, Jane) {
    delete employee.name;  
    return employee;
  };
 
 
 