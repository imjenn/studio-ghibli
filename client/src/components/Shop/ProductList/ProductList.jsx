import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem"
import SHOP_ITEMS from '../products.json'

const ProductList = (props) => {
    const shopItems = SHOP_ITEMS.map((item) => {
        return (
            <ProductItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price.toFixed(2)}
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