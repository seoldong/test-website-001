import styles from "./BrandStory.module.css"
// 
import brandStoryData from "../../mockData/brandStoryData";

// 
function BrandStory() {

    const { storyTitle, storyDescription, visonTitle, visonDescription } = brandStoryData;

    return (
        <section className={styles.brandStory} >
            <div className={styles.parllax}></div>
            <div className={styles.contents}>
                <div className={styles.story}>
                    <div className={styles.storyTitle}>{storyTitle}</div>
                    <div className={styles.storyDescription}>{storyDescription}</div>
                </div>
                <div className={styles.centerLine}></div>
                <div className={styles.vison}>
                    <div className={styles.visonTitle}>{visonTitle}</div>
                    <div className={styles.visonDescription}>{visonDescription}</div>
                </div>
            </div>
        </section >
    )
}

export default BrandStory;