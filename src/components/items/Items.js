import React, {useState, useEffect} from 'react';

function Items() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const auth_key = 'e4bf7f0bb316a8ed430fdcf11384c0ef';
        const url = "https://fortnite-api.theapinetwork.com/upcoming/get";
        const data = await fetch(url, { headers: { 'Authorization': auth_key } });
        const resp = await data.json();
        setItems(resp.data);
    };

    return(
        <div>
            <h1>Items List</h1>
            {items.map((item) => ( 
                <h1 key={item.itemId}>{item.item.name}</h1>        
            ))}
        </div>
    );
}

export default Items;