function verifyOTP(){

let otp=document.getElementById("otp").value

if(otp=="1234"){
alert("Account created successfully")
window.location="dashboard.html"
}

else{
alert("Invalid OTP")
}

}

function payNow(){

alert("Payment Successful! Subscription activated for 6 months.")

window.location="reader.html"

}

function openBook(book){

localStorage.setItem("book",book)

}

function loadBook(){

let book=localStorage.getItem("book")

document.getElementById("pdf").src="../books/"+book

}