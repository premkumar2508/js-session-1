import { EventEmitter } from "events";
const cache: Record<string, unknown> = {};
export function fetchUserFromCache<T>(id: string): T | null {
  return (cache[id] as T) || null;
}
export function saveUserToCache(user: { id: string; [key: string]: unknown }): void {
  cache[user.id] = user;
}
export function processUsers<T, U>(users: T[], filterFn: (u: T) => boolean, transformFn: (u: T) => U): U[] {
  return users.filter(filterFn).map(transformFn);
}
export function buildQueryString(params: Record<string, string | number>): string {
  return Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key].toString())}`)
    .join("&");
}
export function retry<T>(fn: () => Promise<T>, maxAttempts: number, delay: number): Promise<T> {
  return new Promise((resolve, reject) => {
    let attempt = 0;
    function run() {
      attempt++;
      fn()
        .then(resolve)
        .catch((err) => {
          if (attempt >= maxAttempts) reject(err);
          else setTimeout(run, delay);
        });
    }
    run();
  });
}