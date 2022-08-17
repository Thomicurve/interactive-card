import Image from "next/image"
import CardLogo from "../public/card-logo.svg"
import { useSelector, useDispatch } from "react-redux";
import { changeCardNumber } from "../store/reducers/cardData";

export default function CardFront() {
    const { cardName, expiringMonth, expiringYear, cardNumber } = useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <>
            <article className="absolute top-36 pl-10">
                <div className="pt-5">
                    <Image src={CardLogo} width={50} height={27} />
                </div>
                <div className="mt-16 text-white tracking-wider">
                    <div className="cardNumbers-container pl-3">
                        {   
                            cardNumber.length <= 0 ? 
                            dispatch(changeCardNumber("0000000000000000")) :
                            Array.from(cardNumber).map((num, index) => {
                                const result = Number.isInteger(((index+1) / 4));
                                return <p key={num + index} className={`inline-block ${result ? 'mr-5' : ''}`}>{num}</p>
                            })
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