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