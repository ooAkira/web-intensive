let data = [
    {
        id: 1,
        title: 'Trà sữa kim cương đen Okinawa',
    },

    {
        id: 2,
        title: 'Trà sữa Hạnh phúc',
    },

    {
        id: 3,
        title: 'Toco Trà sữa Panda',
    },

    {
        id: 4,
        title: 'Trà sữa trân châu sợi',
    },

    {
        id: 5,
        title: 'Ô long thái cực',
    },
]

let col = document.querySelectorAll('.col')
for (let i = 0; i < data.length; i++){
    col[0].innerHTML += `
        <div class="row">
            <img src="./images/${data[i].id}.jpg" alt="" width="250">
            <h1>${data[i].title}</h1>
        </div>
    `
}