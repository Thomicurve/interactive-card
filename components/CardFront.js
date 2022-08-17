import Image from "next/image"
import CardLogo from "../public/card-logo.svg"
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CardFront() {
    const [cardNumbers, setCardNumbers] = useState([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
    const { cardName, expiringMonth, expiringYear } = useSelector(state => state)


    return (
        <>
            <article className="absolute top-36 pl-10">
                <div className="pt-5">
                    <Image src={CardLogo} width={50} height={27} />
                </div>
                <div className="mt-16 text-white tracking-wider">
                    <div className="cardNumbers-container">
                        {
                            cardNumbers.map(num => (
                                num.map((n, index) => <p key={n + index} className={`inline-block ${index == 3 && 'mr-5'}`}>{n}</p>)
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-between mt-3 uppercase">
                        <p className="usernameText">{cardName.length <= 0 ? "Fullname" : cardName}</p>
                        <div className="mr-7">
                            <p>
                                {expiringMonth.length <= 0 ? '00' : expiringMonth}/
                                {expiringYear.length <= 0 ? '00' : expiringYear}
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <style jsx>{`
                article {
                    right: -100px;
                    width:  400px;
                    height: 200px;
                    background: url('bg-card-front.png');
                    border-radius: 10px;
                }    
                .usernameText {
                    font-size: 12px;
                }

                .cardNumbers-container {
                    font-size: 26px;
                }

            `}</style>
        </>
    )
}