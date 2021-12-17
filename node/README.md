# FS module exercise: Render html on page after it is processed

## Why practice with the FS module?

I had a code challenge awhile back that required me to use the FS module in Node. I had seen it once before and practiced a bit with it during a month long break from bootcamp, but now understand that it is a powerful feature of Node that every JS developer should be familiar with.

## Modules in Node

One of the core concepts of Node is modules. We know modules to be blocks of reusable code that has its own context. In simple terms, this is a file or files containing related code. Modules are just a way for us to share our JS with other pieces of JS in our application. Neat!

## Module syntax

When I first learned Node, I was introduced to the CommonJS syntax for modules. By default, Node uses this syntax (with these modules we use keywords like: `require`, `module.exports` `exports` etc.)

Now, thanks to Frontend Masters, I learned that with ES6 we can use ES modules in Node or ECMAScript Modules. This means that we now use keywords like: `export`, `import`, `export default` in Node.

In order to use the ES modules, we can tell node we want to use these specific modules by:

- use `.mjs` extension (says, hey! I am using ES modules in this file)
- in `package.json` change your type to ES modules, which means we could still use `.js` extension I believe and use ES modules inside (slightly confusing though)

## What is the FS module?

The FS module is a not a global module in Node but it is a built in module or an internal module. Other modules you have most likely seen are: `http` and `path`.

The FS module gives us the power to access the file system on our OS. We can do all sorts of cool things (create, edit, read, stream) with this module.
With the FS module we have many methods seen here: [FS methods](https://nodejs.org/api/fs.html)

The FS module also has a way for us to use the promise-based versions of methods. We have access to them easily by using the `/promises` path seen here under File System: [Promise-based methods](https://nodejs.org/api/fs.html#promise-example).

Because I used ES modules, as well as `readFile` and `writeFile` asynchronous methods, the previous approaches I've used to reading and writing a file using CommonJS modules in a synchronous fashion did not apply (makes sense right?).

For this I used the URL object seen here: [URL object in Node](https://nodejs.org/api/url.html#new-urlinput-base) to get around the `__dirname` and `filename`.

To complete this exercise I also had to make use of `import.meta` object to get the absolute file path of the module: `import.meta.url` seen here:
[import.meta Object in Node](https://nodejs.org/docs/latest-v15.x/api/esm.html#esm_import_meta)

## Credit:

Credit to Frontend Masters for the guidance on how to do this is an async fashion! :)