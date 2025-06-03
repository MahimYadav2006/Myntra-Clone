import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import { useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
function Bag(){
    const bagData = useSelector((state) => state.bag);
    return (
        <>
            <main>
            <div className="bag-page">
                {bagData.map((item) => (
                    <BagItem key={item.id} item={item}></BagItem>
                ))}
                <BagSummary></BagSummary>
            </div>
            </main>
        </>
    );
}

export default Bag;