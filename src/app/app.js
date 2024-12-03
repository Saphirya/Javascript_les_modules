import { login, logout } from "./features/authentification/index";
login();
logout();

const auth = import("./features/authentification");
console.log(auth);
