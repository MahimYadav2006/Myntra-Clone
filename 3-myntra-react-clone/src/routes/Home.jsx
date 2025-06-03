import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

const Home = ()=>{
    const items = useSelector((state)=>state.items);
    return <>
        <main>
            <div className="items-container">
                {items.map((item)=>{
                    return <HomeItem key={item.id} item={item} />
                })}
            </div>
        </main>
    </>
}

export default Home;