function addItem() {
    var text = document.getElementById("newItemText").value;
    if (text.trim() !== "") {
        var itemDiv = document.createElement("div");
        itemDiv.className = "add-style";
        var textSpan = document.createElement("span");
        textSpan.textContent = text;
        var trashSpan = document.createElement("span");
        trashSpan.className = "delete-icon";
        trashSpan.innerHTML = '<i class="fa fa-trash-o"></i>';
        trashSpan.onclick = function() {
            itemDiv.remove();
        };
        
        var text = document.getElementById("newItemText").value;
        var textSpan = document.createElement("span");
        textSpan.textContent = text;
        
    
        ;
       
        itemDiv.appendChild(textSpan);
      
        itemDiv.appendChild(trashSpan);
        var itemContainer = document.getElementById("itemContainer");
        itemContainer.appendChild(itemDiv);
        document.getElementById("newItemText").value = "";
       
    }
}


