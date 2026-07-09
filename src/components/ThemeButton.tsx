"use client"

import { IoMoon, IoMoonOutline, IoSunny, IoSunnyOutline } from 'react-icons/io5'
import { useTheme } from '../hooks/useTheme'
import { WiMoonAltWaningCrescent5 } from 'react-icons/wi'
import { GiMoon } from 'react-icons/gi'
import { CiCloudMoon, CiCloudSun } from 'react-icons/ci'
import { FaMoon, FaRegSun, FaSun } from 'react-icons/fa'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { AnimatePresence, motion } from "motion/react"
import { defaultTransition } from '@/animations'

interface ThemeBtnReduzidoProps {
    size: string
    className?: string
    icones: 'icones-1' | 'icones-2' | 'icones-3' | 'icones-4' | 'icones-5' | 'icones-6'
}
export function ThemeBtnReduzido(props: ThemeBtnReduzidoProps) {
    const { theme, toggleTheme } = useTheme()
    function renderMoonBtn() {
        return (
            <>
                {props.icones === 'icones-1' && <IoMoonOutline size={props.size} />}
                {props.icones === 'icones-2' && <IoMoon size={props.size} />}
                {props.icones === 'icones-3' && <WiMoonAltWaningCrescent5 size={props.size} />}
                {props.icones === 'icones-4' && <GiMoon size={props.size} />}
                {props.icones === 'icones-5' && <FaMoon size={props.size} />}
                {props.icones === 'icones-6' && <CiCloudMoon size={props.size} />}
            </>
        )
    }
    function renderSunBtn() {
        return (
            <>
                {props.icones === 'icones-1' && <IoSunnyOutline size={props.size} />}
                {props.icones === 'icones-2' && <IoSunny size={props.size} />}
                {props.icones === 'icones-3' && <TiWeatherPartlySunny size={props.size} />}
                {props.icones === 'icones-4' && <FaRegSun size={props.size} />}
                {props.icones === 'icones-5' && <FaSun size={props.size} />}
                {props.icones === 'icones-6' && <CiCloudSun size={props.size} />}
            </>
        )
    }
    return (
        <motion.button
            onClick={toggleTheme}
            className="p-3 rounded-full cursor-pointer"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={theme}
                    initial={{
                        opacity: 0,
                        y: 15
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    exit={{
                        opacity: 0,
                        y: -15
                    }}
                    transition={defaultTransition}
                    className="flex"
                >
                    {theme === "light" ? renderSunBtn() : renderMoonBtn()}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    )
}