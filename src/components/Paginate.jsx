import React from "react";
import "./Paginate.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, getFav } from "../redux/actions.js";

export default function Paginate({ cantPages, title }) {

    const { numPageFav, numPageChar, favorites } = useSelector((state) => state);
    const dispatch = useDispatch();

    function next() {
        dispatch(getFav(favorites))
        dispatch(nextPage(title));
    }

    function prev() {
        dispatch(getFav(favorites))
        dispatch(prevPage(title));
    }

    var hasNextPage = false;
console.log("cantPages",cantPages)
    if (numPage === cantPages) {
        hasNextPage = true;
    }
    var numPage = numPageChar;
    if (title === "Favoritos") {
        numPage = numPageFav;
    }

  return (
    <div className="page" >
        { numPage > 1 && <button onClick={prev}>PREV</button> }
        { numPage > 1 && <p>{numPage - 1}</p> }
        <h3>{numPage}</h3>
        { numPage < cantPages && <p>{numPage + 1}</p>}
        { numPage < cantPages && <button onClick={next}>NEXT</button> }
    </div>
  );
}