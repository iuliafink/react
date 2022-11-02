// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <p>Color Picker</p>
    <Button></Button>
    <Button></Button>
    <Button></Button>
    {/* sau: <Button /> doar cu closing tag, Button este functia de jos */}
    </>
  );
}

export default App;

function Button() {
  return (
    <button></button>
  )
}