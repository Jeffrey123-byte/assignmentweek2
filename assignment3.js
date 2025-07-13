function fun(event){
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const choice = document.getElementById("choice").value;
  const textarea = document.getElementById("comments").value;

  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const formData = {
    Name: name,
    Email: email,
    Choice: choice,
    Comments: textarea
  };

  localStorage.setItem("formData", JSON.stringify(formData));

  console.log("Form Data as Object:", formData);

  document.getElementById("print").innerText = 
    `Hello ${formData.Name}, your email is ${formData.Email}, you chose ${formData.Choice}, and your comment was: "${formData.Comments}".`;

    const submissions = [];
submissions.push(formData);
console.log("All Submissions:", submissions);

}
