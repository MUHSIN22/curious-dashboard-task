import React, { useEffect, useState } from 'react'
import './ContentSection.scss';
import OptionList from './Option list/OptionList';
import { BsChevronCompactDown } from 'react-icons/bs'

export default function ContentSection() {
    const [isSecondOption, setIsSecondOption ] = useState(false);
    
    useEffect(()=>{
        checkSreenAndEnableSection()
    },[])

    const checkSreenAndEnableSection = () =>{
        if(window.innerWidth <= 1000){
            setIsSecondOption(true)
        }
    }

    window.addEventListener('resize',()=>{
        checkSreenAndEnableSection()
    })

    let addBlock = [
        {
            option_name: "Custom Link",
            option_icon: "custom-link.svg",
            icon_bg: "rgb(242, 241, 255) none repeat scroll 0% 0%"
        },
        {
            option_name: "Mailing List",
            option_icon: "mailing-list.svg",
            icon_bg: "rgb(231, 253, 245) none repeat scroll 0% 0%"
        },
        {
            option_name: "Link Your Socials",
            option_icon: "social.svg",
            icon_bg: "rgb(237, 251, 255) none repeat scroll 0% 0%"
        },
        {
            option_name: "Text",
            option_icon: "text.svg",
            icon_bg: "rgb(252, 240, 223) none repeat scroll 0% 0%"
        },
        {
            option_name: "Music/Podcast Preview",
            option_icon: "music.svg",
            icon_bg: "rgb(242, 245, 255) none repeat scroll 0% 0%"
        },
        {
            option_name: "Video Preview",
            option_icon: "video.svg",
            icon_bg: "rgb(255, 243, 240) none repeat scroll 0% 0%"
        },
        {
            option_name: "Product",
            option_icon: "product.svg",
            icon_bg: "rgb(232, 252, 246) none repeat scroll 0% 0%"
        }
    ]
    let monetizableBlock = [
        {
            option_name: "Livestreams",
            option_icon: "live-stream.svg",
            icon_bg: "rgb(255, 238, 242) none repeat scroll 0% 0%",
        },
        {
            option_name: "Shoutouts/Q&As",
            option_icon: "shoutout.svg",
            icon_bg: "rgb(254, 248, 212) none repeat scroll 0% 0%",
        },
        {
            option_name: "Exclusive content",
            option_icon: "content.svg",
            icon_bg: "rgb(243, 238, 255) none repeat scroll 0% 0%",
        },
        {
            option_name: "Tipping",
            option_icon: "tip.svg",
            icon_bg: "rgb(255, 245, 247) none repeat scroll 0% 0%",
        },
    ]
    return (
        <section className="content-section">
            <div className="option-list-wrapper">
                <OptionList options={addBlock} head="Add Block" speciality="over-scrollable"/>
                {
                    isSecondOption && 
                    <OptionList options={monetizableBlock} head="Monetizable Block" list="option-bottom-list"/>
                }
                <div className="drop-icon-wrapper" onClick={()=>setIsSecondOption(!isSecondOption)}>
                    <BsChevronCompactDown className={isSecondOption&&"tilt-up"}/>
                </div>
            </div>
            <div className="add-bio-section">
                <p className="bio-header">Page header</p>
                <div className="add-bio">
                    <div className="avatar">
                        <img src="/images/profile.svg" alt="" />
                    </div>
                    <div className="bio-content">
                        <strong>Add Your Bio</strong>
                        <p>Profile Pic,Name and Bio</p>
                    </div>
                </div>
            </div>
            <div className="add-block-section">
                <img src="/images/blocks.svg" alt="" />
                <strong>Add your first block</strong>
                <p>Start creating your page by adding blocks.</p>
            </div>
        </section>
    )
}
