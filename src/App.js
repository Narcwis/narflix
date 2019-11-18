import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import "./App.css";
import axios from "axios";
import Button from "./components/Button";
import Description from "./components/Description";
import FilmCard from "./components/FilmCard";

function App() {
    const [films, setFilms] = useState([]);

    useEffect(() => {});
    // const getData = url => {
    //     axios
    //         .get(url)
    //         .then(({ data }) => console.log(data))
    //         .catch(error => console.log(error));
    // };
    // getData("https://api.themoviedb.org/3/discover/movie?api_key=e94c3f3fab193264594666c3cf7639b1&sort_by=popularity.desc");
    return (
        <div className="App">
            <Logo />
            <Description>For only 25 schmeckles per month you can get all these films!</Description>
            {films.length > 0 ? films.map(film => <FilmCard film={film}></FilmCard>) : <Description>No films yet sorry :(</Description>}
            <Button>Moar plz</Button>
        </div>
    );
}

export default App;
