"use client"
import { authClient } from "@/lib/auth-client"
import Link from "next/link";
const UserInfo = () => {
    const {data:session} = authClient.useSession();
    const user = session?.user;
    console.log(user);
    const handleSignOut = async() => {
        await authClient.signOut();
    }
    return (
        <div>
            {
            user ? <div className="flex flex-col items-center gap-2">
                <Link href="/profile">
                <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
    <img alt="Tailwind-CSS-Avatar-component" src={user?.image as string} />
  </div>
</div></Link>
<h2 className="text-black">{user?.name}</h2>
<button className="btn bg-[#c10007] text-white" onClick={handleSignOut}>সাইন আউট </button>
            </div> : <div className="ml-auto flex items-center gap-2">
                  <Link href="/sign-in" className="btn">সাইন ইন</Link>
                  <Link href="/sign-up" className="btn bg-[#c10007] text-white">সাইন আপ</Link>
                </div>
        }
        </div>
         
    );
};

export default UserInfo;