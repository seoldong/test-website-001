import styles from "./BlogContent.module.css";
// 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo } from "react"; // 💡 useMemo 추가
// 
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import NoData from "../components/common/NoData";
import { fetchBlogListThunk } from "../redux/slices/blog/blogList";
import ReactMarkdown from "react-markdown";
import { fetchBlogContentThunk } from "../redux/slices/blog/blogContent";

// 
function BlogContent() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.blogList);
    const blogContent = useSelector((state) => state.blogContent);

    const dataMissing = data.length === 0;
    const { id } = useParams();

    const currentBlogId = parseInt(id, 10);

    const currentBlog = useMemo(() => {
        if (!data || !currentBlogId) return null;

        return data.find(blog => blog.id === currentBlogId);
    }, [data, currentBlogId]);


    const handleRefetch = useCallback(() => {
        dispatch(fetchBlogListThunk('202511'));
    }, [dispatch]);

    const blogNotFound = !loading && !dataMissing && !currentBlog;

    // 
    useEffect(() => {
        if (dataMissing) {
            dispatch(fetchBlogListThunk("202511"));
        }
    }, [dispatch, dataMissing]);

    // 
    useEffect(() => {
        if (currentBlog && currentBlog.contentPath) {
            dispatch(fetchBlogContentThunk(currentBlog.contentPath));
        }
    }, [currentBlog, dispatch]);

    // 
    if (loading) return <Loading />;
    if (error) return <Error onRetry={handleRefetch} dataName={"blogs"} />;
    if (dataMissing) return <NoData onRetry={handleRefetch} dataName={"blogs"} />;

    if (blogNotFound) return <h2>Blog post not found.</h2>;

    const blogPath = currentBlog ? currentBlog.contentPath : null;

    return (
        <div className={styles.blogPost}>
            <h1 className={styles.title}>{currentBlog.title}</h1>
            <div className={styles.date}>Date: {currentBlog.date}</div>
            <div className={styles.contentWrapper}>
                <ReactMarkdown>
                    {blogContent.data}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default BlogContent;