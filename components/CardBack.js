import { useState } from "react";

export default function CardBack() {
    const [securityCode,  setSecurityCode] = useState("000")

    return (
        <>
            <article className="absolute top-96 pl-10">
                <p className="text-white absolute right-7 font-bold tracking-widest">{securityCode}</p>
            </article>

            <style jsx>{`
                article {
                    right: -200px;
                    width:  400px;
                    height: 200px;
                    background: url('bg-card-back.png') center;
                    border-radius: 10px;
                }    

                p {
                    top: 85px;
                }

            `}</style>
        </>
    )
}