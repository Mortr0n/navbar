import './App.css';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';

function App() {
  return (
    <Wrapper className="wrapper">
      <Navbar/>
      <FormWrapper />
    </Wrapper>
  );
}

export default App;
