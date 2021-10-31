import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBtn.scss'
import { CgProfile, CgCrown } from 'react-icons/cg'
import { MdOutlineAnalytics, MdOutlineMonetizationOn } from 'react-icons/md'
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'

export default function NavBtn({navText, btnStatus}) {
    const [icon,setIcon] = useState(null);

    useEffect(()=>{
        switch(navText){
            case 'My Page':
                setIcon(1);
                break;
            case 'Monetize':
                setIcon(2)
                break;
            case 'Analytics':
                setIcon(3);
                break;
            case 'Earnings':
                setIcon(4);
                break;
            case 'Referrals':
                setIcon(5);
                break;
            case 'Settings':
                setIcon(6);
                break;
            default:
                setIcon(null)
    
        }
        console.log(navText);
    },[navText])
    return (
        <Link to='/' className={`btn-nav ${btnStatus}`}>
            {
                icon === 1 ?
                <CgProfile/> 
                :(icon === 2) ?
                    <CgCrown/> 
                    :(icon === 3) ?
                        <MdOutlineAnalytics/> 
                        :(icon === 4) ?
                            <MdOutlineMonetizationOn/> 
                            :(icon === 5) ?
                                <BsEmojiSmile/>
                                    :(icon === 6) ?
                                        <AiOutlineSetting/> 
                                            :null
            }
            <span>{navText}</span>
        </Link>
    )
}
