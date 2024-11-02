import React from 'react'



/* const ItemsPage = () => {
    const [items, setItems] = React.useState(['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10']);

    const onAddItem = () => {
        setItems([...items, `item${items.length + 1}`]);
    }

    const onRemoveItem = (item) => {
        setItems(items.filter((i) => i !== item));
    }


    return (
        <div>
            <h1>Items Page</h1>
            <button onClick={onAddItem}>Add Item</button>
            {items.map((item) => (
                <div key={item}>{item}
                <button onClick={() => onRemoveItem(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
} */

// useCallback to prevent the re-rendering of the function

const ItemsPage = () => {
    const [items, setItems] = React.useState(['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10']);

    const onAddItem = React.useCallback(() => {
        setItems([...items, `item${items.length + 1}`]);
    }, [items]);

    const onRemoveItem = React.useCallback((item) => {
        setItems(items.filter((i) => i !== item));
    }, [items]);

    return (
        <div>
            <h1>Items Page</h1>
            <button onClick={onAddItem}>Add Item</button>
            {items.map((item) => (
                <div key={item}>{item}
                <button onClick={() => onRemoveItem(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ItemsPage
