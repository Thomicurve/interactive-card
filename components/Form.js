import { changeName, changeMonth, changeExpiringYear, changeCardCode } from "../store/reducers/cardData";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Form() {
    const dispatch = useDispatch();

    const handleName = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handleMonth = (e) => {
        dispatch(changeMonth(e.target.value))
    }

    const handleYear = (e) => {
        dispatch(changeExpiringYear(e.target.value))
    }

    const handleCardCode = (e) => {
        dispatch(changeCardCode(e.target.value))
    }

    return (
        <>
            <form>
                <div>
                    <label className="uppercase text-gray-500">Cardholder name</label>
                    <input type="text" onChange={handleName} />
                </div>
                <div>
                    <label className="uppercase text-gray-500">Card number</label>
                    <input type="text" onChange={handleCardCode} />
                </div>
                <div>
                    <div>
                        <label className="uppercase text-gray-500">EXP. DATE (MM/YY)</label>
                        <input type="text" onChange={handleMonth} maxLength={2} />
                        <input type="text" onChange={handleYear} maxLength={2} />
                    </div>
                    <div>
                        <label className="uppercase text-gray-500">CVC</label>
                        <input type="text" onChange={handleCardCode} maxLength={3} />
                    </div>
                </div>

            </form>
            <style jsx>{`
                input {
                    border: 1px solid #ccc;
                    border-radius: 3px;
                }
            `}</style>
        </>
    )
}