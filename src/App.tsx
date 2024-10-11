import React from "react";
import arcaeaData from "./arcaea.json";
import Navigation from "./components/navigation";
import "./assets/app.css";
function App() {
    return (
        <>
            <Navigation />
            <header>
                <div className='profile'>
                    <div className='potentials'>{arcaeaData.potential}</div>
                </div>
                <div className='user-info'>
                    <h2>{arcaeaData.username}</h2>
                </div>
            </header>
            <section className='favorite-songs'>
                <h2>Favorite Songs</h2>
                <ul className='songlist'>
                    {arcaeaData.favorite_songs.map((song) => (
                        <li>
                            <img src={song.jacket} />
                            <span>{song.title}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default App;
