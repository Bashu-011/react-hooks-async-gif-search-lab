import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([])

    function fetchGifs(input) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=sXC3RS5hJjYcSR8nHxKQWkXDyzYu0p8c&rating=g`)
        .then(response => response.json())
        .then(data => {
            setGifs(data.data.slice(0, 3));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function handleSearch(input) {
        fetchGifs(input);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <GifList gifs={gifs} />
            <GifSearch onSearch={handleSearch} />
        </div>
    );
}

export default GifListContainer;
