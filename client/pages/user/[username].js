import { React, useContext, useEffect, useState } from 'react';
import { Avatar, Card } from 'antd';
import { UserContext } from '../../context';
import { useRouter } from 'next/router';
import axios from 'axios';
import { RollbackOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { toast } from "react-toastify";
import moment from 'moment';
const { Meta } = Card;


export default function Username() {

    const [state, setState] = useContext(UserContext);
    const [user, setUser] = useState({});

    const router = useRouter();

    useEffect(() => {
        if (router.query.username) fetchUser();

    }, [router.query.username]);


    const fetchUser = async () => {
        try {

            const { data } = await axios.get(`/user/${router.query.username}`);
            console.log("router.query.username", data);
            setUser(data);

        } catch (err) {
            console.log(err);
        }

    };

    const imageSource = (user) => {
        if (user.image) {
            return user.image.url;
        }
        else {
            return "/images/profile.jpg"
        }
    };

    return (

        <div className='row col-md-6 offset-md-3'>

            <div className="pt-5 pb-5">

                <Card hoverable cover={<img src={imageSource(user)} alt={user.name} />}>
                    <Meta title={user.name} description={user.about} />

                    <p className='pt-2 text-muted'>
                        Joined {moment(user.createdAt).fromNow()}
                    </p>
                    <div className="d-flex justify-content-between">

                        <div>
                            {user.following && user.following.length} Following
                        </div>
                        <div>
                            {user.followers && user.followers.length} Followers
                        </div>

                    </div>
                </Card>

            </div>




            <Link className='d-flex justify-content-center h5 pt-3' href="/users/dashboard">
                <RollbackOutlined />

            </Link>

        </div>

    );
};
