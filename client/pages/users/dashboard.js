import { React, useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import PostForm from '../../components/forms/PostForm';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import PostList from '../../components/cards/PostList';
import People from '../../components/cards/People';
import Link from 'next/link';
import { Modal } from 'antd';
import CommentForm from '../../components/forms/CommentForm';
import Search from '../../components/Search';
import ParralaxBG from '../../components/cards/parallaxBG';


export default function dashboard() {

    const [state, setState] = useContext(UserContext);

    const [content, setContent] = useState("");
    const [image, setImage] = useState({});

    // for posts
    const [posts, setPosts] = useState([]);
    //people
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);
    // for comments
    const [comment, setComment] = useState('');
    const [visible, setVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    const router = useRouter();


    useEffect(() => {
        if (state && state.token) {
            newsFeed();
            findPeople();
        }

    }, [state && state.token]);

    const newsFeed = async () => {
        try {
            const { data } = await axios.get('/news-feed');
            // console.log("User posts=>", data);
            setPosts(data);

        } catch (err) {
            console.log(err);
        }
    }

    const findPeople = async () => {
        try {

            const { data } = await axios.get("/find-people");
            setPeople(data);

        } catch (err) {
            console.log(err);
        }
    }

    const postSubmit = async (e) => {
        e.preventDefault();
        // console.log("post", content);

        try {
            const { data } = await axios.post(`/create-post`, { content, image });
            console.log("Post created", data);

            if (data.error) {
                toast.error(data.error);
            }
            else {
                fetchUserPosts();
                toast.success('Post created');
                setContent("");
                setImage({})
            }

        } catch (err) {
            console.log(err)
        }
    };

    const handleImage = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData()
        formData.append('image', file);
        formData.append("content", content);



        // console.log([...formData]);
        setLoading(true);

        try {
            const { data } = await axios.post("/upload-image", formData);

            // console.log("image=>", data);
            setImage({
                url: data.url,
                public_id: data.public_id,

            });

            setLoading(false)
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

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

    const handleFollow = async (user) => {

        try {

            const { data } = await axios.put('/user-follow', { _id: user._id });
            // console.log("handle follow response=>", data);
            //update local storage, update user, keep token

            let auth = JSON.parse(localStorage.getItem('auth'));
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));


            //update context
            setState({ ...state, user: data });
            // update people state
            let filtered = people.filter((p) => (p._id !== user._id));
            setPeople(filtered);
            //rerender the posts in newsfeed
            newsFeed();

            toast.success(`Following ${user.name}`);

        } catch (err) {

        }
    };

    const handleComment = async (post) => {
        setCurrentPost(post);
        setVisible(true);

    };


    const addComment = async (e) => {
        e.preventDefault();
        // console.log('add coment to this post id=>',currentPost._id)
        // console.log('comment',comment);
        try {

            const { data } = await axios.put('/add-comment', {
                postId: currentPost._id,
                comment
            });

            console.log('add comment=>', data)
            setComment('');
            setVisible(false);
            newsFeed();

        } catch (err) {
            console.log(err);
        }



    };
    const removeComment = async () => {

    }

    return (
        <UserRoute>
            <div className='container-fluid'>
                <ParralaxBG url="/images/default.jpg">Dashboard Page</ParralaxBG>
                <br />

                <div className="row" py-3>
                    <div className="col-md-8">
                        <PostForm
                            content={content}
                            setContent={setContent}
                            postSubmit={postSubmit}
                            handleImage={handleImage}
                            loading={loading}
                            image={image}
                        />
                        <br />
                        <PostList posts={posts} handleDelete={handleDelete} handleLike={handleLike}
                            handleUnlike={handleUnlike} handleComment={handleComment}
                        />
                    </div>


                    <div className="col-md-4">
                        <Search />
                        <br />
                        {state && state.user && state.user.following && state.user.followers&& (
                            <span  >
                                <Link className="h6" href={'/users/following'}style={{margin:"35px"}}>
                                    {state.user.following.length} Following
                                </Link>{" "}
                                <Link className="h6" href={'/users/followers'} >
                                    {state.user.followers.length} Followers
                                </Link>
                            </span>)


                        }{" "}

                        <People people={people} handleFollow={handleFollow} />
                    </div>
                </div>
                <Modal visible={visible}
                    onCancel={() => setVisible(false)}
                    title="Comment"
                    footer={null}>
                    <CommentForm comment={comment} addComment={addComment} setComment={setComment} />

                </Modal>

            </div>
        </UserRoute>
    )
}
