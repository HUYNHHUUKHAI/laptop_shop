let urlParam = new URLSearchParams(window.location.search)
let orderId = urlParam.get('orderId')
console.log(orderId);
fetch("http://localhost:3000/api/completeorder", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ "orderId": orderId })
}).then(data => console.log("complete")).catch(err => console.log(err))