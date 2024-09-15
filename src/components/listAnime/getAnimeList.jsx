import { useState, useEffect } from 'react';

function ListAnime() {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime')
            .then(response => response.json())
            .then(data => setAnimeList(data.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Anime Recommendations</h1>
            <ul>
                {animeList.map(anime => (
                    <li key={anime.mal_id}>
                        <h2>{anime.title}</h2>
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListAnime;
