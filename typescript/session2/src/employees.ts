interface Person {
  firstName: string;
  lastName: string;
  email: string;
}
interface Employee extends Person {
  readonly employeeId: string;
  department: string;
  startDate: Date;
}
interface Manager extends Employee {
  teamSize: number;
  directReports: string[];
}
function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}
function introduceEmployee(emp: Employee): string {
  return `Hi, I am ${getFullName(emp)} from ${emp.department}, joined on ${emp.startDate.toLocaleDateString()}`;
}
// EXPLANATION: TypeScript uses Structural Typing (Duck Typing). `getFullName` accepts an Employee or Manager because both inherently possess the `firstName`, `lastName`, and `email` properties required by the `Person` contract.