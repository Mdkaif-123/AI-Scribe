/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
    Card,
    Input,
    Button,
    Typography,
    Spinner,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginNavbar from '../../components/layout/Navbar/LoginNavbar';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../global/redux/slice/story';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

function Login() {

    const [credentials, setCredentials] = useState({})
    const [disable, setDisable] = useState(true)

    const navigate = useNavigate()
    const state = useSelector((state) => state.story)

    useEffect(() => {
        if(!navigator.onLine) toast.error("No Internet Connection")
        if (localStorage.getItem("aiScribeAuthToken") !== null) navigate('/')
    },[state,navigate])

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        console.log(credentials);
        setDisable(false)
    }

    const loading = useSelector((state) => state.story.isLoading)
    const dispatch = useDispatch()
    const handleLogin = async () => {
        console.log(credentials);
        dispatch(login(credentials))
    }

    return (
        <section className='login-page '>
            <div className="navbar">
                <LoginNavbar text={"Don't have an Account?"} option={'Sign up'} link={'/sign-up'} />
            </div>
            <div className="hero-section flex w-100 h-100">
                <div className="login-container mx-auto flex justify-center lg:w-1/2" >
                    <div className="login-card px-3 ">
                        <Card className='p-2 md: blur-card md:p-7' color="transparent" shadow={false}>
                            <div className="heading p-2">
                                <Typography className='text-center text-white' variant="h4" color="blue-gray">
                                    Login to your Account
                                </Typography>
                            </div>
                            <form className="mt-8 mb-2 p-4 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-6">
                                    <Input color="white" className="dark:text-white" onChange={handleChange} id='email' name='email' value={credentials.email} size="lg" label="Email" required />
                                    <Input color="white" className="dark:text-white" onChange={handleChange} id='password' name='password' value={credentials.password} type="password" size="lg" label="Password" autoComplete='false' required min={8} />
                                </div>
                                <Button disabled={disable} onClick={handleLogin} className="mt-6 bg-[#65edc6] text-black flex justify-center rounded-full" fullWidth>
                                    {loading ? <Spinner className='w-4 h-4 align-middle justify-center' /> : "Login"}
                                </Button>
                            </form>
                        </Card>
                        <div className=" option flex justify-center md:hidden" >
                            <Link to={'/sign-up'}><span className="flex cursor-pointer text-center text-white"> Don't have an Account?<strong className="flex mx-3 text-white">  Sign up <ArrowLongRightIcon className="h-5 w-5 ml-1" /></strong> </span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
        </section>
    )
}

export default Login
