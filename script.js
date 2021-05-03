//let products = JSON.parse(products);
/*for (i=0; i<5; i++){
    document.getElementById('Men'+i).innerText = products[i].image;
    document.getElementById('Men'+i).innerText = products[i].description;
    document.getElementById('Men'+i).innerText = products[i].price;
}*/
var length = products.length;
for(i=0; i<=length; i++){
    var image = document.createElement("img");
    image.setAttribute("src",products[i].image); 
    image.setAttribute("style","height: 200px; width: 200px");
    var title = document.createElement("p");
    title.innerText = products[i].description;
    var price = document.createElement("p");
    price.innerText = products[i].price;
    
    var tableData = document.createElement("td");
    tableData.appendChild(image);
    tableData.appendChild(title);
    tableData.appendChild(price);

    if(i%5 == 0){
        var tableRow = document.createElement("tr");
    }
    tableRow.appendChild(tableData);
    
    document.getElementById("products").appendChild(tableRow);  
}