myLead = []

const inputEl = document.querySelector("#input")
const  ulEl = document.querySelector("#ulli")
const  savEl = document.querySelector("#btn")
const  delEl = document.querySelector("#btnDel")
const  tabEl = document.querySelector("#tab")
const getLead = JSON.parse(localStorage.getItem("myLead"))


if(getLead){
    myLead = getLead
    render(myLead)
}

function render(myArray){
    let listItem = ""
    for (let i=0; i< myArray.length; i++){
        listItem += `<li> 
                         <a target='_blank' href='${myArray[i]}'> 
                             ${myArray[i]} 
                         </a>
                     </li> `
       }
    
       ulEl.innerHTML = listItem
    }


savEl.addEventListener("click", function() {

    if(inputEl.value === ""){
    }
    else{
    myLead.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
    }

})
delEl.addEventListener("dblclick",function (){

    localStorage.clear()
    myLead = []
    render(myLead)

})

tabEl.addEventListener("click", function () {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead) )
        render(myLead)
    })
})
