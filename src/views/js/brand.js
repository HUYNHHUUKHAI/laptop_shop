let urlParam = new URLSearchParams(window.location.search)
let brand = urlParam.get('brand')

document.getElementById(brand).className = "brand_selected"
let url = "https://laptop-shop-p8dq.onrender.com"
// let url = "http://localhost:3000"



fetch(url + "/api/getalllaptop", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "GET",
}).then(data => {
    return data.json()
})
    .then(data => {
        let listLaptopHTML = ""
        let newdata = data.filter((e) => {
            const name = e.name.toLowerCase();
            return name.indexOf(brand.toLowerCase()) !== -1
        })

        newdata.forEach(laptop => {
            src = ""
            if (laptop.img.length < 12) {
                src = "https://ik.imagekit.io/2b6hnescv/" + laptop.img
            } else {
                src = laptop.img
            }
            listLaptopHTML += `
             <div class="laptop" onclick="window.location.href ='detailed?laptopid=`+ laptop.id + `'">
                <div class="laptop-img">
                    <img src="`+ src + `" alt="">
                </div>
                <div>
                    <p class="laptop-title">` + laptop.name + `</p>
                </div>
                <div class="laptop-price">`+ laptop.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) + `</div>
            </div>`
        })

        document.getElementById("listLaptop").innerHTML = listLaptopHTML

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