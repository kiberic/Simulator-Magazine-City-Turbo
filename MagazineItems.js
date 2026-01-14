import React, { useEffect } from "react";

function MagazineItems({ itemObject, AddToCart }) {
    useEffect(() => {
        document.body.style.backgroundImage = "url('https://avatars.mds.yandex.net/i?id=d5efacc8fdc414154578aadc71614602c5a065bb-16915441-images-thumbs&n=13')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.margin = "0";

        return () => {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundSize = "";
            document.body.style.height = "";
        }
    }, [])
    return (
        <div className="cardProduct">
            <img className="productPhoto" src={itemObject.img} alt="Нет Фото" /><hr/>
            <h2>{itemObject.name}</h2>
            <p>
                <strong>{itemObject.price} тг</strong>
            </p>
            <p>Категория: {itemObject.category}</p>
            <p>Количество: {itemObject.quantity}</p>
        </div>
    )
}

export default MagazineItems;