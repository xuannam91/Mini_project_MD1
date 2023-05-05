let form = document.getElementById("form");

let userLocal = JSON.parse(localStorage.getItem("user")) || [];
console.log(userLocal);

form.onsubmit = function(e){
  e.preventDefault();
 if( form.content.value == "" ||
   form.number.value == "" ||
   form.email.value == "" ||
   form.password.value == "" ||
   form.repassword.value == "")
   {
  alert("Bạn cần nhập đầy đủ thông tin");
 }else if(form.password.value !== form.repassword.value){
  alert("Yêu cầu nhập lại mật khẩu");
 }else{
  let findUser = userLocal.find(user => user.username === form.content.value);
  if(findUser){
    alert("Tài khoản đã tồn tại, vui lòng đăng kí lại");
  }else{
  let users = {
    username: form.content.value,
    number: form.number.value,
    emai: form.email.value,
    password: form.password.value,
    repassword: form.repassword.value,
  }
  userLocal.push(users)
  localStorage.setItem("user", JSON.stringify(userLocal));
  form.reset()
  alert("Đăng ký thành công");
  // Swal.fire({
  //   icon: 'success',
  //   title: 'Oops...',
  //   text: 'Something went wrong!',
  //   footer: '<a href="">Why do I have this issue?</a>'
  // })
  window.location = "http://127.0.0.1:5500/MD1/Mini_project/trangchu.html";
 }
}
};
