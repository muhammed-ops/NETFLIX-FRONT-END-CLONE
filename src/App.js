import Header from './header';
import Body from './body';
import Recentlyadded from './recently added'
import './App.css';
import pic1 from './top boy.jpg'
import pic2 from './me time.jpg'
import pic3 from './bullettrain.jpg'
import pic4 from './squidgame.jpg'
import Tvshows from './Tvshows';
import pic5 from './strangerthings.jpg'
import pic6 from './elite.jpg'
import pic7 from './moneyheist.jpg'
import pic8 from './sexeducation.jpg'
import Mylist from './Mylist.js';
import pic9 from './brotherhood.jpg'
import pic10 from './farfromhome.png'
import pic11 from './sugarrush.jpg'
import pic12 from './chiefdaddy.jpg'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Recentlyadded title='Recently Added' image = {pic1} />
      <Recentlyadded title='.' image = {pic2} />
      <Recentlyadded title='.' image = {pic3} />
      <Recentlyadded title='.' image = {pic4} />
      <Tvshows title='Tv Shows' image = {pic5} />
      <Tvshows title='.' image = {pic6} />
      <Tvshows title='.' image = {pic7} />
      <Tvshows title='.' image = {pic8} />
      <Mylist title='My List' image = {pic9} />
      <Mylist title='.' image = {pic10} />
      <Mylist title='.' image = {pic11} />
      <Mylist title='.' image = {pic12} />
      <Footer/>
      
    </div>
  );
}

export default App;
