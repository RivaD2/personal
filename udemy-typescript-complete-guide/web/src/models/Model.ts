import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetchData(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

// Anytime Model is referenced, I pass in set of properties I would expect Model to have
// These properties are id, name, age
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ){}

  on = this.events.on;
  trigger = this.events.trigger
  get = this.attributes.get;

  set(update: T):void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetchData(id).then((response: AxiosResponse): void => {
      this.set(response.data)
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
    .then((response: AxiosResponse): void => {
      this.trigger('save');
    })
    .catch (() => {
      this.trigger('error');
    });
  }
}