import Image from "next/image"
import { usePathname } from "next/navigation"
import { UserIcon } from "@heroicons/react/24/outline"
import { poppins } from "../ui/fonts"



export default function ProfilePage() {

    return (
        <>
        <main className={`flex flex-col mb-20 p-4 ${poppins.className}`}>
            <h1 className="mb-5 text-right text-2xl">Profile</h1>
            <div className="flex justify-center mb-6">
                <UserIcon className="w-1/2 border-2 border-black rounded-full p-3 shadow-xl"/>
            </div>
            <div>
                <p>Username</p>
            </div>



        </main>
        </>
    )
}