import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import "../Style/product.css"

const Product = ({item}) => {
    return (
        <div className="product-container">
            <div className="product-circle"></div>
            <img src={item.img} alt="shop" />
            <div className="product-info">
                <div className="product-icon">
                    <ShoppingCartOutlined />
                </div>
                <div className="product-icon">
                    <SearchOutlined />
                </div>
                <div className="product-icon">
                    <FavoriteBorder />
                </div>
            </div>
        </div>
    );
};

export default Product;
