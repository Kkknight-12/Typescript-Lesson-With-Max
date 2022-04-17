// Code goes here!
abstract class Department {
  // static method
  static fiscalYear = "2022"
  /* 
  - Private Property means now employess is now 
  - accessible only from inside of the class Department
  - Can't be manipulated if someone try to access it from outside.
  */
  protected employees: string[] = []

  /* readonly can be instantiated once and then can't be edited */
  constructor(protected readonly id: string, public name: string) {}

  // static method
  static createEmployee(name: string) {
    return { name: name }
  }

  // abstract method
  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log("Employees Length: " + this.employees.length)
    console.log("Employees : " + this.employees)
  }
}

// accessing the static method without
// instantiating Department | without new keyword
const employee1 = Department.createEmployee("Emp1")
console.log(employee1, Department.fiscalYear)

// Cannot create an instance of an abstract class
// const accounting = new Department("007", "Accounting")
// console.log(accounting)

// adding name
// accounting.addEmployee("Knight")
// accounting.addEmployee("Luffy")

// Property 'employees' is private and only accessible within class
// accounting.employees[2] = "Lavi"
// accounting.describe()

// changing Department name from outside as it is public property
// accounting.name = "IT"
// accounting.describe()

// printing name with method printEmployeeInformation
// accounting.printEmployeeInformation()
//
// const accountingCopy = { name: "Dummy", describe: accounting.describe }
// // to create an instance of the Department we need to pass name input
// accountingCopy.describe()

/////////////////
// Inheritance //
/////////////////

// ITDepartment
class ITDepartment extends Department {
  admins: string[]

  constructor(id: string, admins: string[]) {
    super(id, "IT")
    this.admins = admins
  }

  getAdmins() {
    console.log(this.admins)
  }

  describe() {
    console.log(`Department: ${this.name} Department Id: ${this.id}`)
  }
}

const itDepartment = new ITDepartment("d1", ["luff", "lavi"])
itDepartment.getAdmins()

itDepartment.addEmployee("dev luff")
itDepartment.addEmployee("dev knight")
itDepartment.describe()
itDepartment.printEmployeeInformation()
console.log(itDepartment)

// AccountingDepartment
class AccountingDepartment extends Department {
  private lastReport: string

  // storing accounting department instance
  private static instance: AccountingDepartment

  get getMostResentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error("No report found.")
  }

  set setMostResentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!.")
    }
    this.addReport(value)
  }

  // private constructor
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
    this.lastReport = reports[0]
  }

  // accessing instance as we have private constructor
  static getInstnace() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment("d2", [])
    return this.instance
  }

  describe() {
    console.log(`Department: ${this.name} Department Id: ${this.id}`)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }

  /* 
  - @Override 
  - overriding printEmployeeInformation method of Parent Class
  */
  printEmployeeInformation = () => {
    console.log("Account Employees Length is : " + this.employees.length)
    console.log("Account Employees are : " + this.employees)
  }
}

// can't create AccountingDepartment as it have private construtor
// const newaccounting = new AccountingDepartment("d2", [])

// now only one instance can be created.
const newaccounting = AccountingDepartment.getInstnace()
newaccounting.addReport("Something went wrong")
newaccounting.printReports()
// getter methods are accessed like normal property with () parenthesis
// not as a method
console.log(newaccounting.getMostResentReport)
// calling setter
// you have to access it like a property
// not as a method ("Year End Report")
newaccounting.setMostResentReport = "Year End Report"
console.log(newaccounting.getMostResentReport)

// adding employees
newaccounting.addEmployee("LuffAc")
newaccounting.addEmployee("LaviAc")
newaccounting.printEmployeeInformation()
newaccounting.describe()
