import Link from 'next/link'
import React from 'react'
import { useUserAuth } from '../_utils/auth-context'
import { AiFillGithub } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { BsGoogle } from "react-icons/bs";



export default function Navbar() {
    const { user, githubSignIn, googleSignIn, logout  } = useUserAuth();


    const handleGoogleLogin = async (provider) => {
        try {
                await googleSignIn();
            } catch (error) {
            console.log(error);
        }
    };

    const handleGithubLogin = async (provider) => {
        try {
                await githubSignIn();
            } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='border-b-2 h-20 w-full flex items-center justify-between'>
        <ul className='flex'>
            <li className='p-2 cursor-pointer'>
                <Link href="https://cprg306-assignments-tyler-le.vercel.app/">Home</Link>
            </li>
        </ul>

        {!user ? (<ul className='flex'>
            <li onClick={handleGoogleLogin} className='p-2 cursor-pointer'>
            <BsGoogle />
            </li>
            <li onClick={handleGithubLogin} className='p-2 cursor-pointer'>
            <FiGithub />
            </li>
        </ul>) : (
            <div className='flex'>
                <p className='mr-2'>Welcome {user.displayName}</p>
                <p className='cursor-pointer mr-4' onClick={handleLogout}>Sign Out</p>
            </div>
        )}
        
    </div>
  )
}
