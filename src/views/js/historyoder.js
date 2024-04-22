fetch("http://localhost:3000/api/historyoder", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "GET",
}).then(data => {
    return data.json()
})
    .then(data => {
        let tbody = ""
        data.forEach(e => {
            tbody += `   <tr>
        <td><div><p>`+ e.orderId + `</p></div></td>
        <td><div class="user">
          <p>`+ e.user.name + `</p>
          <p>`+ e.user.email + `</p>
          <p>`+ e.user.phone + `</p>
        </div></td>
        <td><div class="laptopitem">
          <p>`+ e.laptop.name + `</p>
          <p>`+ e.laptop.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) + `</p>
        </div></td>
        <td><div>
            <p>`+ e.address + `</p>
            <p>`+ e.deliveryFee.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) + `</p>
        </div></td>
        <td><div>
            <p>`+ e.amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) + `</p>
        </div></td>
        <td><div class ="status"><p>`+ e.status + `</p></div></td>
        <td><div><p>`+ e.createDate + `</p></div></td>
      </tr>`
        });
        document.getElementById("tbody").innerHTML = tbody
    }).catch(err => console.log(err))