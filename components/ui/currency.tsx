"use client"

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
});

interface CurrencyProps{
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) =>{

    const [isMounted, setIsmounted] = useState(false);

    useEffect(()=>{
        setIsmounted(true)
    }, [])

    if(!isMounted){ return null}

    return(
        <span>
            {formatter.format(Number(value))}
        </span>
    )
}

export default Currency