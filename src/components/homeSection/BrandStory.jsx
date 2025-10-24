import styles from "./BrandStory.module.css"

// 
function BrandStory() {

    return (
        <>
            <div className={styles.parllax}></div>
            <div className={styles.contents}>
                <div className={styles.story}>
                    <div className={styles.storyTitle}>INNOVATING FOR A HEALTHIER WORLD</div>
                    <div className={styles.storyDescription}>Our journey began with a simple belief: that nature holds the key to wellness. We started in a small kitchen, dedicated to crafting products that are not only effective but are ethically sourced and truly clean. This is the foundation of every choice we make.</div>
                </div>
                <div className={styles.centerLine}></div>
                <div className={styles.vison}>
                    <div className={styles.visonTitle}>OUR COMMITMENT TO TOMORROW</div>
                    <div className={styles.visonDescription}>We envision a future where sustainable living and uncompromising quality go hand-in-hand. Our goal is to set a new industry standard, leading with transparency, driving eco-friendly innovation, and consistently exceeding the expectations of the communities we serve.</div>
                </div>
            </div>
        </>
    )
}

export default BrandStory;