// Write your solution in this file!
const employee = {
    name: 'Sam',
    address: '11 Broadway'
};

const updateEmployeeWithKeyAndValue = (obj, key, val) => {
    let employee1 = {...obj};
    employee1[key] = val;
    return employee1;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, val) => {
    obj[key] = val;
    return obj;
}

const deleteFromEmployeeByKey = (obj, key) => {
    let employee1 = {...obj};
    delete employee1[key];
    return employee1;
}

const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
    delete obj[key];
    return obj;
}