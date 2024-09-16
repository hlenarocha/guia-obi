function formValidator() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  if (name === "" || email === "" || comment === "") {
    alert("Por favor, preencha todos os campos antes de enviar o comentário.");
  } else if (!validityEmail(email)) {
    alert("Por favor, preencha o campo com um e-mail válido.");
  }
  displayComment(name, comment);

}

function validityEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function displayComment(name, comment) {
  const commentsDiv = document.getElementById("comments");
  const newComment = document.createElement("p"); // cria novo elemento
  newComment.innerHTML = `<strong>${name}:</strong> ${comment}`; // layout do comentário
  commentsDiv.appendChild(newComment);
}