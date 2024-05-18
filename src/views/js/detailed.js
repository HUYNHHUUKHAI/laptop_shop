let urlParam = new URLSearchParams(window.location.search)
let laptopid = urlParam.get('laptopid')
let url = "https://laptop-shop-p8dq.onrender.com"
// let url = "http://localhost:3000"

console.log(laptopid);
fetch(url + '/api/getlaptop', {
    headers: {
        "Content-Type": "application/json",

    },
    method: "POST",
    body: JSON.stringify({
        "id": laptopid
    })

})
    .then((data) => { return data.json() }).then((data) => {
        console.log(data);

        document.getElementById("title").innerHTML = data.name
        document.getElementById("content").innerHTML = data.info
        document.getElementById("cauhinh").innerHTML = "Cấu hình " + data.name
        document.getElementById("cpu").innerHTML = data.cpu
        document.getElementById("ram").innerHTML = data.ram
        document.getElementById("rom").innerHTML = data.rom
        document.getElementById("screen").innerHTML = data.screen
        document.getElementById("card").innerHTML = data.card
        document.getElementById("usb").innerHTML = data.usb
        document.getElementById("os").innerHTML = data.os
        document.getElementById("design").innerHTML = data.design
        document.getElementById("size").innerHTML = data.size
        document.getElementById("time").innerHTML = data.time




        src = ""
        if (data.img.length < 12) {
            src = "https://ik.imagekit.io/2b6hnescv/" + data.img
        } else {
            src = data.img
        }

        document.getElementById("laptop-img").innerHTML = `
                            <img src="`+ src + `" alt="">

        `


        document.getElementById("price").innerHTML = data.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }).catch((err) => console.log(err))


buy = () => {
    window.location.href = 'purchase?laptopid=' + laptopid
}



