const { button, div, pre, li, ol, span } = van.tags;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Run = ({ sleepMs }) => {
  const steps = van.state(0);
  (async () => {
    for (; steps.val < 40; ++steps.val) await sleep(sleepMs);
  })();
  return pre(
    () =>
      `${" ".repeat(40 - steps.val)}🚐💨Hello VanJS!${"_".repeat(steps.val)}`
  );
};

const Hello = () => {
  const dom = div({ style: "margin-top: 20px;" });
  const style = "margin-right: 20px;";
  const createButton = (text, sleepMs) =>
    button({ onclick: () => van.add(dom, Run({ sleepMs })), style }, text);

  return div(
    dom,
    createButton("Hello 🐌", 2000),
    createButton("Hello 🐢", 500),
    createButton("Hello 🚶‍♂️", 100),
    createButton("Hello 🏎️", 10),
    createButton("Hello 🚀", 2)
  );
};

const World = () => {
  const list = ({ items }) => ol(items.map((it) => li(it)));
  const listItems = [
    "Fernando Gonzaga",
    "Lá ele",
    "Extraordinário mundo de Gumball",
    "Pikachu",
    "Acabou o caô",
  ];

  return van.add(
    div({ style: "margin-top: 20px;" }),
    list({ items: listItems })
  );
  //return list({ items: listItems });
};

const Test = () => {
  return van.add(div(), span({ style: "color: red;" }, "eae aqui é o zangado"));
};

const mePegaElement = document.getElementById("me-pega");

const FinalText = () => {
  const text = "Hello World!";
  return van.add(span({ style: "color: green;" }, text));
};

const addToBody = (tags) => tags.forEach((el) => van.add(document.body, el));
const addToElement = (el, tags) => tags.forEach((tag) => van.add(el, tag));

addToBody([Hello(), World(), Test()]);
addToElement(mePegaElement, [FinalText()]);
