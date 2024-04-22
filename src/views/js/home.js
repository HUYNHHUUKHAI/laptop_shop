fetch("http://localhost:3000/api/getalllaptop", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "GET",
}).then(data => {
    return data.json()
})
    .then(data => {
        let listLaptopHTML = ""
        data.forEach(laptop => {
            if (laptop.id <= 20) {

                listLaptopHTML += `
                 <div class="laptop">
                    <div class="laptop-img">
                        <img src="../assets/`+ laptop.img + `" alt="">
                    </div>
                    <div>
                        <p class="laptop-title">` + laptop.name + `</p>
                    </div>
                    <div class="laptop-price">`+ laptop.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) + `</div>
                    <div class="buy-laptop" onclick="window.location.href ='purchase?laptopid=`+ laptop.id + `'">
                        <p>mua</p>
                    </div>
                </div>`
            }
        })

        document.getElementById("listLaptop").innerHTML = listLaptopHTML

    }).catch(err => {
        console.log(err);
    })

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) { counter = 1; }
}, 5000);

function serachLaptop() {

    let search = document.getElementById('search').value
    window.location.href = "search?search=" + search
}

document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault()
    serachLaptop()
})