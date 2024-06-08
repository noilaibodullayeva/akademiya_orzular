import './App.css';
import BestSelling from './components/BestSelling';
import History from './components/History';
import Published from './components/Published';
import Week from './components/Week';

function App() {
  return (
    <div className="App">
      <BestSelling/>
      <Week/>
      <Published/>
      <History/>
    </div>
  );
}

export default App;
