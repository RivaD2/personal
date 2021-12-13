# FS module exercise: Render html on page after it is processed

## Why practice with the FS module?

I had a code challenge awhile back that required me to use the FS module in Node. I had seen it once before and practiced a bit with it during a month long break from bootcamp, but now understand that it is a powerful feature of Node that every JS developer should be familiar with.

## Modules in Node

One of the core concepts of Node is modules. We know modules to be blocks of reusable code that has its own context. In simple terms, this is a file or files containing related code. Modules are just a way for us to share our JS with other pieces of JS in our application. Neat!

## Module syntax

When I first learned Node, I was introduced to the CommonJS syntax for modules. By default, Node uses this syntax. Nowadays we have common modules and see keywords like: `require`, `module.exports` `exports` etc.

Now with ES6 we can use ES modules in Node or ECMAScript Modules. This means that we now use keywords like: `export`, `import`, `export default`.

In order to use the ES modules, we can tell node we want to use these specific modules by:

- use `.mjs` extension (says, hey! I am using ES modules in this file)
- in `package.json` change your type to ES modules, which means we could still use `.js` extension and use ES modules inside (slightly confusing though)

## What is the FS module?

The FS module is a not a global module in Node but it is a built in module or an internal module. Other modules you have most likely seen are: `http` and `path`.

The FS module gives us the power to access the file system on our OS. We can do all sorts of things (create, edit, read, stream) with this module.
With the FS module we have many methods seen here: [FS methods](https://nodejs.org/api/fs.html)
