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
// Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department); // Call the parent constructor
        this.bonus = bonus; // Additional property for Manager
    }

    getDetails() {
        return `${super.getDetails()}, Bonus: $${this.bonus}`; // Include bonus in details
    }
}
//Handle Bonuses for Managers
class Department {
    //... (previous code)

    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) {
                return total + employee.salary + employee.bonus; // Add bonus for managers
            }
            return total + employee.salary;
        }, 0);
    }
}
