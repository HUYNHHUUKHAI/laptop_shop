const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
module.exports = async () => {
    const user = await prisma.user.findMany()
    if (user.length == 0) {
        listLaptop = [{
            "name": "HP 15s fq5229TU i3 1215U (8U237PA)",
            "img": "lap1.png",
            "price": 11190000
        },
        {
            "name": "Asus Vivobook X415EA i3 1115G4 (EK2034W)",
            "img": "lap2.jpg",
            "price": 8990000
        },
        {
            "name": "Lenovo Ideapad 3 15IAU7 i3 1215U (82RK005LVN)",
            "img": "lap3.jpg",
            "price": 8960000
        },
        {
            "name": "Acer Aspire 7 Gaming A715 76G 59MW i5 12450H (NH.QMYSV.001)",
            "img": "lap4.jpg",
            "price": 17990000
        },
        {
            "name": "MSI Modern 14 C11M i3 1115G4 (011VN)",
            "img": "lap5.jpg",
            "price": 8990000
        },
        {
            "name": "HP 15s fq5162TU i5 1235U (7C134PA)",
            "img": "lap6.jpg",
            "price": 15690000
        },
        {
            "name": "Dell Vostro 15 3520 i3 1215U1 (5M2TT1)",
            "img": "lap7.png",
            "price": 11990000
        },
        {
            "name": "Lenovo Ideapad 3 15ITL6 i3 1115G4 (82H803SFVN)",
            "img": "lap8.jpg",
            "price": 8690000
        },
        {
            "name": "Asus Vivobook 15 X1504ZA i3 1215U (NJ102W)",
            "img": "lap9.jpg",
            "price": 10490000
        },
        {
            "name": "Acer Aspire 7 Gaming A715 76G 5806 i5 12450H (NH.QMFSV.002)",
            "img": "lap10.jpg",
            "price": 19890000
        },
        {
            "name": "HP 15s fq5229TU i3 1215U (8U237PA)",
            "img": "lap1.png",
            "price": 11190000
        },
        {
            "name": "Asus Vivobook X415EA i3 1115G4 (EK2034W)",
            "img": "lap2.jpg",
            "price": 8990000
        },
        {
            "name": "Lenovo Ideapad 3 15IAU7 i3 1215U (82RK005LVN)",
            "img": "lap3.jpg",
            "price": 8960000
        },
        {
            "name": "Acer Aspire 7 Gaming A715 76G 59MW i5 12450H (NH.QMYSV.001)",
            "img": "lap4.jpg",
            "price": 17990000
        },
        {
            "name": "MSI Modern 14 C11M i3 1115G4 (011VN)",
            "img": "lap5.jpg",
            "price": 8990000
        },

        {
            "name": "Laptop Apple MacBook Air 13 inch M1 2020",
            "img": "lap11.jpg",
            "price": 49990000
        },
        {
            "name": "Laptop Apple MacBook Pro 13 inch M2 2022",
            "img": "lap12.jpg",
            "price": 52990000
        },

        {
            "name": "HP 15s fq5162TU i5 1235U (7C134PA)",
            "img": "lap6.jpg",
            "price": 15690000
        },
        {
            "name": "Dell Vostro 15 3520 i3 1215U1 (5M2TT1)",
            "img": "lap7.png",
            "price": 11990000
        },
        {
            "name": "Lenovo Ideapad 3 15ITL6 i3 1115G4 (82H803SFVN)",
            "img": "lap8.jpg",
            "price": 8690000
        },
        {
            "name": "Asus Vivobook 15 X1504ZA i3 1215U (NJ102W)",
            "img": "lap9.jpg",
            "price": 10490000
        },
        {
            "name": "Acer Aspire 7 Gaming A715 76G 5806 i5 12450H (NH.QMFSV.002)",
            "img": "lap10.jpg",
            "price": 19890000
        },
        {
            "name": "HP 15s fq5229TU i3 1215U (8U237PA)",
            "img": "lap1.png",
            "price": 11190000
        },
        {
            "name": "Asus Vivobook X415EA i3 1115G4 (EK2034W)",
            "img": "lap2.jpg",
            "price": 8990000
        },
        {
            "name": "Lenovo Ideapad 3 15IAU7 i3 1215U (82RK005LVN)",
            "img": "lap3.jpg",
            "price": 8960000
        },
        {
            "name": "Acer Aspire 7 Gaming A715 76G 59MW i5 12450H (NH.QMYSV.001)",
            "img": "lap4.jpg",
            "price": 17990000
        },
        {
            "name": "MSI Modern 14 C11M i3 1115G4 (011VN)",
            "img": "lap5.jpg",
            "price": 8990000
        },
        {
            "name": "HP 15s fq5162TU i5 1235U (7C134PA)",
            "img": "lap6.jpg",
            "price": 15690000
        },
        {
            "name": "Dell Vostro 15 3520 i3 1215U1 (5M2TT1)",
            "img": "lap7.png",
            "price": 11990000
        },
        {
            "name": "Lenovo Ideapad 3 15ITL6 i3 1115G4 (82H803SFVN)",
            "img": "lap8.jpg",
            "price": 8690000
        },
        {
            "name": "Asus Vivobook 15 X1504ZA i3 1215U (NJ102W)",
            "img": "lap9.jpg",
            "price": 10490000
        },
        {
            "name": "Acer Aspire 7 Gaming A715 76G 5806 i5 12450H (NH.QMFSV.002)",
            "img": "lap10.jpg",
            "price": 19890000
        },
        {
            "name": "HP 15s fq5229TU i3 1215U (8U237PA)",
            "img": "lap1.png",
            "price": 11190000
        },
        {
            "name": "Asus Vivobook X415EA i3 1115G4 (EK2034W)",
            "img": "lap2.jpg",
            "price": 8990000
        },
        {
            "name": "Lenovo Ideapad 3 15IAU7 i3 1215U (82RK005LVN)",
            "img": "lap3.jpg",
            "price": 8960000
        },
        {
            "name": "Acer Aspire 7 Gaming A715 76G 59MW i5 12450H (NH.QMYSV.001)",
            "img": "lap4.jpg",
            "price": 17990000
        },
        {
            "name": "MSI Modern 14 C11M i3 1115G4 (011VN)",
            "img": "lap5.jpg",
            "price": 8990000
        },
        {
            "name": "HP 15s fq5162TU i5 1235U (7C134PA)",
            "img": "lap6.jpg",
            "price": 15690000
        },
        {
            "name": "Dell Vostro 15 3520 i3 1215U1 (5M2TT1)",
            "img": "lap7.png",
            "price": 11990000
        },
        {
            "name": "Lenovo Ideapad 3 15ITL6 i3 1115G4 (82H803SFVN)",
            "img": "lap8.jpg",
            "price": 8690000
        },
        {
            "name": "Asus Vivobook 15 X1504ZA i3 1215U (NJ102W)",
            "img": "lap9.jpg",
            "price": 10490000
        },
        {
            "name": "Acer Aspire 7 Gaming A715 76G 5806 i5 12450H (NH.QMFSV.002)",
            "img": "lap10.jpg",
            "price": 19890000
        },
        {
            "name": "Laptop Apple MacBook Air 13 inch M1 2020",
            "img": "lap11.jpg",
            "price": 49990000
        },
        {
            "name": "Laptop Apple MacBook Pro 13 inch M2 2022",
            "img": "lap12.jpg",
            "price": 52990000
        },
        ]
        await prisma.laptop.createMany({
            data: listLaptop
        })
        await prisma.user.createMany({
            data: [{
                name: "Huỳnh Hữu Khải1",
                email: "khaihuynh@gmail.com",
                phone: "0769342963",

            },
            {
                name: "Huỳnh Hữu Khải2",
                email: "khaihuynh@gmail.com",
                phone: "0769342963",

            },
            {
                name: "Huỳnh Hữu Khải3",
                email: "khaihuynh@gmail.com",
                phone: "0769342963",

            },
            ]
        })

        await prisma.historyOder.createMany({
            data: [{
                address: "Hẻm 01 Ấp Bắc, Phường 05, Thành phố Mỹ Tho, Tiền Giang, Việt Nam",
                status: "PENDDING",
                laptopId: 1,
                orderId: "1701793990597",
                amount: 11301900,
                deliveryFee: 111900,
                userId: 1,
            },
            {
                address: "Hẻm 01 Ấp Bắc, Phường 05, Thành phố Mỹ Tho, Tiền Giang, Việt Nam",
                status: "CANCEL",
                laptopId: 1,
                orderId: "1701793466126",
                amount: 11301900,
                deliveryFee: 111900,
                userId: 2,
            },
            {
                address: "C8GJ+6P6, ĐT878, Thân Cửu Nghĩa, Châu Thành, Tiền Giang, Việt Nam",
                status: "COMPLETE",
                laptopId: 1,
                orderId: "1701793424758",
                amount: 11301900,
                deliveryFee: 111900,
                userId: 3,
            },
            ]
        })
    }
}