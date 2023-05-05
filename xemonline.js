// phim Nổi Bật
let id = JSON.parse(localStorage.getItem("id"));
let changeVideo = document.querySelector("#content-change");
// thay đổi dữ liệu theo ảnh
changeVideo.innerHTML = 
`<div>
    
<iframe width=\"930\" height=\"400\" src=\"${id.link}" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>
  </div>


    <div class="row">
        <div class="col-4">
            <img src=${id.image} alt="">
        </div>
        <div class="col-8">
            <h2>${id.name}</h2>

            <div>
                <ul>
                <li>Thể loại: <span>${id.type}</span></li>
                <li>Tình trạng: Full</li>
                <li>Đạo diễn: Alessandro Antonaci</li>
                <li>Diễn viên: Lam Kor-wan</li>
                <li>Quốc Gia: <span>${id.country}</span></li>
                <li>Thời lượng: <span>${id.time}</span> phút</li>
                </ul>
            </div>
            <div>
                <span class="main-col-8-feedback">Đánh giá </span>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
    </div>
    </div>


    <div class="col-9-container">
        <h3>NỘI DUNG PHIM</h3>
        <div>
        <p>
        ${id.content}
            </p>
        </div>
    </div>`;


// đánh giá của người xem bằng sao!

    let stars = document.querySelectorAll(".fa-star");

    for (let i = 0; i < stars.length; i++) {
      stars[i].addEventListener("click", function() {
        for (let j = 0; j < stars.length; j++) {
          if (j <= i) {
            stars[j].classList.add("active");
          } else {
            stars[j].classList.remove("active");
          }
        }
      });
    }




    // comment người xem
    let comment = document.getElementById("main-comment-input");
    let commentElement = document.getElementById("content-comment");
    comment.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            let newcomment = document.createElement('p');
            newcomment.textContent =  comment.value;
            commentElement.appendChild(newcomment);
            comment.value ="";
        }
    });