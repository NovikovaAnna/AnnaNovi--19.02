import {Fragment, useEffect} from "react";
import Layout from "../../Components/Layout/Layout.jsx";
import {useState} from "react";
import './Blog.css'

export default function Blog() {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => {return(json)})
            .then((res) => setState(res))}, []);
    const posts = state.map((el) => <article key = {el.id} className="post" >
        <h2 className="post-title">{el.title}</h2>
        <p className="post-body">{el.body}</p>
    </article>)
    return <Fragment>
        <Layout className="main">
            <div className="blog">
                <div className="posts">
                    {posts}
                </div>
            </div>
        </Layout>
    </Fragment>

}