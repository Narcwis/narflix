import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import "./App.css";
import axios from "axios";
import Button from "./components/Button";
import Description from "./components/Description";
import FilmCard from "./components/FilmCard";
import FilmGrid from "./components/FilmGrid";
import _ from "lodash";

function App() {
    const [films, setFilms] = useState([]);
    const [count, setCount] = useState(5);
    const [page, setPage] = useState(1);

    const getFilms = page => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=e94c3f3fab193264594666c3cf7639b1&sort_by=popularity.desc&page=${page}`;
        axios
            .get(url)
            .then(({ data }) => {
                setFilms([...films, ...data.results]);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getFilms(page);
    }, []);

    const moreFilms = () => {
        if (count === films.length) {
            getFilms(page + 1);
            setPage(page + 1);
        }
        setCount(count + 5);
    };

    return (
        <div className="App">
            <Logo />
            <Description id="promotional-message">For only 25 schmeckles per month you can get all these films!</Description>
            <FilmGrid>
                {films.length > 0 ? (
                    _.take(films, count).map(film => <FilmCard film={film}></FilmCard>)
                ) : (
                    <Description id="error-message">No films yet sorry :(</Description>
                )}
            </FilmGrid>
            <Button onClick={moreFilms}>Moar plz</Button>
        </div>
    );
}

export default App;
