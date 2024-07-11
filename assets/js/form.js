// function sendMail(event) {
//     event.preventDefault();

//     // Get input values
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;

//     // Check if required fields are filled
//     if (!name || !email || !subject || !message) {
//         alert("Please fill in all the required fields.");
//         return; // Stop the function if fields are missing
//     }

//     // Prepare the email parameters
//     var params = {
//         name: name,
//         email: email,
//         subject: subject,
//         message: message
//     };

//     const serviceID = "service_dbch618";
//     const templateID = "template_w12z4kx";

//     emailjs.send(serviceID, templateID, params)
//         .then(res => {
//             // Clear the input fields
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("subject").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Your message was sent successfully. Thank you!");
//         })
//         .catch(err => console.log(err));
// }

function sendMail(event) {
  event.preventDefault();

  // Get input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Check if required fields are filled
  if (!name || !email || !subject || !message) {
    Toastify({
      text: "Please fill in all the required fields.",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
    }).showToast();
    return; // Stop the function if fields are missing
  }

  // Prepare the email parameters
  var params = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  const serviceID = "service_dbch618";
  const templateID = "template_w12z4kx";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Clear the input fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      Toastify({
        text: "Your message was sent successfully. Thank you!",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
    })
    .catch((err) => {
      console.log(err);
      Toastify({
        text: "An error occurred. Please try again later.",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
      }).showToast();
    });
}
