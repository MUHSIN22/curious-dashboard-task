import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { MdOutlineDesignServices } from 'react-icons/md'
import { RiLinksFill } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
    return (
        <header className="header">
            <div className="header-mobile">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobile-logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.97289 2.1975C10.8352 0.335209 13.8545 0.335209 15.7168 2.1975L15.9214 2.40204L16.1259 2.1975C17.9882 0.335209 21.0076 0.335209 22.8699 2.1975C24.7322 4.05979 24.7322 7.07915 22.8699 8.94144L15.9214 15.8899L8.97289 8.94144C7.1106 7.07915 7.1106 4.05979 8.97289 2.1975Z" fill="var(--tint-text-color)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.8434 19.2785C27.8434 15.982 26.5054 12.9979 24.3429 10.8398L15.9217 19.261L7.50057 10.8398C5.338 12.9979 4 15.982 4 19.2785C4 22.5706 5.33438 25.5511 7.49179 27.7085L15.9217 19.2785L24.3517 27.7085C26.5091 25.5511 27.8434 22.5706 27.8434 19.2785ZM22.4963 29.2251L15.9217 22.6505L9.34716 29.2251C11.2318 30.4733 13.4919 31.2003 15.9217 31.2003C18.3516 31.2003 20.6116 30.4733 22.4963 29.2251Z" fill="var(--tint-text-color)" ></path></svg>
                <div className="header-btns">
                    <button className="preview-and-copy">Preview</button>
                    <button className="preview-and-copy">Copy</button>
                    <button className="hamburger-btn">
                        <AiOutlineMenu className="hamburger"/>
                    </button>
                </div>
            </div>
            <div className="link-btn-wrapper">
                <Link to="" className="btn-link btn-link-active"><RiLinksFill/> Links</Link>
                <Link to="" className="btn-link"><MdOutlineDesignServices/> Design</Link>
            </div>
            <div className="link-copier">
                <span className="link">https://link.snipfeed.co/muhsin</span>
                <button className="btn btn-copy">Copy</button>
            </div>
        </header>
    )
}
