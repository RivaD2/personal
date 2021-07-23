import { User } from "../models/User";
import { Model } from "../models/Model";

// Passing in type (T) of model and second type (K), which are attributes that exist in model
export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T){
    this.bindModel();
  }

  abstract template(): string;
  // Not required to be implemented in child class
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment):void {
    const eventsMap = this.eventsMap();
    for(let eventKey in eventsMap) {
      // eventKey returns array with two elements inside
      const [eventName, selector] = eventKey.split(':');
      // Find array of elements that match selector and for each element
      // set up event handler
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName,eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      // Populate empty object with all regions found
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {

  }

  render():void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();
    this.parent.append(templateElement.content);
  }
}