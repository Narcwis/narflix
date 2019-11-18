import React from "react";
import styled from "styled-components";

const film = {
    popularity: 441.229,
    vote_count: 5591,
    video: false,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    id: 475557,
    adult: false,
    backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    original_language: "en",
    original_title: "Joker",
    genre_ids: [80, 18, 53],
    title: "Joker",
    vote_average: 8.4,
    overview:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    release_date: "2019-10-02"
};

const Body = styled.div`
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: 300px;
    margin: 1rem;
    position: relative;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const FilmCard = ({ movie }) => <Body>{film.overview}</Body>;

export default FilmCard;
