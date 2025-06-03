import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice"; 
import { itemsActions } from "../store/itemsSlice";

const FetchItems = () => {
    const fetchStatus = useSelector((state) => state.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) {
            return;
        }
        const container = new AbortController();
        const signal = container.signal;
        dispatch(fetchStatusActions.markFetchingStarted());
        fetch("http://localhost:8080/items", { signal })
            .then((res) => res.json())
            .then(({items}) => {
                dispatch(itemsActions.addInitialItems(items));
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(fetchStatusActions.markFetchingDone());
            })
            .catch((err) => console.error("Fetch error:", err));

        return () => {
            container.abort();
        };
    }, [fetchStatus, dispatch]);

    return (
        <>
        </>
    );
};

export default FetchItems;
