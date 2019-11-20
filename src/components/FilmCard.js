import React from "react";
import styled from "styled-components";

const Body = styled.div`
    background-image: url(https://image.tmdb.org/t/p/w200${props => props.film.poster_path});
    border-radius: 2px;
    display: inline-block;
    height: 300px;
    margin: 1rem;
    position: relative;
    width: 12vw;
    max-width: 200px;
    min-width: 200px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    align-items: center;
    justify-content: center;
`;

const FilmCard = ({ film }) => <Body film={film} key={film.id}></Body>;

export default FilmCard;
