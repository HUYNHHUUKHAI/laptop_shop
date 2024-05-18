let url = "https://laptop-shop-p8dq.onrender.com"
// let url = "http://localhost:3000"

document.getElementById('addLaptopForm').addEventListener('submit', async function (event) {
    event.preventDefault();


    await fetch(url + "/api/addlaptop", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(
            {
                name: document.getElementById('name').value,
                img: document.getElementById('img').value,
                price: parseFloat(document.getElementById('price').value),
                info: document.getElementById('info').value,
                cpu: document.getElementById('cpu').value,
                ram: document.getElementById('ram').value,
                rom: document.getElementById('rom').value,
                screen: document.getElementById('screen').value,
                card: document.getElementById('card').value,
                usb: document.getElementById('usb').value,
                os: document.getElementById('os').value,
                design: document.getElementById('design').value,
                size: document.getElementById('size').value,
                time: document.getElementById('time').value.toString(),

            }
        )
    })
        .then(data => {
            return data.json()
        })
        .then(data => {
            console.log(data);
            alert("Thêm thành công");
            window.location.href ='detailed?laptopid='+data.id

        }).catch(err => {
            console.log(err);
        })

});