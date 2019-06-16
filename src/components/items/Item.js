import React, {useState, useEffect} from 'react';

function Item({match}) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const auth_key = 'e4bf7f0bb316a8ed430fdcf11384c0ef';
        const url = `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;
        const data = await fetch(url, { headers: { 'Authorization': auth_key } });
        const resp = await data.json();
        console.log(resp);
        setItem(resp.data);
    };

    return(
        <div>
            <h1>{item.item.name}</h1>
        </div>
    );
}

export default Item;