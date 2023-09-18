import { React, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { UserContext } from '../context';
import { useRouter } from 'next/router';

export default function Nav() {

    const [state, setState] = useContext(UserContext);
    const [current, setCurrent] = useState("");



    const router = useRouter();

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);

    }, [process.browser && window.location.pathname]);


    const logout = () => {
        window.localStorage.removeItem("auth");
        setState(null);
        router.push("/login");
    }
    return (
        <>
            <nav className='nav d-flex justify-content-between' style={{ backgroundColor: "blue" }}>
                <Link href="/" className={`nav-link text-light`}>
                    SOCIAL MEDIA
                </Link>

                

                {state !== null ? (
                    <>
                    <div className="dropdown">
                    <button
                        className="btn dropdown-toggle text-light"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {state && state.user && state.user.name}
                    </button>
                    <ul
                        className="dropdown-menu">
                        <Link className={`nav-link dropdown-item   ${current === '/users/profile/update' && "active"}`} href="/users/profile/update">Update Profile</Link>
                        <Link className={`nav-link dropdown-item   ${current === '/users/dashboard' && "active"}`} href="/users/dashboard">Dashboard</Link>
                        <a className="nav-link dropdown-item " onClick={logout}>Logout</a>
                    </ul>
                </div>

                    </>
                ) : (
                    <>
                        <Link className={`nav-link text-light  ${current === '/login' && "active"}`} href="/login">Login</Link>
                        <Link className={`nav-link text-light ${current === '/register' && "active"}`} href="/register">Signup</Link>

                    </>

                )}
            </nav>





        </>
    )
}
