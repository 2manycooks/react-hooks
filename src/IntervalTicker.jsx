import { useEffect, useState } from "react";

export default function IntervalTicker(props) {

    const tick = () => {console.log(props.message)}

    useEffect(() => {
        let messageInterval = setInterval(tick, 1000)

        // the final and third part of useEffect is a return statement for anything we want to happen when the component unmounts.
        return () => {
            console.log('ticker unmounting')
            clearInterval(messageInterval)
        }
    })

    return(
        <>
            <em>pssssst..... check the console for some interval action</em>
        </>
    )
}