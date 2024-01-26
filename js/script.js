function desativateOpenResponses(id) {
  var response = document.querySelector(".response-" + id);
  var question = document.querySelector(".question-" + id);
  var seta = document.querySelector(".seta-" + id);

  response.style.maxHeight = "0";
  response.style.padding = "0 35px";
  question.style.backgroundColor = "var(--color-yellow)";
  question.style.color = "black";
  seta.style.boxShadow =
    "2px -2px 0 0.5px var(--color-red) inset";
  seta.style.transform = "rotate(-45deg)";
}

function openResponse(id) {
  var response = document.querySelector(".response-" + id);
  var question = document.querySelector(".question-" + id);
  var seta = document.querySelector(".seta-" + id);

  for (let i = 1; i <= 7; ++i) {
    //fecha as respostas que estão abertas
    if (id != i) {
      desativateOpenResponses(i);
    }
  }

  if (response.style.maxHeight === "300px") {
    // esta aberto
    response.style.maxHeight = "0";
    response.style.padding = "0 35px";
    question.style.backgroundColor = "var(--color-yellow)";
    question.style.color = "black";
    seta.style.boxShadow =
      "2px -2px 0 0.5px var(--color-red) inset";
    seta.style.transform = "rotate(-45deg)";
  } else {
    // esta fechado
    response.style.maxHeight = "300px";
    response.style.padding = "20px 35px";
    question.style.backgroundColor = "red";
    question.style.color = "white";
    seta.style.boxShadow = "2px -2px 0 0.5px white inset";
    seta.style.transform = "rotate(135deg)";
  }
}

function openDropdownResponse() {
  var response = document.querySelector(".dropdown");

  if (response.style.display === "flex") {
    response.style.display = "none";
  } else {
    response.style.display = "flex";
  }
}
