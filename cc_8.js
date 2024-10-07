cc_8.js
//Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() {
        return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
    }
}
//Create a Department Class
class Department {
    constructor(name) {
        this.name = name;
        this.employees = []; // Array to hold Employee objects
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        }
    }

    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
}
