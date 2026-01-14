import React, { useState, useEffect } from "react";
import ButtonComponent from './UI/ButtonComponent';

function Login({ setProfile }) {
    const [f_name, setName] = useState('');
    const [l_name, setLastName] = useState('');
    const [m_name, setMiddleName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    const [isCreated, setIsCreated] = useState(false);

    const handleCreateProfile = () => {
        if (!f_name || !l_name || !city) {
            alert("Пожалуйста, заполните обязательные поля");
            return;
        }
        
        const data_profile = {
            id: Date.now(),
            f_name, 
            l_name, 
            m_name,
            age,
            city
        };
        
        setProfile(data_profile);
        setIsCreated(true);

        useEffect(() => {
            localStorage.setItem("id", `${id}`)
        }, [data_profile])

        setName("");
        setLastName("");
        setMiddleName("");
        setAge("");
        setCity("");
    };

    useEffect(() => {
        document.body.style.backgroundImage = "url('https://img3.akspic.ru/crops/0/2/6/1/5/151620/151620-tkan-abstrakciya-kosmos-krasnyj_cvet-grafika-3840x2160.jpg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.width = "100%";
        document.body.style.height = "100vh";
        document.body.style.margin = "0";

        return () => {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundSize = "";
            document.body.style.height = "";
        };
    }, []);

    return (
        <div className="login-container">
            <h2>Форма авторизации</h2>
            <div className="form-group">
                <input className="input__dataFname" value={f_name} onChange={e => setName(e.target.value)} placeholder="Введите своё имя*" />
                <input className="input__dataLname" value={l_name} onChange={e => setLastName(e.target.value)} placeholder="Введите свою фамилию*" />
                <input className="input__dataMname" value={m_name} onChange={e => setMiddleName(e.target.value)} placeholder="Введите своё отчество" />
                <input className="input__dataAge"   value={age}    onChange={e => setAge(e.target.value)} placeholder="Введите свой возраст*" type="number" />
                <input className="input__dataCity"  value={city}   onChange={e => setCity(e.target.value)} placeholder="Введите свой город" />
                <br/>
                <ButtonComponent className="createProfile" onClick={handleCreateProfile} text="Создать свой профиль" />
                <div className="message">
                    {isCreated ? 'Профиль создан! Перейдите в свой профиль!' : 'Авторизуйтесь чтобы у вас был профиль'}
                </div>
            </div>
        </div>
    );
}

export default Login;