//let products = JSON.parse(products);
/*for (i=0; i<5; i++){
    document.getElementById('Men'+i).innerText = products[i].image;
    document.getElementById('Men'+i).innerText = products[i].description;
    document.getElementById('Men'+i).innerText = products[i].price;
}*/
/*var length = products.length;
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
}*/

function fetchProducts(url){
    var request = new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  console.log(data)

  if (request.status >= 200 && request.status < 400) {
    var length = data.length;
    for(i=0; i<length; i++){
    var image = document.createElement("img");
    image.setAttribute("src",data[i].imageURL); 
    image.setAttribute("style","height: 200px; width: 200px");
    var title = document.createElement("p");
    title.innerText = data[i].productDescription;
    var price = document.createElement("p");
    price.innerText = data[i].price;
    
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
  } else {
    console.log('error')
  }
}
request.send()
}

function clearTable(){
    var tableData = document.getElementById("products");
    while(tableData.rows.length >0){
        tableData.deleteRow(0);
    }
}

fetchProducts('http://localhost:3000/products');

function showMenProducts(){
    clearTable();
    fetchProducts('http://localhost:3000/products?category=Men')
}

function showWomenProducts(){
    clearTable();
    fetchProducts('http://localhost:3000/products?category=Women')
}

function showSearchProduct(){
    clearTable();
    var searchval = document.getElementById("search").value;
    //alert(searchval)
    fetchProducts('http://localhost:3000/product-search?searchText='+searchval);
}

function showAllProducts(){
    clearTable();
    fetchProducts('http://localhost:3000/products')
}