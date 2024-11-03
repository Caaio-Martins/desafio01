import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); // Novo estado

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setIsResultDisplayed(false); // Limpa o estado após limpar
  };

  const handleAddNumber = (num) => {
    // Se o resultado foi exibido, inicia uma nova equação
    if (isResultDisplayed) {
      setCurrentNumber(num);
      setFirstNumber('0'); // Reseta o primeiro número para a nova operação
      setOperation('');
      setIsResultDisplayed(false); // Reseta o estado de resultado exibido
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }
  };

  const handleAddDecimal = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber(prev => `${prev === '0' ? '0.' : prev + '.'}`);
    }
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0'); // Zera o primeiro número após a operação
      setOperation('');
      setIsResultDisplayed(true); // Marca que o resultado foi exibido
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const difference = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(difference));
      setFirstNumber('0'); // Zera o primeiro número após a operação
      setOperation('');
      setIsResultDisplayed(true); // Marca que o resultado foi exibido
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const product = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(product));
      setFirstNumber('0'); // Zera o primeiro número após a operação
      setOperation('');
      setIsResultDisplayed(true); // Marca que o resultado foi exibido
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const quotient = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(quotient));
      setFirstNumber('0'); // Zera o primeiro número após a operação
      setOperation('');
      setIsResultDisplayed(true); // Marca que o resultado foi exibido
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." onClick={handleAddDecimal} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
