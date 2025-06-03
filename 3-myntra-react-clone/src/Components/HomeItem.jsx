import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({item})=>{
    const dispatch = useDispatch();
    const bagData = useSelector((state)=> state.bag);
    let isPresent = false;
    for(let i=0;i<bagData.length;i++){
        if(bagData[i] == item){
            isPresent = true;
        }
    }
    const handleAddingToBag = (item) => {
        if(isPresent){
            dispatch(bagActions.deleteItem(item));
        }
        else{
            dispatch(bagActions.addItem(item));
        }
    };    
    
    return <>
        <div className="item-container">
        <img className="item-image" src={item.image} alt="item image"/>
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {isPresent?<button className="btn-add-bag btn btn-danger" onClick={()=> handleAddingToBag(item)}>Remove</button> : <button className="btn-add-bag btn btn-success" onClick={()=> handleAddingToBag(item)}>Add to Bag</button> }
        </div>
    </>
}
export default HomeItem;