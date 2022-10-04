import React, { useState } from "react";
import { DropdownProvider, useDropdown } from "../../contexts/dropdownContext";
import List from "./List";
import Select from "./Select";

const Dropdown = ({ placeholder, children, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full mt-3">
        <Select placeholder={placeholder}></Select>
        <List>{children}</List>
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
