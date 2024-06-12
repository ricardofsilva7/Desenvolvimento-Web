document.addEventListener('DOMContentLoaded', function() {
    // Adiciona eventos de clique aos botões
    document.querySelectorAll('.img-button').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);

            // Oculta todas as seções de conteúdo e remove a classe 'active'
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
                setTimeout(() => {
                    section.style.display = 'none';
                }, 500); // Aguarda a transição de opacidade antes de esconder
            });

            // Esconde o texto inicial
            document.getElementById('initialText').style.display = 'none';
            
            document.getElementById('initialText2').style.display = 'none';

            // Exibe apenas a seção de conteúdo correspondente ao botão clicado e adiciona a classe 'active'
            setTimeout(() => {
                targetSection.style.display = 'block';
                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 50); // Aguarda um pequeno intervalo antes de adicionar a classe 'active' para a transição
            }, 500); // Aguarda a transição de opacidade antes de exibir a nova seção
        });

        // Adiciona eventos de mouseover e mouseout para exibir o nome da matéria
        button.addEventListener('mouseover', function() {
            const name = this.getAttribute('data-name');
            this.querySelector('.hover-name').textContent = name;
        });
    });
});
