import { Avatar, List } from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';
import { UserContext } from '../../context';
import { useContext, React, useEffect, useState } from 'react';
import axios from 'axios';
import { RollbackOutlined } from '@ant-design/icons';
import Link from 'next/link';


const Followers = () => {

    const [state, setState] = useContext(UserContext);
    const [people, setPeople] = useState([]);

    const router = useRouter();

    useEffect(() => {

        if (state && state.token) {
            fetchFollowers();
        }

    }, [state && state.token]);

    const fetchFollowers = async () => {
        try {

            const { data } = await axios.get('/user-followers');
            console.log('followers list =>', data);
            setPeople(data);

        } catch (err) {
            console.log(err);
        }
    }

    const imageSource = (user) => {
        if (user.image) {
            return user.image.url;
        }
        else {
            return "/images/profile.jpg";
        }


    }

    const handleFollow = async () => {

    }
    const handleUnfollow = async (user) => {
        try {
            const {data} = await axios.put('/user-unfollow',{_id:user._id});

            //update local storage
            let auth = JSON.parse(localStorage.getItem('auth'));
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));


            //update context
            setState({ ...state, user: data });
            // update people state
            let filtered = people.filter((p) => (p._id !== user._id));
            setPeople(filtered);
            //rerender the posts in newsfeed
            toast.error(`Unfollowed ${user.name}`);

        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className='row col-md-6 offset-md-3'>
            <List
                itemLayout='horizontal'
                dataSource={people}
                renderItem={(user) => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <div className='d-flex justify-content-between'>
                                    {user.username} <span className='text-primary pointer' onClick={() => (handleUnfollow(user))}>Unfollow</span>
                                </div>}
                            avatar={<Avatar src={imageSource(user)} />}
                        />

                    </List.Item>
                )} />

            <Link href={"/users/dashboard"} className='d-flex justify-content-center pt-5 h5'><RollbackOutlined /></Link>
        </div>
    )
}

export default Followers;


