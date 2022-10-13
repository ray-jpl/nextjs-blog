import { useEffect, useState } from 'react';


export default function Age() {
    const [age, setAge] = useState("0");

    useEffect(() => {
        const interval = setInterval(() => {
            let curAge:number = (new Date().getTime() - new Date("2001-11-25").getTime()) / (1000 * 60 * 60 *24 * 365.25)
            setAge(curAge.toString().substring(0,13))
        }, 50);
        return () => {
            clearInterval(interval)
        }
    }, [])
    
    return(
        <span>{age}</span>
    )
}