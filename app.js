let total=document.querySelector(".total");
let input=document.querySelector("#input-amount");
let addamount=document.querySelector(".add-amount");
let additem=document.querySelector("#add-item");
let addprice=document.querySelector("#add-price");
let addex=document.querySelector(".add-ex");
let contianer=document.querySelector(".lists");
let list=document.querySelector(".list");
let resetbtn=document.querySelector(".resetbtn");
let totalamount=0;
total.innerHTML=`$${totalamount}`
addamount.addEventListener("click",function(){
    if(input.value == ''){
        input.style.border= "3px solid red";
        setTimeout(()=>{
            input.style.border= "1px solid black"; 
        },1000)
    }
    else{
        totalamount +=parseInt(input.value);
        total.innerHTML=`$${totalamount}`;
    input.value='';
    }
})
addex.addEventListener("click",()=>{
    let itemexpense= +addprice.value;
    if(totalamount == 0){
        input.style.border= "3px solid red";
        setTimeout(()=>{
            input.style.border= "1px solid black"; 
        },1000)
    }
    else if(additem.value ==''){
        additem.style.border= "3px solid red";
        setTimeout(()=>{
            additem.style.border= "1px solid black"; 
        },1000)
    }else if(addprice.value ==''){
        addprice.style.border= "3px solid red";
        setTimeout(()=>{
            addprice.style.border= "1px solid black"; 
        },1000)
    }
    else if(itemexpense > totalamount){
        total.classList.add("active");
        setTimeout(() => {
            total.classList.remove("active");
        }, 999);
        
       
    }
    else{
        totalamount -=itemexpense;
        total.innerHTML=`$${totalamount}`
        let newItem=document.createElement("div");
        newItem.classList.add("list");
        newItem.innerHTML=`
                <h2 class="title">${additem.value}</h2>
                <h2 class="price">$ ${addprice.value}</h2>
        `
        contianer.appendChild(newItem);
        let back="#"+generate()+generate()+generate()+generate()+generate()+generate();
        newItem.style.backgroundColor=back;
        additem.value=''
        addprice.value=''
    }

   
})
resetbtn.addEventListener("click",()=>{
    reset();
})
function generate(){
    return Math.floor(Math.random()*9);
};
function reset(){
    totalamount=0;
    total.innerHTML=`$${totalamount}`;
    contianer.innerHTML='';

}