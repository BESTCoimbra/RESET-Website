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

  for (let i = 1; i <= 8; ++i) {
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
    response.style.padding = "15px 35px 0";
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

const navbarPhone = document.querySelector(".options-phone");
const optionsPhone = document.querySelectorAll('.nav-option2');

var btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.classList.add('not-active');
    navbarPhone.style.display = "none";
  } else {
    this.classList.remove('not-active');
    this.classList.add('active');
    navbarPhone.style.display = "flex";
  }
});

optionsPhone.forEach(option => {
  option.addEventListener('click', function() {
    console.log('atão');
    btn.classList.remove('active');
    btn.classList.add('not-active');
    navbarPhone.style.display = "none";
  });
});

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
      'z-index': '1',
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

document.addEventListener('DOMContentLoaded', (event) => {
  const navbar = document.querySelector('header .nav');
  navbar.classList.add('nav-on-transparent');
  const yellowSections = document.querySelectorAll('.team, .categorias-horario');

  const onScroll = () => {
    let isNavbarInHeader = false
    let isNavbarOnYellow = false;

    yellowSections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + navbar.offsetHeight*2;

      if (window.scrollY < 50) {
        isNavbarInHeader = true;
      }
      else if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        isNavbarOnYellow = true;
      }
    });

    if (isNavbarInHeader) {
      navbar.classList.add('nav-on-transparent');
      navbar.classList.remove('nav-default');
      navbar.classList.remove('nav-on-yellow');
    } else if (isNavbarOnYellow) {
      navbar.classList.add('nav-on-yellow');
      navbar.classList.remove('nav-default');
      navbar.classList.remove('nav-on-transparent');
    } else {
      navbar.classList.add('nav-default');
      navbar.classList.remove('nav-on-yellow');
      navbar.classList.remove('nav-on-transparent');
    }
  };

  window.addEventListener('scroll', onScroll);
});
