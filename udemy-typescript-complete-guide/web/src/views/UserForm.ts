import { View } from "./View";
import { User, UserProps } from "../models/User";

// User is the type for T, UserProps for type K
// TS understands this.model refers to instance of user and different properties user has (UserProps)
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click: .set-age': this.onSetAgeClick,
      'click: .set-name': this.onSetNameClick,
      'click: .save-model': this.onSaveClick
    };
  }

   onSetAgeClick = (): void => {
   this.model.setRandomAge();
  }

  onSetNameClick = (): void => {
    // Reach into DOM and find input element by using parent as reference
    const input = this.parent.querySelector('input');
    const name = input.value;
    this.model.set({ name });
  }

  onSaveClick = (): void => {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}