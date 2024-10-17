import './App.css';
import Courses from './components/Courses';
import Ustozlarimiz from './components/ustozlarimiz';
import Header from './components/header';
import HomePageList1 from './components/homePageList1';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePageList1 />
      <Ustozlarimiz />
      <Courses />
      <Header />
    </div>
  );
}

export default App;
