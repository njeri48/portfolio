
function sendEmail(){

    Email.send({
      Host : "smtp.mailtrap.io",
      tsl:"yes",
      ssl:"no",
      port:"2525",
      Username : "a68e0b74e987af",
      Password : "33a25138918f4c",
      To : 'janenjerigthu18@gmail.com',
      From : document.getElementById('email').value,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  
  }