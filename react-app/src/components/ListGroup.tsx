import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "San Francisco", "Tokyo", "Paris"];
  items = [];

  const getMessage = () => {
    items.length === 0 ? <p>No items Found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage(1)}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
