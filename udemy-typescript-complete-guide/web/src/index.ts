import { User } from "./models/User";

let user = new User({name: 'myname', age: 34});
console.log(user.set({ name: 'newname', age: 42}));
console.log(user.get('name'));
console.log(user.get('age'));
