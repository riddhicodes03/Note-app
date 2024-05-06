const create = document.getElementById('create');
const container = document.getElementById('container');
const dlt = document.querySelectorAll('dlt');

const inp = document.getElementById('inp');
create.addEventListener('click',()=>{
  
    if(inp.value===""){
        alert('You must write something');
    }

    else{
    let div = document.createElement('div');
    let delt  = document.createElement('button');
    div.className="note"
    div.innerHTML=inp.value;
    container.append(div);
    console.log(div);
    delt.className="dlt";
    delt.innerHTML="Delete";
    div.append(delt);
    savedata();
    inp.value="";
    savedata();
    }
})
container.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
   if(e.target.tagName==="BUTTON")
        e.target.parentElement.remove();
    savedata();
    
})

function savedata(){
    localStorage.setItem("data",container.innerHTML);
}
function getdata(){
    container.innerHTML=localStorage.getItem("data");
}
getdata();