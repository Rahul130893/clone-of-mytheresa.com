document.querySelector("#form").addEventListener("submit", additems)
var prodArr=JSON.parse(localStorage.getItem("shopping bag")) || []
function additems(e){
    e.preventDefault()
    var name=document.querySelector("#name").value
    var type=document.querySelector("#type").value
    var price=document.querySelector("#price").value
    var img=document.querySelector("#img").value

    var prodObj={
        Name:name,
        Type:type,
        Price:price,
        Img:img,
    }
    prodArr.push(prodObj)
    localStorage.setItem("shopping bag", JSON.stringify(prodArr))
    
    
}