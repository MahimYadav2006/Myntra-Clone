import { useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
const BagSummary = ()=>{
    const bagData = useSelector((state) => state.bag);
    console.log(bagData);
    let bagSummary = {
        totalItem: bagData.length,
        totalMRP: 0,
        totalDiscount: 0,
        finalPayment: 0,
    };
    bagData.forEach((item) => {
        bagSummary.totalMRP += item.original_price;
        bagSummary.totalDiscount += item.original_price - item.current_price;
    });
    bagSummary.finalPayment = bagSummary.totalMRP - bagSummary.totalDiscount + 99;
    return <> 
        <div className="bag-summary mt-0">
            <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items) </div>
            <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{bagSummary.totalMRP}</span>
            </div>
            <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">-₹{bagSummary.totalDiscount}</span>
            </div>
            <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
            </div>
            <hr/>
            <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{bagSummary.finalPayment}</span>
            </div>
        </div>
        <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
        </button> 
        </div>   
    </>
}

export default BagSummary;