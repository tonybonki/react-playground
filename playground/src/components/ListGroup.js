import React from "react";

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.
import { useState } from "react";

// List group component
function ListGroup() {
  let fruits = ["apples", "oranges", "pears", "bananas"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [fruit, setFruit] = useState("");

  return (
    <div className="w-50 mx-auto">
      <h3>Fruits List</h3>

      {fruit !== "" ? (
        <h5>You clicked {fruit}</h5>
      ) : (
        <h5>Click a fruit</h5>
      )}
      {/* If there are 0 fruits display no fruits available */}
      {fruits.length <= 0 && <p>No Fruits available</p>}

      {/* List group */}
      <ul className="list-group">
        {fruits.map((fruit, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
                setSelectedIndex(index);
              setFruit(fruit);
            }}
            key={fruit}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
