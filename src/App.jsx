import './App.css'
import Home from './components/Home/Home';
// import bgImg from './images/avengers.jpg'

function App() {

  return (
    <div className="bg-[url('./images/avengers.jpg')] w-screen h-screen bg-cover bg-no-repeat text-white">
      <Home></Home>
    </div>
  )
}

export default App
