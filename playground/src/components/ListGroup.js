import React from "react";

function ListGroup() {
    let items = ['apples', 'oranges', 'pears', 'bananas'];
    return (
        <div>
            <h1>List Group</h1>
            <ul>
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}

export default ListGroup;