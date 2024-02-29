import Link from "next/link"
import { poppins } from "./fonts"


export default function CreateWorkoutCard() {

    return (
        <>
        <div className="flex flex-col gap-3 justify-center border-2 rounded-3xl border-black bg-mygrey text-white p-3">
            <input type="text" placeholder="WORKOUT NAME" className="bg-black rounded-3xl p-3 placeholder-white font-medium text-xl border-2 black focus:outline-none focus:border-2 focus:border-white focus:placeholder-gray-600" />
            <div className="">
                <Link href="/workout-page-example">
                    <p className="text-black text-xl mx-2">CREATE</p>
                </Link>
            </div>
        </div>
        </>
    )
}



{/* <button className="border-2 border-black rounded-3xl p-3 m-2 bg-black">Create</button> */}