import Image from "next/image"
import backgroundDesktop from '../public/bg-main-desktop.png'
import CardBack from "./CardBack"
import CardFront from "./CardFront"


export default function CardsContainer () {
    return (
        <>
            <article className="relative">
                <Image src={backgroundDesktop} width={450} height={700}/>
                <CardFront/>
                <CardBack/>
            </article>
            <style jsx>{`

            `}</style>
        </>
    )
}