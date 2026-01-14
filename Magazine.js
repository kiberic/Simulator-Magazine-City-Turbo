import React, { useState } from "react";
import MagazineItems from "./MagazineItems";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";


function Magazine() {
  const [Products, setProducts] = useState([
    {id: 1, name: "Яблоки", price: 1200, category: "Фрукты", quantity: "20кг", img: "https://avatars.mds.yandex.net/i?id=387708d2060120d8ec6fb872bc0b0d3a062ff6da-4430278-images-thumbs&n=13"},
    {id: 2, name: "Груши", price: 800, category: "Фрукты", quantity: "10кг", img: "https://img.freepik.com/premium-photo/pears-positioned-round-wood_309761-859.jpg"},
    {id: 3, name: "Баклажаны", price: 450, category: "Овощи", quantity: "20кг", img: "https://avatars.mds.yandex.net/i?id=7d8253a1c1c3a8b488a18f6531a68c4dce9e7610-12890380-images-thumbs&n=13"},
    {id: 4, name: "Рис", price: 230, category: "Крупы", quantity: "70кг", img: "https://avatars.mds.yandex.net/i?id=57cdb0ba0e3d12b7a1722c502af40a18ac35abbe-5288661-images-thumbs&n=13"},
    {id: 5, name: "Минтай", price: 990, category: "Рыба", quantity: "30шт", img: "https://chefport.ru/image/cache/catalog/products/ryiba/a2861-1200x800.jpg"},
    {id: 6, name: "Молоко", price: 450, category: "Молочные изделия", quantity: "20шт", img: "https://avatars.mds.yandex.net/i?id=ab0b2e4ab14700120a15c7f8becb526fcb045d51-10234363-images-thumbs&n=13"},
    {id: 7, name: "Лимонад", price: 500, category: "Газированные, соки", quantity: "120шт", img: "https://avatars.mds.yandex.net/i?id=ca7614410396b280818a1efd098fcf2b94184dc7-16410441-images-thumbs&n=13"},
    {id: 8, name: "Макароны", price: 700, category: "Тесто", quantity: "20кг" ,img: "https://avatars.mds.yandex.net/i?id=80aa9ca90a68f3fac5543abe7f2399d6734142ed-12715359-images-thumbs&n=13"},
    {id: 9, name: "Курица", price: 970, category: "Мясо", quantity: "230кг", img: "https://avatars.mds.yandex.net/i?id=5ef8cd9e32181809e270f8fefc2dd7e02d98a268-12513999-images-thumbs&n=13"},
    {id: 10, name: "Шампунь", price: 930, category: "Бытовое", quantity: "100кг", img: "https://img.hairmaniac.ru/uploads/images/00/61/51/2022/09/29/a06032_r.jpg"},
  ]);

  
  const [name_product, setNameProduct] = useState('');
  const [price_product, setProductPrice] = useState('');
  const [category_product, setProductCategory] = useState('');
  const [quantity_product, setProductQuantity] = useState('');
  const [img_product, setImageProduct] = useState('');
  
  const photoForCategoryProduct = {
    "Фрукты" : "https://png.pngtree.com/thumb_back/fh260/background/20230605/pngtree-close-up-of-fruits-on-a-pink-background-image_2881806.jpg",
    "Овощи" : "https://avatars.mds.yandex.net/i?id=26c111dc6496bcdbc33a4ca5a2a5c0531fdf118a-12421086-images-thumbs&n=13",
    "Крупы" : "https://avatars.mds.yandex.net/i?id=9f244322cd5535ba90f637f8888f09759c8c4c21-4011439-images-thumbs&n=13",
    "Рыба" : "https://avatars.mds.yandex.net/i?id=1f5fc0e21d434978df4dcf0cf87e493dd271f0d9-6918385-images-thumbs&n=13",
    "Молочные изделия" : "https://avatars.mds.yandex.net/i?id=7ed6e47b4b528a7c5a401944135ef1a7f03b3cac-12715359-images-thumbs&n=13",
    "Газированные, соки" : "https://avatars.mds.yandex.net/i?id=73993c0c16b2873d0f4fc6b3429923171c3ac34a-12724437-images-thumbs&n=13",
    "Тесто" : "https://avatars.mds.yandex.net/i?id=1e4604a8b3ba69609af89bc81a17022db3c312bf-4818427-images-thumbs&n=13",
    "Мясо" : "https://avatars.mds.yandex.net/i?id=44378cba40b0b6adafb0066b6744ac7088cefd8a3b800b90-9181527-images-thumbs&n=13",
    "Бытовое" : "https://avatars.mds.yandex.net/i?id=8570cf51187a4b8e84c58afe4c97514dd20abb11-4936492-images-thumbs&n=13"
  }

  const imgUrls = photoForCategoryProduct[category_product] 

  const AddProduct = (e) => {
    e.preventDefault();
    if (!name_product || !price_product || !category_product || !quantity_product) {
      alert("Вы ввели не все необходимые данные")
      return;
    }
    
    const newProduct = {
      id: Products.length + 1,
      name: name_product,
      price: price_product,
      category: category_product,
      quantity: quantity_product,
      img: imgUrls || img_product
    };
    setProducts([...Products, newProduct]);
    
    setNameProduct("");
    setProductPrice("");
    setProductCategory("");
    setProductQuantity("");
    setImageProduct("");
  };
  
  return (
    <div className="ProductsContainer">
      <h2>Добро пожаловать!</h2><br/><br/><hr/>
      <div className="product-add">
        <input type="text"  className="inputProductName" value={name_product} onChange={event => setNameProduct(event.target.value)} placeholder="Имя продукта*"/>
        <input type="number" className="inputProductPrice" value={price_product} onChange={event => setProductPrice(event.target.value)} placeholder="Цена продукта*"/>
        <select className="inputProductCategory" value={category_product} onChange={event => setProductCategory(event.target.value)}>
          <option value="">Выберите подходящюю для товара категорию: </option>
          <option value="Фрукты">Фрукты</option>
          <option value="Овощи">Овощи</option>
          <option value="Крупы">Крупы</option>
          <option value="Мясо">Мясо</option>
          <option value="Газированные, соки">Газировки, соки</option>
          <option value="Тесто">Тесто</option>
          <option value="Молочные изделия">Молочные изделия</option>
          <option value="Бытовое">Бытовые товары</option>
        </select>
        {/* <input type="text" className="inputProductCategory" value={category_product} onChange={event => setProductCategory(event.target.value)} placeholder="Категория продукта*" required/> */}
        <input type="number" className="inputProductQuantity" value={quantity_product} onChange={event => setProductQuantity(event.target.value)} placeholder="Количество продуктов* (в шт, л, кг)"/>
        <input type="text" className="inputProductImage" value={img_product} onChange={event => setImageProduct(event.target.value)} placeholder="Фото продукта(по желанию)"/>
        <button className="buttonAddProduct" type="submit" onClick={AddProduct} onc>Добавить новый товар</button>
        <br/><br/>
      </div>

      <div className="productItem">
        {Products.map(itemObject => (
          <MagazineItems key={itemObject.id} itemObject={itemObject}/>
        ))}
      </div>
    </div>
  );
}

export default Magazine;
