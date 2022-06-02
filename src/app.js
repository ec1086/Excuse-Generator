/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = myExcuse();
  });
};

let myExcuse = () => {
  let who = ["The cat", "My son", "His donkey", "His dinosaur"];
  let action = ["burned", "took", "stole", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the storm.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was flying."
  ];
  /*Random*/
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  /*innerHtml*/
  let excuse = document.getElementById("excuse");
  /*Function new excuse*/

  return (
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + " "
  );
};
