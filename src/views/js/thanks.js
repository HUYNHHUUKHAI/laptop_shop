let urlParam = new URLSearchParams(window.location.search)
let orderId = urlParam.get('orderId')
console.log("ahha",orderId);
let url = "https://laptop-shop-qlw0.onrender.com"

fetch(url + "/api/completeorder", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ "orderId": orderId })
}).then(data => console.log("complete")).catch(err => console.log(err))