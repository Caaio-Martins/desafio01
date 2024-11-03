import { InputContainer } from './styles';

const Input = ({ value }) => {
    return (
        <InputContainer>
            <input type="text" value={value} readOnly /> {/* Utiliza a prop value */}
        </InputContainer>
    );
}

export default Input;
  