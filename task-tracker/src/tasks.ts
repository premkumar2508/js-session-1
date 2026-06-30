// Part 4: Define the Task interface
export interface Task {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
    done: boolean;
}

// Part 5: Write a generic utility function groupBy
export function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
    return arr.reduce((acc, item) => {
        const groupKey = String(item[key]);
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {} as Record<string, T[]>);
}

// Part 5: Convert task store into TaskManager class
export class TaskManager {
    private tasks: Task[] = [];

    constructor() {
        this.load();
    }

    add(data: Omit<Task, "id" | "done">): Task {
        const newTask: Task = {
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

    getAll(): Task[] {
        return this.tasks;
    }

    toggle(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.done = !task.done;
            this.save();
        }
    }

    clearAll(): void {
        this.tasks = [];
        this.save();
    }

    filter(status: "all" | "done" | "pending"): Task[] {
        if (status === "done") return this.tasks.filter(t => t.done);
        if (status === "pending") return this.tasks.filter(t => !t.done);
        return this.tasks;
    }

    sortBy(field: keyof Pick<Task, "priority" | "dueDate">): Task[] {
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

    private save(): void {
        localStorage.setItem("task_tracker", JSON.stringify(this.tasks));
    }

    load(): void {
        const stored = localStorage.getItem("task_tracker");
        if (stored) {
            this.tasks = JSON.parse(stored);
        }
    }
}