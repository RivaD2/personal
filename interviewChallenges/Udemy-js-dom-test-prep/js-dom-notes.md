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
- Select an element, se its innerHTML
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
