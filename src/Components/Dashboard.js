import React from 'react'
import Header from './Header/Header'
import "./Dashboard.scss"
import Navbar from './Navbar/Navbar'
import ContentSection from './Content Section/ContentSection'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Header/>
            <Navbar/>
            <ContentSection/>
        </div>
    )
}
