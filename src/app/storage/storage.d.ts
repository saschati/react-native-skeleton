export default interface Storage {
  set(name: string, value: unknown): void | Promise<void>
  has(name: string): boolean | Promise<boolean>
  get(name: string, defaultVal: unknown): unknown | Promise<unknown>
  remove(name: string): void | Promise<void>
}
