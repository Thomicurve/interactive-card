import { useSelector } from "react-redux";

export default function CardBack() {
    const cardCode = useSelector(state => state.cardCode);

    return (
        <>
            <article className="absolute top-96 pl-10">
                <p className="text-white absolute right-7 font-bold tracking-widest">
                    {cardCode.length <= 0 ? "***" : cardCode}
                </p>
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