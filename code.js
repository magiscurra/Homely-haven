function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "akhileshtiss8@gmail.com",
        Password : "magician10",
        To : 'akhileshas4567@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "Name: "+document.getElementById("name").value
            +"<br> Place: "+document.getElementById("Pname").value
            +"<br> Email: "+document.getElementById("lname").value
            +"<br> Ph no: "+document.getElementById("Mname").value
            +"<br> comment: "+document.getElementById("msg").value
    }).then(
      message => alert("Message sent succesfully <br> Thank you for visiting")
    );
}