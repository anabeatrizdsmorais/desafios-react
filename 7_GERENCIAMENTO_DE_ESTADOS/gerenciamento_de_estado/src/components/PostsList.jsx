import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../context/posts/actions";

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        dispatch(getPosts(page))
    }, [dispatch, page])


    const handleNext = () => {
        setPage(page+1);
    }
    
    const handlePrev = () => {
        setPage(page-1);
    }

  return (
    <div>
        {posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
        <button type="button" onClick={() => handlePrev()} disabled={page === 1}>Anterior</button>
        &nbsp;
        <button type="button" onClick={() => handleNext()}>Proximo</button>
    </div>
  )
}

export default PostsList