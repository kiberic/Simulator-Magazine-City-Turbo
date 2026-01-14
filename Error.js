import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Error404() {
    useEffect(()=> {
        document.body.style.backgroundImage = "url('https://img3.akspic.ru/crops/1/5/3/4/7/174351/174351-uzor-dizajn-geometriya-korichnevyj_cvet-apelsin-1920x1080.jpg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.margin = "0";

        return () => {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundSize = "";
            document.body.style.margin = "";
        }
    }, [])

    return (
        <div className="errorContainer">
            <h1 className="h1-404">404</h1><br/>
            <p className="error-description">Возможно вы ошиблись, такой<br/>страницы не существует</p>
            <Link to="/">Перейти на главную</Link>
        </div>
    )
}

export default Error404;