import { NavBar } from "../style/style";
import {Link} from 'react-router-dom'

export default function NavBarTop(){
    return(
        <NavBar>
            <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630984698/BlockMaster/logo-blockBuster_daxs55.svg" alt="" />
            <p>Lola</p>
            <p>Lola</p>
            <p>Lola</p>
            <input placeholder="search" />
            <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631064166/BlockMaster/WhatsApp_Image_2021-09-07_at_8.22.35_PM_c6og12.jpg" alt="" />
            <Link
                to="/login"
            >
                Login
            </Link>
        </NavBar>
    )
}