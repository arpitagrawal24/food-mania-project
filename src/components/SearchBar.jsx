import { useState } from "react";

const SearchBar = ({ searchText, onSearchClick, onChange }) => {

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSearchClick();
        }
    };

    return (
        <div className="flex flex-col items-center m-auto min-w-[300px] sm:min-w-[400px] h-[100px] sm:flex-row sm:justify-center">
            <input
                type="text"
                className="p-2 mb-2 text-base rounded-md outline-none basis-[50px] sm:basis-[270px] h-[40px] sm:h-[40px] hover:bg-blue-100 sm:text-xs sm:mb-0 sm:mr-2"
                placeholder="Search"
                value={searchText}
                onChange={onChange}
                onKeyDown={handleKeyPress}
            />
            <button
                className="p-2 mt-2 text-white rounded-md bg-[#DF2E38] hover:bg-gray-500 basis-[50px] sm:basis-[50px] h-[40px] sm:h-[40px] sm:text-xs sm:mt-0 sm:ml-2"
                onClick={onSearchClick}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
