import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Mainbody from './components/Mainbody'
import './App.css'

function App() {


  return (
<>
<div className='bg-slate-400 h-[100vh] '>
<Navbar/>
<Mainbody/><div className='fixed bottom-0 w-[100%]'><Footer/></div>

</div>
</>
  )
}

export default App
