export interface Task {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
    done: boolean;
}
export declare function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]>;
export declare class TaskManager {
    private tasks;
    constructor();
    add(data: Omit<Task, "id" | "done">): Task;
    getAll(): Task[];
    toggle(id: number): void;
    clearAll(): void;
    filter(status: "all" | "done" | "pending"): Task[];
    sortBy(field: keyof Pick<Task, "priority" | "dueDate">): Task[];
    private save;
    load(): void;
}
//# sourceMappingURL=tasks.d.ts.map