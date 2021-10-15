# JS DOM - Coding Modern Dynamic Interactive Web pages

 **Quick review of vanilla JS/refresher of methods**

- The DOM is a programming interface for HTML and XML documents.
- It is represented in a tree like structure
- It represents the page so that programs can change the document structure, style and content. The DOM represents the document as nodes and objects.

Select an element on the page to find in the document object using `console.dir(document)`
  - This allows me to look through different elements on the page
  - There is a lot goin' on in here

**Element Selection: Review 1**
- Many options for element selection
- Use its ID or querySelector with id, tag, or class
- Use CSS type selectors

The querySelector() method of the Element interface returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors

**Selecting multiple Elements**

- `getElementsByClassName`: can't use forEach here
- `getElementsByTagName`: can't use forEach here
- `querySelectorAll`: Allow us to return a static (not live)  Node list representing a list of elements matching group of selectors which are descendants of the element on which the method is called. It returns something that looks like an array and I can use .length property
- Iterate element list with for loop
- Iterate element list with forEach()

**Element Manipulation**

- Update inner content
- Update element attributes
   - `getAttribute`
   - `setAttribute`
- Update element style attribute
- Select an element, set its innerHTML
- Set current contents as JS variable value
- Update current contents with variable value:
  - `innerContent`
  - `innerText`
  - `innerHTML`
- Get element id , set element id/update it
- Update element image and url path by using getAttribute/setAttribute
- Remove an element using childnode.remove() method

**Element Classes**

- Better way to update and manipulate classes
- I can use JS and remove, toggle, replace, add etc using `classList` method
- Check if class exists ---> `console.log(i.classList.contains('first));`
- This method will return boolean value
- This lets me check if classes exist
- I can use this in a condition of course, if it is true, I can execute a block of code

**Element Children and Traversing**

- Get element child nodes
- element children
- parent element
- parent node
- siblings
- next and previous siblings
- ParentNode property children is read-only property that returns a live HTML collection which contains all of the child elements of the node upon which it was called
- HTMLCollection vs NodeList
   - Can use length property with both
   - There is a difference between the two in that one is live and and one is static
   - HTMLCollection: Methods like `getElementsByClassName()` and `getElementsByTagName()` return a live collection
   - These do not include text nodes
- NodeList: The element `querySelectorAll()` returns static NodeList. They look like arrays but aren't. They have `forEach()` method as well as other methods including item, entries, keys and values.
  - If I access elements using childNodes, the returned list is live and will update as more elements are added to node.
  - If it's accessed through using `querySelectorAll()`, the returned list is static and will not update if more elements are added

**Create element**

- In HTML doc, the `document.createElement()` method creates HTML element specified by tagname, or an HTMLUnknownElement if tagName isn't recognized.
- `createElement()` allows us to create a new element and then with `document.createTextNode('text in here')` I can give it content.
- Using `appendChild(newContentToAdd)` I can add the text node to the newly created element

**Event Listeners**

- I can select a target element and then add event listener methods to elements
- `target.addEventListener(type, listener[, options]);`
- Attach listeners and can remove listeners
- Lots of events (click being most common)
- Sometimes there is an option where I can add a boolean value at the end of the function. This is for the capture phase. If it is true, events execute top down and when false, it bubbles bottom to top. When it is not specified, it defaults to false. Newer versions this is an option. It is a way to specify the order of the click, it helps to determine order in which events are fired.

**Event Object**

- The target property of the Event interface is a reference to the object that dispatched the event

```js
document.querySelector('div').addEventListener("click", function(e) {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});
```

- Whatever item I've clicked on and added event listener on, I can get that information
- Some browsers (Chrome) by default will pass event object directly in function
- The best way is to pass in event object, and then use target whenever element is clicked (as above);

**Add Event Key Press Listeners**

- Keydown listener: fired when key is pressed down
- Keyup listener: Fired when key is released
- Key press tracking
- These can be added to inputs and then we can do stuff once key is pressed
- By taking in event key value, I can track any key that is pressed at any time
- `e.prevent.default` prevents default action on elements that already have some sort of action associated with it


```js
function pressKeyOff(event) {
  console.dir(event.key);
}
```

**Mouse Events**

- mouseover: This event is fired when a pointing device is moved onto the element that has the listener attached or onto one of its children
- mouseout: This event is fired when a pointing device (usually a mouse :)) is moved off the element that has the listener attached or off one of its children.
- There are also mouseenter, mouseleave (and more)

**Event bubbling and capturing**

- When there are two events on the same element, we care about this. I can capture or bubble.
- With capturing, event is first captured by the outermost element and propagated to the inner elements.
- With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

