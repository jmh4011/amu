import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function SearchBar({ value, onChange, handleSearch, onClearSearch }) {
  return (
    <div className="w-80 flex items-center px-4 bg-black rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-black py-[11px] outline-none "
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="text-white cursor-pointer hover:text-slate-500"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
