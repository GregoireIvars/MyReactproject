import './css/register.css';
import './css/App.css';
// import Expenses from './composant/Expenses';
// import Buttontrain from './composant/Buttontrain';
// import Register from './composant/register'
import Login from './composant/login';
import Header from './composant/header';
function App() {

  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  return (
    <>
    <div>
          <Header />
    </div>
    <div className='App'>
      {/* <Expenses items={expenses} /> */}
  
      <h2>Lets go !</h2>
      <Login />
    </div>
    </>
  );
}

export default App;
