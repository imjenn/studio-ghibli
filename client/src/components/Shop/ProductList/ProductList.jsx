import './styles';
import ProductItem from "../ProductItem/ProductItem"
// import SHOP_ITEMS from '../products.json'
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/products")
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const shopItems = products.map((item) => {
        return (
            <ProductItem
                key={item.id}
                id={item.id}
                imageOne={item.imageOne}
                imageTwo={item.imageTwo}
                name={item.name}
                description={item.description}
                price={parseInt(item.price).toFixed(2)}
            />
        )
    });

    return (
        <div className="shop-container">
            <h1>Studio Ghibli Shop</h1>
            <div className="shop-items">{shopItems}</div>
        </div>
    )
}

export default ProductList;