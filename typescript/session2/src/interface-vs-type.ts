interface PaginatedResponse<T> { page: number; pageSize: number; total: number; data: T[]; }
type StringOrArray = string | string[];
interface BaseNotification { id: string; message: string; }
type NumberProcessor = (n: number) => void;
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";