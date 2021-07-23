import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {};

  abstract renderItem(model: T, itemParent: Element):void;
    // Iterate over collection and for every model in collection,
    // and call renderItem() to build view for each model
    render(): void {
      this.parent.innerHTML = '';
      const templateElement = document.createElement('template');
      for (let model of this.collection.models) {
        // Build up some parent element and pass it to renderItem()
        const itemParent = document.createElement('div');
        this.renderItem(model, itemParent);
        templateElement.content.append(itemParent);
      }
      this.parent.append(templateElement.content);
    }
}
