$(document).ready(function() {
  // Carregar comentários ao inicializar a página
  loadComments();

  $("#commentForm").on("submit", function(event) {
    event.preventDefault(); // Previne o recarregamento da página

    const name = $("#name").val();
    const email = $("#email").val();
    const comment = $("#comment").val();

    formValidator(name, email, comment);
  });
});

function loadComments() {
  $.ajax({
    url: 'https://66e8c4a7b17821a9d9dd9c7c.mockapi.io/obi/comments',
    type: 'GET',
    success: function(response) {
      console.log('Comentários carregados:', response);
      response.forEach(function(commentData) {
        displayComment(commentData.name, commentData.comment);
      });
    },
    error: function(xhr, status, error) {
      console.error("Erro ao carregar os comentários:", xhr.responseText);
      alert("Erro ao carregar os comentários: " + xhr.statusText);
    }
  });
}

function formValidator(name, email, comment) {
  if (name === "" || email === "" || comment === "") {
    alert("Por favor, preencha todos os campos antes de enviar o comentário.");
  } else if (!validityEmail(email)) {
    alert("Por favor, preencha o campo com um e-mail válido.");
  } else {
    sendComment(name, email, comment);
  }
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

// mockapi para enviar dados
function sendComment(name, email, comment) {
  const data = {
    name: name,
    email: email,
    comment: comment
  };

  $.ajax({
    url: 'https://66e8c4a7b17821a9d9dd9c7c.mockapi.io/obi/comments',
    type: 'POST',
    data: JSON.stringify(data), // converte o objeto para string JSON
    contentType: "application/json",
    success: function(response) {
      console.log('Comentário adicionado:', response);
      displayComment(name, comment);
      alert("Comentário adicionado com sucesso!");
    },
    error: function(xhr, status, error) {
      console.error("Erro ao enviar o comentário:", xhr.responseText);
      alert("Erro ao enviar o comentário: " + xhr.statusText);
    }
  });
}

