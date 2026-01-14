import React from "react";
import { Link, NavLink, Route, } from "react-router-dom";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/69/d3/f8/69d3f873312b10ccbdbb7a458e6e22c5.jpg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.height = "100vh";
        document.body.style.margin = "0";

        return () => {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundSize = "";
            document.body.style.height = "";
        }
    })
    return (
        <div className="home-element">
            <br/>
            <div className="helloMessage">Здравствуйте!</div>
            <br/><hr/>
            <h2>Сейчас вы на главной странице<br/></h2>
            <Link className="linkInMagazine" to="/magazine-turbo">Зайти в магазин</Link>
        </div>
    )
}

export default Home;