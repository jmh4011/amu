import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <div className="bg-black flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-white py-2">
        <Link to={"/dashboard"}>Notes</Link>
      </h2>

      <SearchBar
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
