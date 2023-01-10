
import './css/App.css';
import Register from './composant/register'
import Login from './composant/login'
function App() {
 


  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },]
  return (
    <>
      <Register items ={expenses} />
      <br/>
      <Login items ={expenses} />
    </>
  );
}

export default App;
