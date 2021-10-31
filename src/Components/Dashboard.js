import React, { useContext } from 'react'
import Header from './Header/Header'
import "./Dashboard.scss"
import Navbar from './Navbar/Navbar'
import ContentSection from './Content Section/ContentSection'
import Preview from './Preview Section/Preview'
import { EssentialContext } from '../Assets/EssentialContext'

export default function Dashboard() {
    const [toggles,setToggles] = useContext(EssentialContext)
    return (
        <div className="dashboard">
            <Header/>
            <Navbar/>
            {
                !toggles.preview&& !toggles.nav?
                <ContentSection/>:null
            }
            <Preview/>
        </div>
    )
}
