"use client"

import { authClient } from "@/lib/auth-client";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {

    const handleSignUp = async(e:React.SubmitEvent<HTMLElement>) => {
            e.preventDefault()
            const formData = new FormData(e.target);
            const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string};
            
            const {data, error} = await authClient.signIn.email({
                ...user,
                callbackURL: "/"
            });
            if(data){
                toast.success(`Sign in Successfully!`)
            }
            if(error){
                toast.error(error.message as string);
            }
        }
    const handleGoogleSignIn = async() => {
            const data = await authClient.signIn.social({
    provider: "google",
  });
  
        }
        const handleGithubSignIn = async() => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
  }
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <h2 className='text-2xl font-bold text-red-700'>সাইন আপ</h2>
            <form onSubmit={handleSignUp}>
                <fieldset className="fieldset w-md rounded-box">


  <label className="label">ইমেইল</label>
  <input name="email" type="email" className="input w-md" placeholder="ইমেইল" />

  <label className="label">পাসওয়ার্ড</label>
  <input name="password" type="password" className="input w-md" placeholder="পাসওয়ার্ড" />

  <button className="btn bg-red-600 text-white mt-4" type="submit">সাইন ইন করুন</button>
  
</fieldset>
            </form>
            <div className="flex gap-5 items-center">
                <button className="btn bg-red-600 text-white mt-4" onClick={handleGoogleSignIn}>গুগল দিয়ে সাইন ইন করুন </button>
                <button className="btn bg-red-600 text-white mt-4" onClick={handleGithubSignIn}>গিটহাব দিয়ে সাইন ইন করুন </button>
            </div>
        </div>
    );
};

export default SignInPage;