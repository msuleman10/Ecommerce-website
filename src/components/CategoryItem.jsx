import "../Style/categories.css"

const CategoryItem = ({item}) => {
    return ( 
        <div className="category-item-container">
            <img src={item.img} alt="" />
            <div className="category-item-info">
                <h1>{item.title}</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
    );
};

export default CategoryItem;
