// Efeito de digitação no header
const textoDigitado = "Desenvolvedor apaixonado por criar soluções inovadoras";
const elementoTexto = document.querySelector('header p');
let index = 0;

function digitar() {
  if (index < textoDigitado.length) {
    elementoTexto.textContent += textoDigitado.charAt(index);
    index++;
    setTimeout(digitar, 50); // Velocidade da digitação
  }
}

digitar();

// Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animação ao rolar a página
ScrollReveal().reveal('header', { delay: 300, duration: 1000, distance: '50px', origin: 'top' });
ScrollReveal().reveal('#sobre', { delay: 300, duration: 1000, distance: '50px', origin: 'left' });
ScrollReveal().reveal('#projetos', { delay: 300, duration: 1000, distance: '50px', origin: 'right' });
ScrollReveal().reveal('#contato', { delay: 300, duration: 1000, distance: '50px', origin: 'bottom' });