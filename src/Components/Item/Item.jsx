import React from 'react'

const Item = (props) => {

    const {items, deleteItem} = props;
    let length = items.length;
    const ListItems = length ? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
        ) : (
            <p>There is no item</p>
        )

    return (
        <div className="ListItems">
            <div>
                <span className="name title">List</span>
                <span className="age title">Date</span>
                <span className="action title">Supprimer</span>
            </div>
            {ListItems}
        </div>
    )
}

export default Item ;
