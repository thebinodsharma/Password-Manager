import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mainbody = () => {

    const [form, setForm] = useState({ url: "", username: "", password: "", color: "#FFFF00" });
    const [passwordArray, setPasswordArray] = useState([]);
    const ref = useRef();
    const passwordRef = useRef();
    const NameRef = useRef();
    const URLRef = useRef();
    const hRef = useRef();

    useEffect(() => {
        const passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const showPassword = () => {
        const isPasswordVisible = passwordRef.current.type === "text";
        ref.current.src = isPasswordVisible ? "/src/assets/eyecross.png" : "/src/assets/eye.png";
        passwordRef.current.type = isPasswordVisible ? "password" : "text";
        hRef.current.value = ""
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (form.url.length < 3 || form.username.length < 3 || form.password.length < 3) {
            toast.error('Must Contain More Than 3 Letters', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
        }
        else {
            toast.success('Password Saved Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
            const newPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
            setPasswordArray(newPasswordArray);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
            passwordRef.current.value = ""
            NameRef.current.value = ""
            URLRef.current.value = ""
        }
    }

    const handleDelete = (id) => {
        toast.error('Password Deleted !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
    };

    const handleEdit = (id) => {
        const passwordToEdit = passwordArray.find(item => item.id === id);
        setForm({ url: passwordToEdit.url, username: passwordToEdit.username, password: passwordToEdit.password });
        URLRef.current.value = passwordToEdit.url;
        NameRef.current.value = passwordToEdit.username;
        passwordRef.current.value = passwordToEdit.password;
        setPasswordArray(passwordArray.filter(item => item.id !== id));
    };
    const handleCopy = (text) => {
        toast.success('Password Copied Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
        navigator.clipboard.writeText(text)
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <div className="mainbody mt-7 h-[85]">
                <div className="inputs flex flex-col justify-center items-center gap-4 text-center text-xl">
                    <input
                        onChange={handleChange}
                        className="border-[3px] text-2xl rounded-full border-red-600 w-1/3 text-center p-3"
                        placeholder="Website URL"
                        type="text"
                        name="url"
                        ref={URLRef}
                    />
                    <div className="flex gap-5 w-1/3">
                        <input
                            onChange={handleChange}
                            className="border-[3px] w-1/2 text-2xl text-center rounded-full p-4 border-cyan-600"
                            placeholder="Username"
                            type="text"
                            name="username"
                            ref={NameRef}
                        />
                        <div className="flex items-center w-1/2">
                            <input
                                onChange={handleChange}

                                className="border-[3px] text-center rounded-full p-4 w-full border-green-600 text-2xl"
                                ref={passwordRef}
                                placeholder="Password"
                                type="password"
                                name="password"
                            />
                            <img
                                ref={ref}
                                onClick={showPassword}
                                src="/src/assets/eyecross.png"
                                alt="Toggle Password Visibility"
                                width={40}
                                className="cursor-pointer ml-[-52px] scale-[0.45]" />
                        </div>
                    </div>
                    <button
                        className="flex items-center gap-1 py-2 px-24 bg-green-600 text-black font-medium text-2xl rounded-full"
                        onClick={handleAdd} >
                        Add
                        <span>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover"
                                style={{ width: "33px", height: "33px" }}
                            ></lord-icon>
                        </span>
                    </button>
                </div>
            </div>
            {passwordArray.length != 0 && <div className="heading font-bold bg-green-400 h-12 text-black flex justify-around items-center w-3/2 mt-10 text-xl">
                <h1>URL</h1>
                <h1>Username</h1>
                <h1>Password</h1>
                <h1>Actions</h1>
            </div>}
            {passwordArray.length == 0 && <h1 className='text-3xl text-center mt-20 h-[3vh]'><span className='text-5xl font-bold text-red-600'>Oops !</span><br></br>No password Found!</h1>}
            {passwordArray.map((item) => {
                return (
                    <div className='flex justify-around items-center text-center '>
                        <div className='flex  justify-center items-center bg-red-500 w-1/4'>
                            <h1 className='text-sm'>{item.url}</h1>
                            <button onClick={() => { handleCopy(item.url) }} ><lord-icon
                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover" >
                            </lord-icon></button>
                        </div>
                        <div className='flex gap-2 text-wrap justify-center items-center bg-yellow-500  w-1/4'>
                            <h1>{item.username}</h1>
                            <button onClick={() => { handleCopy(item.username) }}><lord-icon
                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover" >
                            </lord-icon></button>
                        </div>
                        <div className='flex gap-2 justify-center items-center w-1/4 bg-green-500'>
                            <h1>{"*".repeat(item.password.length)}</h1>
                            <button onClick={() => { handleCopy(item.password) }}><lord-icon
                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover" >
                            </lord-icon></button>
                        </div>
                        <div className='flex gap-7 justify-center w-1/4 bg-purple-500'>
                            <button onClick={() => { handleEdit(item.id) }}><lord-icon
                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                trigger="hover"
                            >
                            </lord-icon></button>
                            <button onClick={() => { handleDelete(item.id) }} ><lord-icon
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover">
                            </lord-icon></button>
                        </div>
                    </div>
                )
            })}
        </>
    );
};
export default Mainbody;
