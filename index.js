let titleinput = document.getElementById("titleinput")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let discount = document.getElementById("discount")
let ads = document.getElementById("ads")
let totl = document.getElementById("totl")
let creat = document.getElementById("submit")
let count = document.getElementById("count")
let catgary = document.getElementById("catgary")
let mood = "creat"
let ay ;

// get totel
function getTotle(){

    if(price.value != ''){
        let resalt = (+price.value + +taxes.value   + +ads.value ) - +discount.value 
        totl.innerHTML = resalt
        totl.style.background = "green"
        totl.style.color = "wiht"
    }
    else{
        totl.style.background="red"
    }
}



// creat
let date;
if(localStorage.Info != null ){
    date = JSON.parse(localStorage.Info)
}else{
     date = []
}




// save in to localStorage
creat.onclick = function(){
    let allinput  = {
        title:titleinput.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        catgary:catgary.value.toLowerCase(),
        totl:totl.innerHTML,
        count:count.value
        
    }
    if (titleinput.value != ""&& price.value != ""&& catgary.value != "" && count.value <= 500 ){
        if(mood === "creat"){
            if(allinput.count > 1){
                for(let i = 0 ; i < allinput.count; i++)
                date.push(allinput)
        
            }
            else{
                date.push(allinput)
            } }
        else {
        date [  ay] =allinput;
        mood = "creat"
        submit.innerHTML = "creat"
        count.style.display = "block"
    }
    clearDate()
}

    
    localStorage.setItem("Info" , JSON.stringify(date))
    
    ShowDate()
    console.log(date)
    
}





//clearDate 
function clearDate(){
    titleinput.value ="";
    price.value ="";
    taxes.value ="";
    ads.value ="";
    discount.value ="";
    totl.innerHTML ="";
    catgary.value ="";
    count.value ="";
    
}






// read 
function ShowDate(){
    getTotle()

    let  table = "";
    for(let i = 0 ; i < date.length; i++)
    {
        table +=`
                <tr>
                    <th>${i+1}</th>
                    <th>${date[i].title}</th>
                    <th>${date[i].price}</th>
                    <th>${date[i].taxes}</th>
                    <th>${date[i].ads}</th>
                    <th>${date[i].discount}</th>
                    <th>${date[i].catgary}</th>
                    <th id="totlshow">${date[i].totl}</th>
                    
                    <th><button onclick="updateDate(${i})" id="update">Updet</button></th>
                    <th><button onclick="deletdate(${i}) " id="delet">Delet</button></th>
                    
                </tr>`
            
    };

    
    document.getElementById("tbodys").innerHTML = table;
    let deletAll = document.getElementById("deletAll")
    if(date.length > 0 ){
        deletAll.innerHTML = `
        <button onclick="deletAll()">Delet All Info(${date.length})</button>`
    }
    else{
        deletAll.innerHTML = ""
    }
    
}
ShowDate()





//delet

function deletdate(i){
    date.splice(i,1)
    localStorage.Info = JSON.stringify(date)
    ShowDate()
}








//deletall

function deletAll(){
    localStorage.clear()
    date.splice(0)
    ShowDate()
}







// update
function updateDate(i){
    titleinput.value = date[i].title
    price.value = date[i].price
    taxes.value = date[i].taxes
    discount.value = date[i].discount
    ads.value = date[i].ads
    getTotle()
    totl
    count.style.display ="none" 
    catgary.value = date[i].discount
    submit.innerHTML = "Update"
    mood = "update"
    ay = i ;
    scroll({
        top:0,
        behavior:"smooth"

    })
}






// let search

let searchmood = "title"

function getsearch(id){

    let search = document.getElementById("Search")
    if(id == "searctitile"){
        searchmood = "title"
    }
    else {
        searchmood= "Categry"
    }
    search.focus()
    search.placeholder = "Search by " + searchmood;
    search.value= ""
    ShowDate()
}


function searchDate(value){
    let table= ""
    for(let i = 0 ; i < date.length; i++){

    if(searchmood == "title"){
        {
            if(date[i].title.toLowerCase().includes(value.toLowerCase())){
                table +=`
                <tr>
                    <th>${i}</th>
                    <th>${date[i].title}</th>
                    <th>${date[i].price}</th>
                    <th>${date[i].taxes}</th>
                    <th>${date[i].ads}</th>
                    <th>${date[i].discount}</th>
                    <th>${date[i].catgary}</th>
                    <th id="totlshow">${date[i].totl}</th>
                    
                    <th><button onclick="updateDate(${i})" id="update">Updet</button></th>
                    <th><button onclick="deletdate(${i}) " id="delet">Delet</button></th>
                </tr>`
            
                };
        }
    }

    else{
        {
            if(date[i].catgary.toLowerCase().includes(value.toLowerCase())){
                table +=`
                <tr>
                    <th>${i}</th>
                    <th>${date[i].title}</th>
                    <th>${date[i].price}</th>
                    <th>${date[i].taxes}</th>
                    <th>${date[i].ads}</th>
                    <th>${date[i].discount}</th>
                    <th>${date[i].catgary}</th>
                    <th id="totlshow">${date[i].totl}</th>
                    
                    <th><button onclick="updateDate(${i})" id="update">Updet</button></th>
                    <th><button onclick="deletdate(${i}) " id="delet">Delet</button></th>
                </tr>`
            
                };
        }
    } }
    document.getElementById("tbodys").innerHTML = table;
    
    
}


document.getElementById('scrollDownBtn').addEventListener('click', function() {
   
    // Get the position of the content element
    var contentElement = document.querySelector('.content');
    
    // Scroll down smoothly to the content element
    contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
});