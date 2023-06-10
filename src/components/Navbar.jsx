import { Search } from "@mui/icons-material"
import { Badge } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "../Style/navebar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="search-container">
                <div>En</div>
                <div className="search-wrepper">
                    <input type="text" />
                    <Search style={{color : "gray" , fontSize : "16px"}}/>
                </div>
            </div>
            <h1>Duleman</h1>
            <div className="navbar-manuitem-container">
                <div>REGISTER</div>
                <div>SIGN IN</div>
                <div>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Navbar