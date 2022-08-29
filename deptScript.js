//Manage Shopping List

var addToListButtons = document.getElementsByClassName("shopItem");

var clearButton = document.getElementById("clear");

var listItems = [];


for(var i =0 ; i< addToListButtons.length;i++ ){
    var button = addToListButtons[i];
    button.addEventListener("click",clickItem);
}

function clickItem(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var itemName = shopItem.getElementsByClassName("nameItem")[0].innerText;
    var itemPrice = shopItem.getElementsByClassName("itemPrice")[0].innerText;
    if(!(listItems.includes(itemName))){
        listItems.push(itemName);
        addItemList(itemName,itemPrice);
    }
    else{
        alert("Item is already on the shopping list");
    }

    
    console.log(itemName,itemPrice);
    console.log(listItems);
    
}

function addItemList(itemName,itemPrice){
    var listRow = document.createElement("div");
    var itemsList = document.getElementsByClassName("listItems")[0];
    itemsList.append(listRow);
    listRow.innerHTML=`<ul><li>  ${itemName}  ${itemPrice}</li></ul>`;
}

clearButton.addEventListener("click",function(){
    var allItems = document.getElementsByClassName("listItems")[0];
    allItems.innerHTML="";
    listItems = [];
})


