
function emailVerification() {
    const email = document.getElementById("emailInput");
    const otpDiv = document.getElementsByClassName("otpDiv")[0];

    let otp = Math.floor(Math.random() * 10000);
    let emailBody = `<h2>Your OTP is </h2>${otp}`;
    console.log(otp);
    Email.send({
      SecureToken: "5a7d228c-498c-4f9d-bf30-43af8bb7404a",
      Host: "smtp.elasticemail.com",
      Username: "gunathilakec122@gmail.com",
      Password: "6E437860EC59B4DBB9ACA789ED2BFDF7FEFD",
      To: email.value,
      From: "gunathilakec122@gmail.com",
      Subject: "This is the subject",
      Body: emailBody
  }).then((message) => {
    console.log(message);
            if (message === "OK"){
                alert("An OTP is sent to your email-> " + email.value);

                if(otpDiv.classList.contains("visually-hidden")){
                    document.getElementById("btnRecieve").classList.toggle("visually-hidden");
                    otpDiv.classList.replace("visually-hidden","d-block");
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
    )
}