import './App.css'
import Countries from './countries/Countries'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Footer from './components/Footer/Footer'
import CountryDetails from './CountryDetails/CountryDetails'
import { CountryProvider } from './context'

function App() {
  return (
    <CountryProvider>
      <Router>
        <div>
          <Navbar />
          <Routes >
            <Route exact path="/" element={<Countries />} />
            <Route path="/country/:id" element={<CountryDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CountryProvider>
  )
}

export default App
