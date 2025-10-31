for (let i = 1; i <= 5; i++) {
  const fakeh1 = document.createElement("h1");
  document.body.appendChild(fakeh1);
  fakeh1.innerHTML = "Rad" + " " + [i];
  fakeh1.style.textAlign = "center";
  fakeh1.style.fontSize = i + 'rem';
  fakeh1.style.color = "blue";
  fakeh1.style.margin = `${i+20}px`;
  fakeh1.style.backgroundColor = `hsl(${i * 20 + 120}, 50%, 70%)`;
  console.log(i)
}

const wrapper = document.createElement("div");
wrapper.classList.add("listWrapper");
document.body.append(wrapper);


for (let j = 1; j <= 1; j++) {
  const list = document.createElement("ol");
  wrapper.append(list);
  list.classList.add("centerList");
  list.style.border = "12px solid pink";

  for (let l = 0; l <= 12; l++) {
    const listItems = document.createElement("li");
    list.appendChild(listItems);
    listItems.innerText = [l];
    listItems.style.width = "50px";

    if (l === 4) 
    {
      listItems.style.backgroundColor = "pink";
      listItems.style.color = "white";
    }
    else if (l % 2 === 0) 
    {
      listItems.style.backgroundColor = "black";
      listItems.style.color = "white";
    } 
     else if (l % 2 === 1) 
    {
      listItems.style.backgroundColor = "white";
    }
  }
}   


for (let j = 1; j <= 1; j++) {
  const list = document.createElement("ol");
  wrapper.append(list);
  list.classList.add("centerList");
  list.style.border = "12px solid pink";
  list.style.textAlign = 'center'

  for (let l = 12; l >= 0; l--) {
    const listItems = document.createElement("li");
    list.appendChild(listItems);
    listItems.innerText = [l];
    listItems.style.width = "50px";

    if (l === 8) 
    {
      listItems.style.backgroundColor = "pink";
      listItems.style.color = "white";
    }
    else if (l % 2 === 0) 
    {
      listItems.style.backgroundColor = "black";
      listItems.style.color = "white";
    } 
     else if (l % 2 === 1) 
    {
      listItems.style.backgroundColor = "white";
    }
  }
}   

const words = ['ett', 'två', 'tre','fyra','fem','sex','sju','åtta','nio','tio']

for (let j = 1; j <= 1; j++) {
  const list = document.createElement("ol");
  wrapper.append(list);
  list.classList.add("centerList");
  list.style.border = "12px solid pink";

  for (let l = 0; l < words.length; l++) {
    const listItems = document.createElement("li");
    list.appendChild(listItems);
    listItems.innerText = words[l];
    listItems.style.width = "50px";
    listItems.style.textAlign = 'right'

    if (l === 5) 
    {
      listItems.style.backgroundColor = "pink";
      listItems.style.color = "white";
    }
    else if (l % 2 === 0) 
    {
      listItems.style.backgroundColor = "black";
      listItems.style.color = "white";
    } 
     else if (l % 2 === 1) 
    {
      listItems.style.backgroundColor = "white";
    }
  }
}  