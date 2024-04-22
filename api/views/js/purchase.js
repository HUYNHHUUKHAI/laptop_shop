let urlParam = new URLSearchParams(window.location.search)
let laptopid = urlParam.get('laptopid')

console.log(laptopid);
fetch('http://localhost:3000/api/getlaptop', {
    headers: {
        "Content-Type": "application/json",

    },
    method: "POST",
    body: JSON.stringify({
        "id": laptopid
    })

})
    .then((data) => { return data.json() }).then((data) => {
        document.getElementById("productName").innerHTML = data.name
        document.getElementById("productPrice").innerHTML = data.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }).catch((err) => console.log(err))



document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault()

    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    await fetch("http://localhost:3000/api/purchase", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(
            {
                "name": name,
                "phoneNumber": phoneNumber,
                "email": email,
                "address": address,
                "laptopid": laptopid,
            }
        )
    })
        .then(data => {
            return data.json()
        })
        .then(data => {
            console.log(data);
            window.location.href = data.payUrl

        }).catch(err => {
            console.log(err);
        })

})



