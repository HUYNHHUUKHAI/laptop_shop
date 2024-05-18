let url = "https://laptop-shop-p8dq.onrender.com"
// let url = "http://localhost:3000"
listLaptop = []

document.addEventListener('DOMContentLoaded', () => {
    fetch(url + "/api/getalllaptop", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    }).then(data => {
        return data.json()
    })
        .then(data => {
            listLaptop = data
            console.log(data);
            renderTable(listLaptop);

        }).catch(err => {
            console.log(err);
        })


    document.getElementById('searchInput').addEventListener('keyup', function () {
        const filter = this.value.toLowerCase();
        const filteredLaptops = listLaptop.filter(laptop => laptop.name.toLowerCase().includes(filter));
        renderTable(filteredLaptops);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach((laptop, index) => {
        const row = document.createElement('tr');
        src = ""
        if (laptop.img.length < 12) {
            src = "https://ik.imagekit.io/2b6hnescv/" + laptop.img
        } else {
            src = laptop.img
        }

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${laptop.name}</td>
            <td><img src="`+ src + `" alt="${laptop.name}" width="100"></td>
            <td>${laptop.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            <td>${laptop.info}</td>
            <td>${laptop.cpu}</td>
            <td>${laptop.ram}</td>
            <td>${laptop.rom}</td>
            <td>${laptop.screen}</td>
            <td>${laptop.card}</td>
            <td>${laptop.usb}</td>
            <td>${laptop.os}</td>
            <td>${laptop.design}</td>
            <td>${laptop.size}</td>
            <td>${laptop.time}</td>
        `;

        tableBody.appendChild(row);
    });
}