import ProductItem from "../ProductItem/ProductItem"
import SHOP_ITEMS from '../products.json'

const ProductList = (props) => {
    const shopItems = SHOP_ITEMS.map((item) => {
        return (
            <ProductItem>
                key={item.id}
                id={item.id}
                image={item.image}
                image={item.name}
                image={item.price}
            </ProductItem>
        )
    });

    return (
        <div>
            <h1>Ghibli Shop</h1>
            <div>
                {shopItems}
            </div>
        </div>
    )
}

export default ProductList;