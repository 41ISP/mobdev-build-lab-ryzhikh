import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useUserStore } from "../store/useUserStore";

const Layout = () => {
    return (
        <div className="container">

            <main>
                <div id="outlet">
                    <NavBar/>
                    <Outlet />
                </div>
            </main>

            <footer>
                <p>&copy; 2025 Маркетплейс. Все права защищены.</p>
            </footer>

        </div>
    )
}

export default Layout
