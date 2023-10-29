const inputEl = document.getElementById("input-data");
const listContainerEl = document.getElementById("display-tasks")



listContainerEl.addEventListener("click",(e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName ==="SPAN"){
      e.target.parentElement.remove();
    }
},false)

function addTask(){
  if (inputEl.value === ''){
    alert('Please type something before adding')
  }else{
    let list = document.createElement("li");
    list.innerHTML = inputEl.value;
    listContainerEl.appendChild(list);

    // to show cross sign, we can show mulitplication sign as follows
    let spanItem = document.createElement("span");
    spanItem.innerHTML="\u00d7";
    list.appendChild(spanItem)

    inputEl.value = '';
  }
}