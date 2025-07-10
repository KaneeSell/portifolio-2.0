"use client"

import { useEffect, useState } from "react"

export function useScrolled(threshold: number = 10){
    const [scrolled, setScrolled] = useState(false) 

    useEffect(()=>{
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[threshold])

    return { scrolled }
}