export class Attributes<T> {
  constructor(private data: T){}

  // K extends keyof T sets up genric constrait
  // Type of K can only be one of the keys of T
  // T[K] is a normal object lookup
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update:T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

