var products = JSON.parse(localStorage.getItem("shopping bag"));
var arr =JSON.parse(localStorage.getItem("cartItems")) || []


displayItems(products)
function displayItems(products){
products.map(function (elem) {
var div = document.createElement("div");

var h2 = document.createElement("h2");
h2.textContent = elem.Name;

var type=document.createElement("h3");
type.textContent=elem.Type;

var h3 = document.createElement("h3");
h3.textContent = "$" + elem.Price;

var image = document.createElement("img");
image.setAttribute("src", elem.Img);

var button = document.createElement("button");
button.textContent = "Add to cart";
button.addEventListener("click", function () {
  addtocart(elem);
});
div.append(h2,type, h3, image, button);
document.querySelector("#container").append(div);
});
}
function addtocart(elem) {
arr.push(elem);

localStorage.setItem("cartItems", JSON.stringify(arr))
}