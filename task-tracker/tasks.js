// Part 5: Write a generic utility function groupBy
export function groupBy(arr, key) {
    return arr.reduce((acc, item) => {
        const groupKey = String(item[key]);
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {});
}
// Part 5: Convert task store into TaskManager class
export class TaskManager {
    constructor() {
        this.tasks = [];
        this.load();
    }
    add(data) {
        const newTask = {
            id: Date.now(),
            name: data.name,
            priority: data.priority,
            dueDate: data.dueDate,
            done: false
        };
        this.tasks.push(newTask);
        this.save();
        return newTask;
    }
    getAll() {
        return this.tasks;
    }
    toggle(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.done = !task.done;
            this.save();
        }
    }
    clearAll() {
        this.tasks = [];
        this.save();
    }
    filter(status) {
        if (status === "done")
            return this.tasks.filter(t => t.done);
        if (status === "pending")
            return this.tasks.filter(t => !t.done);
        return this.tasks;
    }
    sortBy(field) {
        return [...this.tasks].sort((a, b) => {
            if (field === "dueDate") {
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            }
            if (field === "priority") {
                const weights = { "High": 3, "Medium": 2, "Low": 1 };
                return weights[b.priority] - weights[a.priority];
            }
            return 0;
        });
    }
    save() {
        localStorage.setItem("task_tracker", JSON.stringify(this.tasks));
    }
    load() {
        const stored = localStorage.getItem("task_tracker");
        if (stored) {
            this.tasks = JSON.parse(stored);
        }
    }
}
//# sourceMappingURL=tasks.js.map