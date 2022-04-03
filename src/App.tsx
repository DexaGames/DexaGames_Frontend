import './App.css';
import Home from './pages/Home/HomePage';
import LandingPage from './pages/LandingPage/LandingPg';

function App() {
  return (
    <div className="App">
        {/* <LandingPage /> */}
      <Home blocks={[
          {heading: 'heading', type: '', url: ''}
        ]} />
        {/* <BasicExample/> */}
    </div>
  );
}

export default App;