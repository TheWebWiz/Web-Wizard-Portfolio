import React from "react";
import Card from "../Card/Card";
import SearchBar from "./SearchBar";

function SearchSection() {
    return (
        <div>
            <SearchBar />
            <section>
                {/* create map here */}
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    )
}

export default SearchSection;