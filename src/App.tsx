import './App.css';
import Home from './pages/Home/HomePage';
import LandingPage from './pages/LandingPage/LandingPg';
import Numlock from './pages/NumlockPage/Numlock';

function App() {
  return (
    <div className="App">
        {/* <LandingPage /> */}
      {/* <Home blocks={[
          {heading: 'heading', type: '', url: ''}
        ]} /> */}
        <Numlock/>
        {/* <BasicExample/> */}
    </div>
  );
}

export default App;