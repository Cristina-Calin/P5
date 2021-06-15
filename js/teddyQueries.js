//query all teddy bears
window.onload = function () {
    console.log("window loaded");
    //jquery ajax
    $.ajax({
        url: "http://localhost:3000/api/teddies/",
        type: "GET",
        success: function (result) {
            displayTeddies(result)
        }
    });
};

function displayTeddies(result) {
    let list = document.getElementById("teddies");
    list.innerHTML = ""
    for(i=0; i<result.length; i++) {
        console.log(result[i])
        list.innerHTML += 
        `        
        <a href="product.html?productId=${result[i]._id}" class="btn"> 
          <div class="col">
            <div class="card h-100">
              <img src=${result[i].imageUrl} class="card-img-top" alt="${result[i].name}">
              <div class="card-body">
                <h5 class="card-title">${result[i].name}</h5>
                <p class="card-text">${result[i].description}</p>
              </div>
              <div class="card-footer text-center">
                <h2 class="price">${"$"+result[i].price/100}</h2>
              </div>
            </div>
          </div>
        </a>
      `
    }
}




//use document.addEventListener to execute a function named openProductPage on click
//a function should control which data is loaded changing the innerHTML  ?use "this" ? to open the right product
//use template literal to write the HTML 
//use for loop for the colours
//change the style of the selected colour to "checked" 

// function openProductPage(product) {
//   window.open(product.html, _self);
// }

// document.getElementById("teddies").addEventListener("click", openProductPage);


