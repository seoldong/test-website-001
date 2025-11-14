import styles from "./BlogListPage.module.css";
// 
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// 
import NoData from "../components/common/NoData";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import { fetchBlogListThunk } from "../redux/slices/blog/blogList";
import { Link } from "react-router-dom";

// 
function BlogPage() {
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.blogList);
    const dataMissing = data.length === 0;

    useEffect(() => {
        dispatch(fetchBlogListThunk("202511"));
    }, [dispatch]);

    const handleRefetch = useCallback(() => {
        dispatch(fetchBlogListThunk('202511'));
    }, [dispatch]);

    if (loading) return <Loading />
    if (error) return <Error onRetry={handleRefetch} dataName={"blogs"} />;
    if (dataMissing) return <NoData onRetry={handleRefetch} dataName={"blogs"} />

    return (
        <div className={styles.blogPage}>
            <h1 className={styles.title}>🌿 Our Farm Blog Posts</h1>
            <ul className={styles.blogList}>
                {data.map((blog) => (
                    <li key={blog.id} className={styles.blogItem}>
                        <div className={styles.blogHeader}>
                            <h2 className={styles.blogTitle}>{blog.title}</h2>
                            <span className={styles.blogDate}>{blog.date}</span>
                        </div>
                        <p className={styles.blogSummary}>{blog.summary}</p>
                        <Link to={`/blog/${blog.id}`} className={styles.readMoreLink}>
                            <button className={styles.readMoreBtn}>more</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPage;