import React from "react";

// List group component
function ListGroup() {
  let fruits = [];
  return (
    <div>
      <h3>Fruits List</h3>
      {/* If there are 0 fruits display no fruits available */}
      {fruits.length <= 0 && <p>No Fruits available</p>}

      {/* List group */}
      <ul className="list-group">
        {fruits.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
