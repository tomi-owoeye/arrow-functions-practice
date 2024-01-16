import { symmetrize, doWithSequence, mouseX, mouseY, circle } from "./support.js";
const log = console.log;

log([7, 3, 6, -2].find((x) => x % 2 === 0));

symmetrize((x, y) => circle(x, y, 40), mouseX, mouseY);

doWithSequence( 1, 10, () => log("START"), () => log("END"), n => log("Counter: " + n) );

setTimeout(() => log([10, 20, 30].map(x => x * x)), 1000);