"use client";
import Lenis from 'lenis'
import { createContext,useContext,useEffect,useState } from 'react';

const SmoothScrollerContext = createContext();
export const useSmoothScroller = () => useContext(SmoothScrollerContext);

export default function SmoothScrollerProvider ({children}) {
    const [lenisRef, setLenis] = useState(null);
    const [refState, setRef] = useState(null);

    useEffect(() => {
       const scroller = new Lenis();
       let rf;
       function raf(time){
        scroller.raf(time);
        requestAnimationFrame(raf);
       }
       rf=requestAnimationFrame(raf);
       setRef(rf);
       setLenis(scroller);

       return()=>{
        if(lenisRef) {
            cancelAnimationFrame(refState);
            lenisRef.destroy();
        }
       }
    }, [])

    return<SmoothScrollerContext.Provider value={{lenisRef}}>
        {children}
        </SmoothScrollerContext.Provider>
    
}