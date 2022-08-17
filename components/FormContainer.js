import { changeName, changeMonth, changeExpiringYear, changeCardCode, changeCardNumber } from "../store/reducers/cardData";
import { useDispatch } from "react-redux";



export default function FormContainer() {
    const dispatch = useDispatch();

    const handleName = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handleMonth = (e) => {
        dispatch(changeMonth(e.target.value))
    }

    const handleCardNumber = (e) => {
        dispatch(changeCardNumber(e.target.value))
    }

    const handleYear = (e) => {
        dispatch(changeExpiringYear(e.target.value))
    }

    const handleCardCode = (e) => {
        dispatch(changeCardCode(e.target.value))
    }

    return (
        <>
            <form className="mt-32 mx-auto">
                <div className="">
                    <label className="uppercase font-bold block">Cardholder name</label>
                    <input type="text" className="w-full" onChange={handleName} />
                </div>
                <div className="mt-5">
                    <label className="uppercase font-bold block">Card number</label>
                    <input type="text" className="w-full" maxLength={16} onChange={handleCardNumber} />
                </div>
                <div className="input-container mt-5">
                    <div className="mr-6">
                        <label className="uppercase font-bold block">EXP. DATE (MM/YY)</label>
                        <div className="flex expiration-container">
                            <input type="text" className="w-full" onChange={handleMonth} maxLength={2} />
                            <input type="text" className="w-full ml-2" onChange={handleYear} maxLength={2} />
                        </div>
                    </div>
                    <div>
                        <label className="uppercase font-bold block">CVC</label>
                        <input type="text" onChange={handleCardCode} className="w-full" maxLength={3} />
                    </div>
                </div>
                <button className="text-white py-2 w-full mt-5 rounded-md font-bold">Confirm</button>

            </form>
            <style jsx>{`
                form  {
                    width: 350px;
                }

                button {
                    font-size: 14px;
                }

                label {
                    color: hsl(279, 6%, 55%);
                    font-size: 12px;
                }

                input {
                    border: 1px solid #ccc;
                    border-radius: 3px;
                }

                button {
                    background: hsl(278, 68%, 11%);
                }

                .input-container {
                    display: flex;
                }

                .expiration-container {
                    width: 150px;
                }
            `}</style>
        </>
    )
}