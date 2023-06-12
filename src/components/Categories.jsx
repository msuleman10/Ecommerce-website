import {categories} from "../Data"
import CategoryItem from "./CategoryItem"
import "../Style/categories.css"

const Categories = () => {
    return (
        <div className="category-container">
            {categories.map((item)=>{
                return(
                    <CategoryItem item={item} />
                )
            })}
        </div>
    )
}

export default Categories