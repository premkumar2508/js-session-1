interface SystemUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
}
function updateUser(user: SystemUser, updates: Partial<SystemUser>): SystemUser {
  return { ...user, ...updates };
}
type WelcomePayload = Pick<SystemUser, "name" | "email">;
function sendWelcomeEmail(payload: WelcomePayload): void {}
type CreatePayload = Omit<SystemUser, "id">;
function createUser(payload: CreatePayload): SystemUser {
  return { id: Math.random().toString(), ...payload };
}
const rolePermissions: Record<"admin" | "editor" | "viewer", string[]> = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"]
};
function getPermissions(role: "admin" | "editor" | "viewer"): string[] {
  return rolePermissions[role];
}