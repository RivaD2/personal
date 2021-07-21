import { User } from "./models/User";

const user = new User({ id: 1 });
user.set({ name: 'Nordygen', age: 22 });
const user2 = new User({name: 'Aslan', age: 0 });
user.save();
user2.save();