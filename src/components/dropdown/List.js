import React from "react";
import { useDropdown } from "../../contexts/dropdownContext";

const List = ({ children }) => {
  const { show, setShow } = useDropdown();
  return (
    <>
      {show && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-lg"
          onClick={() => setShow(false)}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default List;
