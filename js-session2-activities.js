console.log("1");
setTimeout(()=>console.log("2"),1000); // EXPLANATION: 3 logs before 2. Js is single-threaded. It passes the setTimeout task to the browser's Web APIs to count down in the background, and immediately moves to the next line to log 3. Once 1000ms is up, 2 is pushed back into the execution queue.
console.log("3");
console.log("1");
setTimeout(() => console.log("2"), 0); // EXPLANATION: 2 still logs last. Even at 0ms, setTimeout moves the function to the Web API and the task queue. JavaScript forces the main thread to finish all synchronous code 1 and 3 before it checks the task queue for waiting async callbacks.
console.log("3");
console.log("Fetching data...");
setTimeout(() => {console.log("Data received!");}, 2000);
console.log("User still can interact");
const getData = new Promise((resolve, reject) => {const success = Math.random() > 0.5; setTimeout(() =>
     {
    if (success) resolve("Data loaded!");
    else reject("Something went wrong");
  }, 1000);});
  getData.then(data=>console.log("Sucess: ",data))
  .catch(error=>console.error("Error: ",error));
  const startValue = new Promise((resolve) => resolve(5));
startValue
  .then(num => num * 2)     
  .then(num => num + 10)      
  .then(result => console.log("Final chain result:", result));
const promise1 = new Promise((resolve) => setTimeout(() => resolve("User loaded"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Orders loaded"), 1500));
Promise.all([promise1, promise2])
  .then(results => console.log("Promise.all finished:", results));
const fetchSingleUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log("Async/Await User:", user.name);
  } catch (error) {
    console.log(error);
  }
};
fetchSingleUser();
const getUserById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();
  return { name: user.name, email: user.email };
};
getUserById(3).then(data => console.log("User 3:", data));
const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users.map(u => ({ name: u.name, email: u.email }));
};
getAllUsers().then(data => console.log("All mapped users:", data));
const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await response.json();
    console.log("Safe fetch data:", data);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
};
fetchUser();
const fetchMissing = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/99999");
    if (!response.ok) {
      throw new Error(`HTTP Status: ${response.status} - Not Found`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Caught:", error.message);
  }
};
fetchMissing();
const runAllSettled = async () => {
  const req1 = fetch("https://jsonplaceholder.typicode.com/users/1");
  const req2 = fetch("https://jsonplaceholder.typicode.com/users/99999"); 
  const results = await Promise.allSettled([req1, req2]);
  console.log("allSettled Results:", results);
};
runAllSettled();
const titleEl = document.getElementById("title");
titleEl.textContent = "Hello, Intern!";
const subtitleEl = document.getElementById("subtitle");
subtitleEl.style.color = "blue";
const counterEl = document.getElementById("counter");
let currentCount = parseInt(counterEl.textContent, 10);
counterEl.textContent = currentCount + 1;
const userListEl = document.getElementById("user-list");
userListEl.innerHTML = "<li>Prem</li><li>Ashwath</li><li>Rich</li>";
titleEl.addEventListener("click", () => {
  titleEl.classList.toggle("highlight");});
  const greetBtn = document.getElementById("greet-btn");
const nameInput = document.getElementById("name-input");
const greetingEl = document.getElementById("greeting");
greetBtn.addEventListener("click", () => {
  const typedName = nameInput.value.trim();
  if (typedName === "") greetingEl.textContent = "Please enter a name";
  else greetingEl.textContent = `Hello, ${typedName}!`;});
let clicks = 0;
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");
const clickCountEl = document.getElementById("click-count");
addBtn.addEventListener("click", () => {
  clicks++;
  clickCountEl.textContent = `Clicks: ${clicks}`;});
resetBtn.addEventListener("click", () => {
  clicks = 0;
  clickCountEl.textContent = `Clicks: ${clicks}`;});
nameInput.addEventListener("input", (e) => {
  greetingEl.textContent = `Typing: ${e.target.value}`;
});
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") greetBtn.click();});
const loadBtn = document.getElementById("load-btn");
const statusEl = document.getElementById("status");
const usersContainer = document.getElementById("users-container");
const searchInput = document.getElementById("search");
let loadedUsersData = [];
loadBtn.addEventListener("click", async () => {
  statusEl.textContent = "Loading...";
  usersContainer.innerHTML = "";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Fetch failed");
    
    loadedUsersData = await response.json();
    
    renderUsers(loadedUsersData); 
    statusEl.textContent = `${loadedUsersData.length} users loaded`;
    
  } catch (error) {
    statusEl.textContent = "Failed to load users. Try again.";
    usersContainer.innerHTML = "";
  }});
const renderUsers = (dataArray) => {
  usersContainer.innerHTML = "";
  dataArray.forEach(user => {
    usersContainer.innerHTML += `
      <div style="border:1px solid #000; padding:10px; margin:5px;">
        <strong>${user.name}</strong><br>
        ${user.email}<br>
        ${user.address.city}
      </div>
    `;
  });};
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = loadedUsersData.filter(user => 
    user.name.toLowerCase().includes(term)
  );
  renderUsers(filtered);
});
const getAliceAndPosts = async () => {
  const [userRes, postsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  ]);
  const user = await userRes.json();
  const posts = await postsRes.json();
  console.log(`${user.name} has ${posts.length} posts`);
};
getAliceAndPosts();
const renderUsersSafe = (dataArray) => {
  usersContainer.innerHTML = ""; 
  dataArray.forEach(user => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "5px";
    const p = document.createElement("p");
    p.textContent = `${user.name} | ${user.email}`;
    div.appendChild(p);
    usersContainer.appendChild(div);
  });
};
const testSaveToStorage = () => {
  const fakeData = [{ name: "Alice" }];
  localStorage.setItem("savedUsers", JSON.stringify(fakeData));
  console.log("Pulled from storage:", JSON.parse(localStorage.getItem("savedUsers")));
};
testSaveToStorage();
let controller;
const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", () => {
  if (controller) controller.abort(); 
});
const fetchWithCancel = async () => {
  controller = new AbortController();
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal });
    console.log("Fetch succeeded");
  } catch (error) {
    if (error.name === "AbortError") console.log("Fetch was successfully canceled by user.");
  }
};