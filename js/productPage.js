//use document.addEventListener to execute a function named openProductPage on click
//a function should control which data is loaded changing the innerHTML  ?use "this" ? to open the right product
//use template literal to write the HTML 
//use for loop for the colours
//change the style of the selected colour to "checked"

window.onload = function () {
    console.log(window.location);
    const params = new URLSearchParams(window.location.search)
    //jquery ajax
    $.ajax({
        url: "http://localhost:3000/api/teddies/" + params.get("productId"),
        type: "GET",
                success: function (outcome) {
            displaySelectedTeddy(outcome)
        }
    });
};




function displaySelectedTeddy(outcome) {
    let teddy = document.getElementById("selectedTeddy");
    teddy.innerHTML = `
    <div class="row">
    <div class="col-lg-6 text-center pb-5">

          <img src=${outcome.imageUrl} class="img-rounded img-thumbnail img-fluid" alt="${outcome.name}">

    </div>

    <!-- Item info-->

    <div class="col-lg-6" >
      <h1>${outcome.name}</h1>
      <br>
      <p class="h4">${"$"+outcome.price/100}</p>
      <br>
      <p class="text-small mb-4"> ${outcome.description}</p>
      <div class="d-flex flex-wrap align-items-center mb-4" id = “selectColor”>
        <p class="mb-0 me-3">Select color:</p>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <input class="btn-check" id="color1" type="radio" name="colorVariants" value="Tan" checked>
            <label class="btn p-0 m-0" for="color1"><i class="fas fa-circle text-tan"></i></label>
            <label for="Tan">Tan</label>
          </li>
          <li class="list-inline-item">
            <input class="btn-check" id="color2" type="radio" name="colorVariants" value="Chocolate">
            <label class="btn p-0 m-0" for="color2"><i class="fas fa-circle text-chocolate"></i></label>
            <label for="Chocolate">Chocolate</label>
          </li>
          <li class="list-inline-item">
            <input class="btn-check" id="color3" type="radio" name="colorVariants" value="Black">
            <label class="btn p-0 m-0" for="color3"><i class="fas fa-circle text-black"></i></label>
            <label for="Black">Black</label>
          </li>
          <li class="list-inline-item">
            <input class="btn-check" id="color4" type="radio" name="colorVariants" value="White">
            <label class="btn p-0 m-0" for="color4"><i class="fas fa-circle text-twhite"></i></label>
            <label for="White">White</label>
          </li>
        </ul>

      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="border d-flex align-items-center justify-content-between p-1 me-2">
          <div class="quantity py-0">
            <button class="dec-btn p-0" onclick="decrease(this)"><i class="fas fa-caret-left"></i></button>
            <input class="form-control border-0 shadow-0 p-0 quantity-result" type="text" value="1">
            <button class="inc-btn p-0" onclick="increase(this)"><i class="fas fa-caret-right"></i></button>
          </div>
        </div><a class="btn btn-primary btn-sm py-2 px-5 me-3" href="cart.html"> <i
            class="fas fa-shopping-bag py-1 me-2"></i>Add to cart</a>
      </div><br>
    </div>
  </div>



    `
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


