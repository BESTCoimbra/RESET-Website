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

$(function() {
  var originalTop = $("#about-event-prank-button").css('top');
  var originalLeft = $("#about-event-prank-button").css('left');
  var originalPosition = $("#about-event-prank-button").css('position');

  var randomNumBetween = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  $("#about-event-prank-button").on('mouseover', function() {
    $(this).css({
      'position': 'fixed',
      'z-index': '99999',
      'top': randomNumBetween(0, $(window).height() - $(this).outerHeight()) + 'px',
      'left': randomNumBetween(0, $(window).width() - $(this).outerWidth()) + 'px'
    });
  });

  $(window).on('scroll', function() {
    $("#about-event-prank-button").css({
      'position': originalPosition,
      'top': originalTop,
      'left': originalLeft
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const faceButton = document.querySelector('.divider-face-button');
  const faceContainer = document.querySelector('.divider-face-container');
  const containerCoords = document.querySelector('#divider-container');

  faceButton.addEventListener('mousemove', function(e) {
    const mouseCoords = containerCoords.getBoundingClientRect();
    const mouseX = e.pageX - containerCoords.offsetLeft;
    const mouseY = e.pageY - containerCoords.offsetTop;
    
    TweenMax.to(faceButton, 0.3, {
       x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 50,
       y: (mouseY - mouseCoords.height / 2) / mouseCoords.height * 50,
       ease: Power4.easeOut
    });

    TweenMax.to(faceContainer, 0.3, {
       x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 25,
       y: (mouseY - mouseCoords.height / 2) / mouseCoords.height * 25,
       ease: Power4.easeOut
     });
  });

  faceButton.addEventListener('mouseenter', function() {
    TweenMax.to(faceButton, 0.3, {
      scale: 0.975
    });
  });

  faceButton.addEventListener('mouseleave', function() {
    TweenMax.to(faceButton, 0.3, {
      x: 0,
      y: 0,
      scale: 1
    });
    
    TweenMax.to(faceContainer, 0.3, {
      x: 0,
      y: 0,
      scale: 1
    });
  });
});