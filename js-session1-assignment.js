const name = "Premkumar";
let age = 21;
const role= "Developer";
let isavailable = true;
console.log(`name is a ${typeof name}`);
console.log(`age is a ${typeof age}`);
console.log(`role is a ${typeof role}`);
console.log(`isAvailable is a ${typeof isavailable}`);
//name = "Vinoth";  //'const' locks the memory address of the variable. We cannot point it to a new string.
console.log(`Hi, I'm ${name} and I'm a ${role}.`);
console.log(`Available: ${isavailable}`);
console.log(`My name has ${name.length} characters`);
const fullname = (first, last) => `${first} ${last}`;
console.log(fullname("Premkumar", "A"));
const isadult = (ageinput) => ageinput >= 18;
console.log(isadult(21));
const formatuser = (user) => `${user.name} — ${user.role}`;
console.log(formatuser({ name: "Premkumar", role: "Developer" }));
const user = {
  id: 1,
  name: "Premkumar",
  role: "Developer",
  active: true,
  address: {
    city: "Karur",
    country: "India"
  }
};
const { name: username, role: userrole, active } = user;
const { city } = user.address;
console.log(city);
const updateduser = { ...user, active: false };
console.log(updateduser);
const devs = ["Premkumar", "Ashwath"];
const designers = ["Rich", "Jewin"];
const team = [...devs, ...designers];
const newTeam = [...team, "Vishnu"];
const [firstmember, secondmember] = team;
console.log(firstmember, secondmember);
const users = [
  { id: 1, name: "Premkumar", role: "Developer",active: true  },
  { id: 2, name: "Ashwath",role: "Developer", active: false },
  { id: 3, name: "Carol", role: "Designer",active: true  },
  { id: 4, name: "Dan",   role: "Developer", active: true  },
  { id: 5, name: "Eve",   role: "Designer",active: false },
];
const activeusernames = users.filter(u => u.active).map(u => u.name);
const alldevs = users.filter(u => u.role === "Developer");
const descriptions = users.map(u => `${u.name} is a ${u.role}`);
const activedevnames = users.filter(u => u.active && u.role === "Developer").map(u => u.name);
console.log(activedevnames);
const rolecount = users.reduce((acc, curr) => {acc[curr.role] = (acc[curr.role] || 0) + 1;return acc;}, {});
console.log(rolecount);
const firstactivedesign = users.find(u => u.active && u.role === "Designer");
console.log(firstactivedesign);
const hasinactive = users.some(u => !u.active);
console.log(hasinactive);
const allhaveroles = users.every(u => u.role !== undefined);
console.log(allhaveroles);
const input = "5";
const score = 5;
if (input === score) {
  console.log("match"); 
}
else {
  console.log("No match");
}
const doubled = [1, 2, 3].map(n => {return n * 2;});
console.log(doubled);
const original = [1, 2, 3];
const fixedarray = [...original, 4];
console.log(original);
console.log(fixedarray);
const sampleuser = { name: "Prem", active: true };
sampleuser.active = false; //it does not throw an error
console.log(sampleuser); //Explanation:'const' only prevents reassigning the variable 'sampleUser' to a completely new object.It does not freeze the internal properties from being mutated.
sampleUser = { name: "Bob" };//It throws an error because we are trying to overwrite the memory address.
const UserName = "Prem";
const userName = "Ashwath";
console.log(UserName); //Logs "Prem"
console.log(userName); //Logs "Ashwath"
const a = null;
const b = undefined;
console.log(typeof a) // Logs "object". It is an bug is js
console.log(typeof b) // Logs "undefined"
//explanation: undefined means no value was ever assigned.null is an intentional assignment representing empty or nothing.
//console.log(greet("Prem")); //This wont work.Arrow functions declared with const are not hoisted. You must define them before you call them.
const greet = (personName) => `Hello, ${personName}`;
console.log(greet("Prem"));
