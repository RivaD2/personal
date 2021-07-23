import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    // Create view, pass in model and render to itemParent
    // Every user fetched, render out 1 UserShow class
    new UserShow(itemParent, model).render();
  }
}