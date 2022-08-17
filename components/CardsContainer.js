import CardBack from "./CardBack"
import CardFront from "./CardFront"


export default function CardsContainer() {
    return (
        <>
            <article className="relative">
                <div></div>
                <CardFront />
                <CardBack />
            </article>
            <style jsx>{`
                div {
                    background: url('bg-main-desktop.png') no-repeat;
                    background-size: cover;
                    width: 500px;
                    height: 100vh;
                }
            `}</style>
        </>
    )
}