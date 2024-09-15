import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import  AnimeList  from '../components/Pages/ScreenListAnime/AnimeList';
import AnimeSearch  from '../components/Pages/ScreenSearchAnime/AnimeSearch';

const ListAnime = () => {
    return (
        <div>
            <Navbar />
            <div>
            <Routes>
                <Route path="*" element={<AnimeList />} />
                <Route path="/Anime/:animeId" element={<AnimeSearch />} />
            </Routes>
            </div>
        </div>
    );
}

export default ListAnime;