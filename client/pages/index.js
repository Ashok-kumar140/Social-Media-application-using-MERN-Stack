import { React, useContext, useState } from 'react';
import { UserContext } from '../context';
import ParallaxBG from '../components/cards/parallaxBG';
import axios from 'axios';
import Post from '../components/cards/Post';
import Head from "next/head";
import Link from "next/link";
import UserRoute from '../components/routes/UserRoute';
import PostList from '../components/cards/PostList';

export default function Home({ posts }) {

    const [state, setState] = useContext(UserContext);

    const [content, setContent] = useState("");
    const [image, setImage] = useState({});

    // for posts
    const [userposts, setUserPosts] = useState([]);
    //people
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);
    // for comments
    const [comment, setComment] = useState('');
    const [visible, setVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    const newsFeed = async () => {
        try {
            const { data } = await axios.get('/news-feed');
            // console.log("User posts=>", data);
            setUserPosts(data);

        } catch (err) {
            console.log(err);
        }
    }
    const handleDelete = async (post) => {
        try {
            const answer = window.confirm("Are you sure to delete post?");
            if (!answer) return;
            const { data } = await axios.delete(`/delete-post/${post._id}`);
            toast.error("Post deleted");
            newsFeed();
        } catch (err) {
            console.log(err);
        }
    };
    const handleLike = async (_id) => {

        // console.log("like this post", _id)

        try {

            const { data } = await axios.put(`/like-post`, { _id });
            // console.log("liked data=>", data);
            newsFeed();

        } catch (err) {
            console.log(err);
        }
    };
    const handleUnlike = async (_id) => {

        // console.log("Unlike this post", _id)
        try {
            const { data } = await axios.put(`/unlike-post`, { _id });
            // console.log("unliked data=>", data);
            newsFeed();
        } catch (err) {
            console.log(err);
        }
    };
    const handleComment = async (post) => {
        setCurrentPost(post);
        setVisible(true);

    };


    const head = () => (
        <Head>
            <title>SOCIAL MEDIA- A social network by devs for devs</title>
            <meta name="description" content="A social network by developers for other web developers" />
            <meta property="og:description"
                content="A social network by developers for other web developers" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="SOCIALMEDIA" />
            <meta property="og:url" content="http://socialmedia.com" />
            <meta property="og:image:secure_url" content="http://socilamedia.com/images/default.jpg" />

        </Head>
    )

    return (
        <UserRoute>
            {head()}
            <div className="container-fluid">
                <ParallaxBG url="/images/default.jpg" />

                <div className="row pt-5" py-3>
                    <div className="col-md-6 offset-1">
                        <PostList posts={posts} handleDelete={handleDelete} handleLike={handleLike}
                            handleUnlike={handleUnlike} handleComment={handleComment}
                        />
                    </div>
                </div>
            </div>

        </UserRoute>
    );
}
export async function getServerSideProps() {
    const { data } = await axios.get('/posts');

    return {
        props: {
            posts: data,
        }
    }
}

