import styles from "../page/TestGrid.module.css"

// 
function TestGrid() {

    return (
        < div className={styles.container} >
            <header className={styles.header}>Header</header>
            <main className={styles.content}>Main Content</main>
            <aside className={styles.sidebar}>Sidebar</aside>
            <footer className={styles.footer}>Footer</footer>
        </div >
    )
}

export default TestGrid;