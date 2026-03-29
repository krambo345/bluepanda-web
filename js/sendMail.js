let msgs;
let msgf;

document.addEventListener("DOMContentLoaded", () => {
    msgs = document.getElementById("msg-s");
    msgf = document.getElementById("msg-f");
});
function sendMail() {
    let params = {
      name: document.getElementById("userName").value,
      email: document.getElementById("email_id").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };
  
    // First email sending to the user.
    emailjs.send("service_s8dhxmj","template_lappwjh", params)
      .then((res) => {
        // If the first email is successful, send the form email to bluepandaremodeling.
        return emailjs.send("service_s8dhxmj","template_4ihjr2c", params);
      })
      .then(() => {
        msgs.innerHTML = "Form submitted successfully.";
        msgf.innerHTML = "";
      })
      .catch((error) => {
        // Handle errors if either of the emails fail
        console.error("Error sending email:", error);
        msgs.innerHTML = "";
        msgf.innerHTML = "An error occured, please check the form and try again.";
      });
  }
  
