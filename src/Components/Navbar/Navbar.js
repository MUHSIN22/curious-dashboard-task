import React, { useContext, useEffect } from 'react'
import NavBtn from './Nav btn/NavBtn'
import './Navbar.scss'
import {BsMoon} from 'react-icons/bs'
import { EssentialContext } from '../../Assets/EssentialContext'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function Navbar() {
    const [toggles,setToggles] = useContext(EssentialContext)
    console.log(toggles);

    useEffect(()=>{
        console.log(toggles.dark);
        if(toggles.dark){
            document.documentElement.setAttribute("data-theme","dark")
        }else{
            document.documentElement.setAttribute("data-theme","")
        }
    },[toggles])
    return (
        <nav className={toggles.nav?"navbar navbar-visible":"navbar"}>
            <div className="logo-wrapper">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.97289 2.1975C10.8352 0.335209 13.8545 0.335209 15.7168 2.1975L15.9214 2.40204L16.1259 2.1975C17.9882 0.335209 21.0076 0.335209 22.8699 2.1975C24.7322 4.05979 24.7322 7.07915 22.8699 8.94144L15.9214 15.8899L8.97289 8.94144C7.1106 7.07915 7.1106 4.05979 8.97289 2.1975Z" fill="var(--tint-text-color)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.8434 19.2785C27.8434 15.982 26.5054 12.9979 24.3429 10.8398L15.9217 19.261L7.50057 10.8398C5.338 12.9979 4 15.982 4 19.2785C4 22.5706 5.33438 25.5511 7.49179 27.7085L15.9217 19.2785L24.3517 27.7085C26.5091 25.5511 27.8434 22.5706 27.8434 19.2785ZM22.4963 29.2251L15.9217 22.6505L9.34716 29.2251C11.2318 30.4733 13.4919 31.2003 15.9217 31.2003C18.3516 31.2003 20.6116 30.4733 22.4963 29.2251Z" fill="var(--tint-text-color)"></path></svg>
                <AiFillCloseCircle className="cross-mark" onClick={()=>setToggles({...toggles,nav:false})}/>
            </div>
            <NavBtn navText="My Page" btnStatus="btn-nav-active"/>
            <NavBtn navText="Monetize"/>
            <NavBtn navText="Analytics"/>
            <NavBtn navText="Earnings"/>
            <NavBtn navText="Referral"/>
            <NavBtn navText="Settings"/>
            <div className="extra-btn">
                <div className="dark-and-light-toggle" onClick={()=>{setToggles({...toggles,dark: !toggles.dark})}}>
                    <BsMoon/>
                    {toggles.dark?"Ligh Mode":"Dark Mode"}
                </div>
                <NavBtn navText="Logout" />
            </div>
        </nav>
    )
}
