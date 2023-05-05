// ảnh slide show
let img = document.getElementById("img");
let index = 0;
function slideshow(){
  let imgs = [
  "./img/oCSeG1mF3K8HTuYZlayVGznMcES.jpg",
  "./img/f50TAIeR79Yoh1zYb5Tn58zmIxs.jpg",
  "./img/eSSZgM4vMcA4XK2FPptLa9NFsAs.jpg",
  "./img/xfCBPMODWJrFWiib3C2VAFBRwLg.jpg"];
  img.src = imgs[index];
  index++;
  if (index === imgs.length) {
    index = 0;
  }
}setInterval(slideshow, 2000);





let movieList = JSON.parse(localStorage.getItem("active"));
localStorage.setItem("active", JSON.stringify(movieList));
let movieElement = document.getElementById("align-items-start");
// hàm in danh sách phim
function renderMovie() {
  let product = "";
  for (let i = 0; i < movieList.length; i++) {
    product += 
    `<div id="${movieList[i].id}" class="col">
        <a href="#" class="decoration"><img src=${movieList[i].image} alt="">
          <p>${movieList[i].name}</p>
        </a>
      </div>`;
    movieElement.innerHTML = product;
  }
}
renderMovie();

// gọi phim Nổi Bật

movieElement.onclick = function (e) {
  for (let key in movieList) {
    if (e.target.getAttribute("src") == movieList[key].image) {
      localStorage.setItem("id", JSON.stringify(movieList[key]));
      window.location.href = "./xemonline.html";
    }
  }
};




// gọi phim Lẻ

let oddMovie = JSON.parse(localStorage.getItem("movie"));
let oddElement = document.getElementById("oddmovie");
function renderOdd() {
let oddList = "";
for (let j = 0; j < oddMovie.length; j++) {
  oddList += 
  `<div id="${oddMovie[j].id}" class="col">
  <a href="#" class="decoration"><img src=${oddMovie[j].image} alt="">
    <p>${oddMovie[j].name}</p>
  </a>
</div>`
oddElement.innerHTML = oddList;
}
} renderOdd();


oddElement.onclick = function (event){
  for (let key in oddMovie) {
    if (event.target.getAttribute("src") == oddMovie[key].image) {
      localStorage.setItem("id", JSON.stringify(oddMovie[key]));
      window.location.href = "./xemonline.html";
    }
  }
}





// đăng nhập

let formElement = document.getElementById("main-form");
let userList = JSON.parse(localStorage.getItem("user"));
formElement.onsubmit = function (e) {
  e.preventDefault();
  if (!userList || userList.length === 0) {
    alert("Không tìm thấy danh sách người dùng!");
    return;
  }

  if (formElement.content.value == "" || formElement.password.value == "") {
    alert("Vui lòng nhập đầy đủ thông tin đăng nhập!");
    return;
  }

  
  let check = false;
  for (let i = 0; i < userList.length; i++) {
    if (
      formElement.content.value === userList[i].username &&
      formElement.password.value === userList[i].password
    ) {
      check = true;
      window.location.href = "./trangchu.html";
      break;
    }
  }

  if (!check) {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
  }
};
