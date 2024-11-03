import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: none; /* Remove a borda padrão */
    border-radius: 10px; /* Bordas arredondadas */
    background-color: #005f99; /* Azul mais escuro para o botão */
    color: #F0F0F0; /* Cor do texto em cinza claro */
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para profundidade */
    transition: background-color 0.3s ease, transform 0.1s ease; /* Transições suaves */

    &:hover {
        background-color: #004080; /* Azul ainda mais escuro ao passar o mouse */
        opacity: 0.9; /* Reduz a opacidade levemente */
    }

    &:active {
        background-color: #333; /* Fundo cinza ao clicar */
        transform: translateY(2px); /* Simula a pressão do botão */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra reduzida ao clicar */
    }
`;
