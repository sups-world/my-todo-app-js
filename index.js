const inputEl = document.getElementById("input-data");
const listContainerEl = document.getElementById("display-tasks")



listContainerEl.addEventListener("click",(e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
},false)

function addTask(){
  if (inputEl.value === ''){
    alert('Please type something before adding')
  }else{
    let list = document.createElement("li");
    list.innerHTML = inputEl.value;
    listContainerEl.appendChild(list);

    inputEl.value = '';
  }
}