import styles from "./Layout.module.css"
// 
import { Outlet } from "react-router-dom";
// 
import TopNav from "../components/topNav/index"
import Footer from "../components/footerSection/Footer";
import useScrollToTop from "../hooks/useScrollToTop";
// 
function Layout() {

    useScrollToTop();

    return (
        <div className={styles.layout}>
            <TopNav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;