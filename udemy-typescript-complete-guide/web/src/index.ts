import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const collection = User.buildUserCollection();
const userForm = new UserForm(document.getElementById('root'));

userForm.render();

collection.on('change', () => {
  console.log(collection)
});

collection.fetchData();
