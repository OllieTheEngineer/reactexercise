import {choice, remove} from "./helpers";
import foods from "./foods";

let food = choice(food);
console.log(`I'd like one ${food}, please.`);
console.log(`Here is your ${food}.`);
console.log(`May I have another ${fruit}?`);

let leftOver = remove(food, foods)
console.log(`I am sorry we are all out. We do have ${leftOver.length} left though.`)