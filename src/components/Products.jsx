import {popularProducts} from "../Data"
import Product from "./Product";

const Products = () => {
    return (
        <div className="products-container">
            {popularProducts.map((item) => {
                return (
                    <Product item={item} key={item.id}/>
                )
            })}
        </div>
    );
};

export default Products;
