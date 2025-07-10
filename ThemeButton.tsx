"use client"

import { IoMoon, IoMoonOutline, IoSunny, IoSunnyOutline } from 'react-icons/io5'
import { useTheme } from '../hooks/useTheme'
import { WiMoonAltWaningCrescent5 } from 'react-icons/wi'
import { GiMoon } from 'react-icons/gi'
import { CiCloudMoon, CiCloudSun } from 'react-icons/ci'
import { FaMoon, FaRegSun, FaSun } from 'react-icons/fa'
import { TiWeatherPartlySunny } from 'react-icons/ti'

interface ThemeBtnReduzidoProps{
    size: string
    className?: string
    icones: 'icones-1' | 'icones-2' | 'icones-3' | 'icones-4' | 'icones-5' | 'icones-6'
}
export function ThemeBtnReduzido(props: ThemeBtnReduzidoProps){
    const { theme, toggleTheme } = useTheme()
    function renderMoonBtn(){
        return (
            <>
                {props.icones === 'icones-1' && <IoMoonOutline size={props.size}/>}
                {props.icones === 'icones-2' && <IoMoon size={props.size}/>}
                {props.icones === 'icones-3' && <WiMoonAltWaningCrescent5 size={props.size}/>}
                {props.icones === 'icones-4' && <GiMoon size={props.size}/>}
                {props.icones === 'icones-5' && <FaMoon size={props.size}/>}
                {props.icones === 'icones-6' && <CiCloudMoon size={props.size}/>}
            </>
        )
    }
    function renderSunBtn(){
        return (
            <>
                {props.icones === 'icones-1' && <IoSunnyOutline size={props.size}/>}
                {props.icones === 'icones-2' && <IoSunny size={props.size}/>}
                {props.icones === 'icones-3' && <TiWeatherPartlySunny size={props.size}/>}
                {props.icones === 'icones-4' && <FaRegSun size={props.size}/>}
                {props.icones === 'icones-5' && <FaSun size={props.size}/>}
                {props.icones === 'icones-6' && <CiCloudSun size={props.size}/>}
            </>
        )
    }
    return (
        <button className={`
        p-3 rounded-full cursor-pointer
        text-white light:text-black
        ${props.className}`} 
        onClick={toggleTheme}>
            {theme === 'light'? renderSunBtn():renderMoonBtn()}
        </button>
    )
}