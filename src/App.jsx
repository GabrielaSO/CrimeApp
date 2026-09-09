import { useState } from 'react'
import Header from './components/Header/header.jsx'
import MapComponent from './components/Map/map.jsx'
import Footer from './components/Footer/footer.jsx'

//import './App.css'

export default function App() {
    return (
    <div>
        <Header />
        <MapComponent />
        <Footer />
    </div>
    )
}
