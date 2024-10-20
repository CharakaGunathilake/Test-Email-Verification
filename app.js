
function emailVerification(){

    let email = document.getElementById("emailInput");
    const otpDiv = document.getElementsByClassName("otpDiv")[0];

    console.log("working");

    let otp = Math.floor(Math.random()*10000);

    let emailBody = `<h2>Your OTP is </h2>${otp.value}`;

    Email.send({
        SecureToken : "9f74fc1f-75a9-452a-9c7a-454b9ee8d9ee",
        To : email.value,
        From : "gunathilakec122@gmail.com",
        Subject : "OTP Verification",
        Body : emailBody,
    }).then(
      message => {
        if (message === "OK"){
            alert("An OTP is sent to your emai-> " + email.value);

            if(otpDiv.classList.contains("visually-hidden")){
                otpDiv.classList.replace("visually-hidden","d-flex");
                const otpInput = document.getElementById("otpInput");
                const btnVerify = document.getElementById("btnVerify");

                btnVerify.addEventListener('click',() => {
                    if(otpInput.value == otp){
                        alert("OTP verification successful..");
                    }else{
                        alert("Invlaid OTP!");
                    }
                })
            }
        }
      }
    );
    
}