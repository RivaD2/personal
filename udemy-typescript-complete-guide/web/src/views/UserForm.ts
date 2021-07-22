export class UserForm {
  constructor(public parent: Element){}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseover: h1': this.onHeaderHover
    };
  }

  onButtonClick(): void {
    console.log('hi there!')
  }

  onHeaderHover(): void {
    console.log('You have hovered over header');
  }

  template(): string {
    return `
      <div>
        <h1> User Form </h1>
        <input />
        <button>Click Me</button>
      </div>
    `;
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

  render():void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}