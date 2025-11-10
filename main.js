const color = "rgb(168, 168, 235)";
const customWidth = "50px";
const customBorder = "12px solid rgb(168, 168, 235)";
const words = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (let i = 1; i <= 5; i++) {
  const fakeh1 = document.createElement("h1");
  document.body.appendChild(fakeh1);
  fakeh1.innerHTML = "Rad" + " " + [i];
  fakeh1.style.textAlign = "center";
  fakeh1.style.fontSize = i + "rem";
  fakeh1.style.color = "blue";
  fakeh1.style.margin = `${i + 20}px`;
  fakeh1.style.backgroundColor = `hsl(${i * 20 + 120}, 50%, 70%)`;
}

const wrapper = document.createElement("div");
wrapper.classList.add("listWrapper");
document.body.append(wrapper);

function generateList() {
  const list = document.createElement("ol");
  wrapper.append(list);
  list.classList.add("centerList");
  list.style.border = `${customBorder}`;

  return list;
}

const list = generateList();

for (let i = 0; i <= 9; i++) {
  const listItems = document.createElement("li");
  list.appendChild(listItems);
  listItems.innerText = i;
  listItems.style.width = `${customWidth}`;

  if (i === 4) {
    listItems.style.backgroundColor = `${color}`;
    listItems.style.color = "white";
  } else if (i % 2 === 0) {
    listItems.style.backgroundColor = "black";
    listItems.style.color = "white";
  } else if (i % 2 === 1) {
    listItems.style.backgroundColor = "white";
  }
}

const listTwo = generateList();

for (let i = 9; i >= 0; i--) {
  const listItems = document.createElement("li");
  listTwo.appendChild(listItems);
  listItems.innerText = [i];
  listItems.style.width = `${customWidth}`;
  list.style.textAlign = "center";

  if (i === 8) {
    listItems.style.backgroundColor = `${color}`;
    listItems.style.color = "white";
  } else if (i % 2 === 0) {
    listItems.style.backgroundColor = "black";
    listItems.style.color = "white";
  } else if (i % 2 === 1) {
    listItems.style.backgroundColor = "white";
  }
}

const listThree = generateList();

for (let i = 0; i < words.length; i++) {
  const listItems = document.createElement("li");
  listThree.appendChild(listItems);
  listItems.innerText = words[i];
  listItems.style.width = `${customWidth}`;
  listItems.style.textAlign = "right";

  if (i === 5) {
    listItems.style.backgroundColor = `${color}`;
    listItems.style.color = "white";
  } else if (i % 2 === 0) {
    listItems.style.backgroundColor = "black";
    listItems.style.color = "white";
  } else if (i % 2 === 1) {
    listItems.style.backgroundColor = "white";
  }
}
