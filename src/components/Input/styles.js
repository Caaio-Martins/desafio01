import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #003f66; /* Azul escuro para um contraste mais forte */

    display: flex;
    align-items: center;
    justify-content: flex-end;

    border-radius: 10px; /* Bordas arredondadas para um visual mais suave */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra para profundidade */
    
    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #003f66; /* Mesma cor do fundo */
        border: none; /* Remove a borda padrão */
        border-radius: 10px; /* Bordas arredondadas no input */
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #F0F0F0; /* Texto em cinza claro */
        text-align: right; /* Alinha o texto à direita */
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3); /* Sombra interna para dar profundidade */
        transition: background-color 0.3s ease; /* Transição suave para a mudança de cor */

        &:focus {
            outline: none; /* Remove a borda de foco padrão do input */
            background-color: #005f99; /* Muda a cor de fundo ao focar para dar destaque */
        }
    }
`;
