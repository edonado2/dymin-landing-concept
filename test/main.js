window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var fadeInText = document.querySelector('.fade-in-text');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    fadeInText.classList.add('show'); // Add the 'show' class when scrolled past a certain point
  } else {
    fadeInText.classList.remove('show'); // Remove the 'show' class when scrolled back up
  }
}
