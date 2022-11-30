let data = []

let col = document.querySelectorAll(".col")

let addBtn = document.getElementById("addBtn")
let editBtn = document.getElementById("editBtn")
let removeBtn = document.getElementById("removeBtn")

addBtn.addEventListener('click', ()=>{
    let inputTitle = prompt("Vui lòng nhập tên món trà sữa 🥛")
    let inputImg = prompt("Vui lòng nhập link hình ảnh trà sữa 📷")

    if (inputTitle == null && inputImg == null){
        alert("Huỷ bỏ! không thêm món❗")
    } else {
        let dataMenu = JSON.parse(localStorage.getItem("dataMenu"))
        data = dataMenu
    
        data.push(
            {
                title: inputTitle, 
                img: inputImg
            }
        )
    
        localStorage.setItem("dataMenu", JSON.stringify(data));
    
        render()
    }
})

const render = () => {
    col[0].innerHTML = null

    let dataMenu = JSON.parse(localStorage.getItem("dataMenu"))

    for (let i = 0; i < dataMenu.length; i++){
        col[0].innerHTML += `
            <div class="row">
                <img src="${dataMenu[i].img}" alt="" width="250">
                <h1>${i + 1}. ${dataMenu[i].title}</h1>
            </div>
        `
    }
}

(() => {
    render()
})()

editBtn.addEventListener('click', () => {
    let dataMenu = JSON.parse(localStorage.getItem("dataMenu"))

    if (dataMenu.length == 0){
        alert("Không món nào có trong dữ liệu 😥")
    } else {
        let idInput = prompt("Nhập id của món trà sữa cần sửa 🆔")

        if (idInput > dataMenu.length){
            alert("Không tồn tại id của món trã sữa 🤔")
        } else {
            let newName = prompt("Tên mới của món trà sữa 🆕")
            let newImg = prompt("Ảnh mới của món trà sữa 📷")
        
            if (newName == null || newName === "" || newName === " " && newName != null){
                newName = dataMenu[idInput - 1].title
            }
            
            if (newImg == null || newImg === "" || newImg === " " && newImg != null){
                newImg = dataMenu[idInput - 1].img
            }
        
            dataMenu[idInput - 1].title = newName 
            dataMenu[idInput - 1].img = newImg
        
            data = dataMenu
            localStorage.setItem("dataMenu", JSON.stringify(data));
        
            render()
        }
    }
})

removeBtn.addEventListener('click', () => {
    let dataMenu = JSON.parse(localStorage.getItem("dataMenu")) || []

    if (dataMenu.length == 0){
        alert("Không món nào có trong dữ liệu 😥")
    } else {
        let idInput = prompt("Nhập id của món trà sữa cần xoá ❌")
    
        if (idInput == null || idInput === "" || idInput === " " && idInput != null){
            alert("Huỷ bỏ xoá món❗")
        } else {
            dataMenu.splice(idInput - 1, 1)
        }

        data = dataMenu
        localStorage.setItem("dataMenu", JSON.stringify(data));

        render()
    }
})