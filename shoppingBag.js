var cart = JSON.parse(localStorage.getItem("cartItems"));
document.querySelector("#length").textContent = cart.length;

console.log(cart.length);
displaycart(cart);
function displaycart(cart) {
  cart.map(function (elem, index) {
    var h2 = document.createElement("h2");
    h2.textContent = elem.Name;

    var type = document.createElement("h3");
    type.textContent = elem.Type;

    var h3 = document.createElement("h3");
    h3.textContent = elem.Price;

    var image = document.createElement("img");
    image.setAttribute("src", elem.Img);

    var div = document.createElement("div");
    div.append(h2, type, h3, image);
    document.querySelector("#container_bag").append(div);
  });
  var totalA = cart.reduce(function (acc, cv) {
    return acc + Number(cv.Price);
  }, 0);
  document.querySelector("#total").textContent = "$ " + totalA + ".00";

  var order = document.createElement("button");
  order.textContent = "order";
  document.querySelector("#main").append(order);
  order.addEventListener("click", function () {
    window.location.href = "payment.html";
  });
}