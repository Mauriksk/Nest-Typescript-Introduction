import "./style.css";
import { name, age } from "./bases/01-types";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>hello ${name} tienes ${age}</h1>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
