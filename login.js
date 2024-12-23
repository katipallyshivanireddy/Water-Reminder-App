let loginemail=document.getElementById("useremail")
let loginpswd=document.getElementById("userpswd")
let loginbtn=document.getElementById("login")
loginbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let loginMail=loginemail.value;
    let loginPs=loginpswd.value;
    let mailstorage=localStorage.getItem("email")
    let Pswdstorage=localStorage.getItem("pswd")
    if(loginMail==mailstorage&&loginPs==Pswdstorage){
         alert("login successfull")
        window.location.href="water.html"
    }
    else{
        alert("invalid credentials")
    }
    
})