import React, { useEffect } from "react";
import { useEffect } from "react";

function MyProfile({ profileUser }) {

    useEffect(()=> {
        document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/K6zKFoFS8fk/maxresdefault.jpg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.width = "100%";
        document.body.style.height = "100vh";
        document.body.style.margin = "0";

        const local_data = localStorage.getItem("id")
        

        return () => {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundSize = "";
            document.body.style.height = "";
            local_data;
        }
    })

    return (
        <div className="containerProfile">
            <h1 className="myProfile">Мой профиль</h1><br/>
            <div className="profile__element">
                {profileUser ? (
                    <div className="data__profile">
                        <h3>Данные профиля:</h3>
                        <p><strong>Имя:</strong> {profileUser.f_name}</p>
                        <p><strong>Фамилия:</strong> {profileUser.l_name}</p>
                        <p><strong>Отчество:</strong> {profileUser.m_name}</p>
                        <p><strong>Возраст:</strong> {profileUser.age} лет</p>
                        <p><strong>Город:</strong> {profileUser.city}</p>
                    </div>
                ) : (
                    <h2 className="notProfile">Профиль отсутствует!</h2>
                )}
            </div>
        </div>
    )
}

export default MyProfile;