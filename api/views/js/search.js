let urlParam = new URLSearchParams(window.location.search)
let search = urlParam.get('search')



fetch("http://localhost:3000/api/getalllaptop", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "GET",
}).then(data => {
    return data.json()
})
    .then(data => {
        let listLaptopHTML = `<div id="listLaptop" class="listlaptop">`
        let newdata = data.filter((e) => {
            const name = e.name.toLowerCase();
            return name.indexOf(search.toLowerCase()) !== -1
        })


        newdata.forEach(laptop => {
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
        })
        listLaptopHTML += `</div>`
        if (newdata.length != 0) {

            document.getElementById("text-result").innerText = 'Tìm thấy ' + newdata.length + ' kết quả liên quan đến "' + search + '"'
            document.getElementById("result").innerHTML = listLaptopHTML
        } else {
            document.getElementById("text-result").innerText = 'Không tìm thấy kết quả liên quan đến "' + search + '"'
            document.getElementById("result").innerHTML = `
            <div class="not_found">
                <img src="../assets/not_found.jpg" alt="">
            </div>`

        }

    }).catch(err => {
        console.log(err);
    })

function serachLaptop() {

    let search = document.getElementById('search').value
    window.location.href = "search?search=" + search
}

document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault()
    serachLaptop()
})