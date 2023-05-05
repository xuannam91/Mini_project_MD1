let movie = JSON.parse(localStorage.getItem("movie"));
localStorage.setItem("movie", JSON.stringify(movie));

let tbody = document.getElementById("tablebody");
let form = document.getElementById("main-form");
let updateIndex = undefined;

// render phim
function renderMovie() {
  tbody.innerHTML = "";
  for (let i = 0; i < movie.length; i++) {
    console.log(movie);
    tbody.innerHTML += `<tr id=${movie[i].id}>
       <td>${i + 1}</td>
       <td>${movie[i].name}</td>
       <td><img src="${movie[i].image}" alt=""></td>
       <td><iframe width=\"350\" height=\"270\" src=\"${movie[i].link}" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe></td>
       <td>${movie[i].type}</td>
       <td>${movie[i].country}</td>
       <td>${movie[i].time}</td>
       <td><button type="button" class="btn btn-primary update">Update</button>
           <button type="button" class="btn btn-secondary delete">Delete</button>
       </td>
     </tr>`;
  }
}
renderMovie();

//   thêm phim mới  
form.onsubmit = function (e) {
  e.preventDefault();
  if (
    form.name.value == "" ||
    form.image.value == "" ||
    form.link.value == "" ||
    form.type.value == "" ||
    form.country.value == "" ||
    form.time.value == ""
  ) {
    alert("bạn cần nhập đầy đủ");
  } else {
    console.log(form.name.value);
    console.log(form.image.value);
    console.log(form.link.value);
    console.log(form.type.value);
    console.log(form.country.value);
    console.log(form.time.value);
    let list = {
      id: Math.floor(Math.random() * 1000000),
      name: form.name.value,
      image: form.image.value,
      link: form.link.value,
      type: form.type.value,
      country: form.country.value,
      time: form.time.value,
    };
    movie.push(list);
    localStorage.setItem("movie", JSON.stringify(movie));
    renderMovie();
  }
  form.name.value = "";
  form.image.value = "";
  form.link.value = "";
  form.type.value = "";
  form.country.value = "";
  form.time.value = "";
};

// sửa danh sách phim
tbody.onclick = function (e) {
  if (e.target.classList.contains("update")) {
    console.log(e.target.parentElement.parentElement.id); //tim ra id
    let id = e.target.parentElement.parentElement.id;
    let td = e.target.parentElement.parentElement;
    let findIndex = -1;
    for (let i = 0; i < movie.length; i++) {
      if (movie[i].id === Number(id)) {
        findIndex = i;
      }
    }
    if (findIndex > -1) {
      updateIndex = findIndex;
      let find = movie[findIndex];
      console.log(find);
      td.innerHTML = `<tr id=${find.id}>
        <td></td>
        <td><input type="text" value="${find.name}"/></td>
        <td><input type="link"/></td>
        <td><input type="link"/></td>
        <td><input type="text" value="${find.type}"/></td>
        <td><input type="text" value="${find.country}"/></td>
        <td><input type="text" value="${find.time}"/></td>
        <td><button type="button" class="btn btn-primary comfirm">Comfirm</button>
            <button type="button" class="btn btn-secondary cancel">Cancel</button>
        </td>
         </tr>`;
    }
  }
  if (e.target.classList.contains("comfirm")) {
    let name =
      e.target.parentElement.parentElement.children[1].children[0].value;
    let image =
      e.target.parentElement.parentElement.children[2].children[0].value;
    let link =
      e.target.parentElement.parentElement.children[3].children[0].value;
    let type =
      e.target.parentElement.parentElement.children[4].children[0].value;
    let country =
      e.target.parentElement.parentElement.children[5].children[0].value;
    let time =
      e.target.parentElement.parentElement.children[6].children[0].value;
    console.log(name, image, link, type, country, time);

    movie[updateIndex] = {
      ...movie[updateIndex],
      name: name,
      image: image,
      link: link,
      type: type,
      country: country,
      time: time,
    };
    localStorage.setItem("movie", JSON.stringify(movie));
    renderMovie();
  }

  // xoá danh sách phim
  if (e.target.classList.contains("delete")) {
    let id = Number(e.target.parentElement.parentElement.id);
    let check = -1;
    for (let i = 0; i < movie.length; i++) {
      if (movie[i].id == id) {
        check = i;
        break;
      }
    }
    if (check !== -1) {
      movie.splice(check, 1);
    }
    renderMovie();
    localStorage.setItem("movie", JSON.stringify(movie));
  }
};

// Tìm kiếm theo tên
let search = document.getElementById("input-search");
let btn = document.getElementById("header-btn");
console.log(btn);
btn.onclick = function (e) {
  console.log(search.value);
  let result = [];
  for (let i = 0; i < movie.length; i++) {
    if (search.value.toLowerCase() === movie[i].name.toLowerCase()) {
      result.push(movie[i]);
    }
  }
  console.log(result);
  tbody.innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      ` <tr>
    <td>${i + 1}</td>
    <td>${result[i].name}</td>
    <td><img src="${result[i].image}" alt=""></td>
    <td><iframe width=\"350\" height=\"270\" src=\"${result[i].link}" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe></td>
    <td>${result[i].type}</td>
    <td>${result[i].country}</td>
    <td>${result[i].time}</td>
    <td><button type="button" class="btn btn-primary update" id=${
      result[i].id
    }>Update</button>
        <button type="button" class="btn btn-secondary delete"  id=${
          result[i].id
        }>Delete</button>
    </td>
   
  </tr>`;
  }
};




// phụ lục
// image
// : 
// "https://phimmoiyy.net/wp-content/uploads/2019/11/The-Mandalorian-Season-3.jpg"
// link
// : 
// "https://www.youtube.com/embed/aOC8E8z_ifw"