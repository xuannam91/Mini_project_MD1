let form = document.getElementById("admin-form");
form.onsubmit = function(e){
    e.preventDefault();
    if ( 
        form.content.value === "" ||
        form.password.value === ""){
        alert("bạn cần nhập đầy đủ");
        
      }
    else if(form.content.value !== "xuannam" || password.value !== "abc"){
        alert("bạn đăng nhập sai");
        
    }else{
        window.location.href = "./admin.html";
    }
    
}