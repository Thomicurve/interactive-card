import { changeName } from "../store/reducers/cardData";
import { useDispatch } from "react-redux";

export default function Form() {
    const dispatch = useDispatch();

    const handleName = (e) => {
        dispatch(changeName(e.value));
    }

    return (
        <>
            <form>
                <div>
                    <label className="uppercase text-gray-500">Cardholder name</label>
                    <input type="text" onChange={handleName} />
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