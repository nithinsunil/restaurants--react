import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <main className="p-3">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/restaurants/:id' element = {<RestaurantDetails/>} />
      </Routes>
    </main>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
