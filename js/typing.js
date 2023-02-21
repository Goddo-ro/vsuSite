const typing_element = document.getElementById('typing');

let i = 0;
const text = 'Frontend Developer...';
const speed = 120;

function typeWriter() {
  if (i < text.length) {
    typing_element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
