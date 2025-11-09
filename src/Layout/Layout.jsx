import { Outlet } from "react-router-dom";
// 
import TopNav from "../components/topNav/index"
import Footer from "../components/footerSection/Footer";
import useScrollToTop from "../hooks/useScrollToTop";
// 
function Layout() {

    useScrollToTop();

    const styles = {
        width: '1800px',
        margin: 'auto',
    }

    return (
        <div style={styles}>
            <TopNav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;