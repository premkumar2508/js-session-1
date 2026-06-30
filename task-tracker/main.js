import { TaskManager, groupBy } from './dist/tasks.js';
const manager = new TaskManager();
const form = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const clearBtn = document.querySelector("#clear-all");
const filterBtns = document.querySelectorAll(".filter-btn");
const sortSelect = document.querySelector("#sort-select");
const counterText = document.querySelector("#task-counter");
const summaryBody = document.querySelector("#summary-body");
let currentFilter = "all"; 
function render() {
    const sortField = sortSelect.value;
    let displayTasks = manager.filter(currentFilter);
    if (sortField === "dueDate") {
        displayTasks.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    } else if (sortField === "priority") {
        const weights = { "High": 3, "Medium": 2, "Low": 1 };
        displayTasks.sort((a, b) => weights[b.priority] - weights[a.priority]);
    }
    taskList.innerHTML = "";
    const today = new Date().toISOString().split('T')[0];
    displayTasks.map(task => {
        const li = document.createElement("li");
        if (task.done) {
            li.classList.add("done");
        }
        if (!task.done && task.dueDate <= today) {
            li.style.color = "red";
            li.style.border = "1px solid red";
        }

        li.innerHTML = `
            ${task.name} | ${task.priority} | Due: ${task.dueDate}
            <button class="done-btn" data-id="${task.id}">Done</button>
        `;
        taskList.appendChild(li);
    });
    counterText.textContent = `Showing ${displayTasks.length} of ${manager.getAll().length} tasks`;
    renderSummary();
}
function renderSummary() {
    summaryBody.innerHTML = "";
    const allTasks = manager.getAll();
    const grouped = groupBy(allTasks, "priority");

    ["High", "Medium", "Low"].forEach(priority => {
        const count = grouped[priority] ? grouped[priority].length : 0;
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${priority}</td><td>${count}</td>`;
        summaryBody.appendChild(tr);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#task-name").value;
    const priority = document.querySelector("#task-priority").value;
    const dueDate = document.querySelector("#task-date").value;
    manager.add({ name, priority, dueDate });
    form.reset();
    render();
});
taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("done-btn")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        manager.toggle(id);
        render();
    }
});
clearBtn.addEventListener("click", () => {
    manager.clearAll();
    render();
});
filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        currentFilter = e.target.getAttribute("data-filter");
        render();
    });
});
sortSelect.addEventListener("change", render);
render();
const themeToggle = document.querySelector("#theme-toggle");

// 1. Check for saved preference on boot
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// 2. Handle the click event
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // 3. Save the new state
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});