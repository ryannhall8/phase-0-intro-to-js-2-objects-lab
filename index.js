let employee = {
    name: "Jane Doe",
    streetAdress: "11226 Mistyhallow rd, chesterfield, VA"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    if (!employee || typeof employee !== "object") {
        throw new TypeError("The first argument must be a valid object");
    }
    let newEmployee = {...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}