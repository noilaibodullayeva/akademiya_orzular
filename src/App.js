import './App.css';
import BestSelling from './components/BestSelling';
import History from './components/History';
import Published from './components/Published';
import Week from './components/Week';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BestSelling/>
      <Week/>
      <Published/>
      <History/>
      <Footer/>
      <p className='bg-[#FEF4F4] text-black text-center py-[40px] font-semibold'>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Colorlib</p>
    </div>
  );
}

export default App;
