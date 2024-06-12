document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '5px 20px';
            header.querySelector('h1').style.fontSize = '20px';
        } else {
            header.style.padding = '10px 20px';
            header.querySelector('h1').style.fontSize = '24px';
        }
    });

    // Seu código existente...

    const buttons = document.querySelectorAll('.img-botao');
    const sections = document.querySelectorAll('.conteudo-materia');

    const showSection = (targetId) => {
        sections.forEach(section => {
            section.classList.remove('active');
            setTimeout(() => {
                section.style.display = 'none';
            }, 500); // Aguarda a transição de opacidade antes de esconder
        });

        // Esconde o texto inicial
        document.getElementById('textoInicial').style.display = 'none';
        document.getElementById('textoInicial2').style.display = 'none';
        document.getElementById('textoInicial3').style.display = 'none';

        setTimeout(() => {
            const targetSection = document.querySelector(targetId);
            targetSection.style.display = 'block';
            setTimeout(() => {
                targetSection.classList.add('active');
            }, 50); // Aguarda um pequeno intervalo antes de adicionar a classe 'active' para a transição
        }, 500); // Aguarda a transição de opacidade antes de exibir a nova seção
    };

    const handleButtonClick = (event) => {
        const targetId = event.currentTarget.getAttribute('data-target');
        showSection(targetId);
    };

    const handleMouseEnter = (event) => {
        const name = event.currentTarget.getAttribute('data-name');
        const hoverName = event.currentTarget.querySelector('.hover-name');
        hoverName.textContent = name;
        hoverName.classList.add('visible');
    };

    const handleMouseLeave = (event) => {
        const hoverName = event.currentTarget.querySelector('.hover-name');
        hoverName.classList.remove('visible');
    };

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
    });
});
