import Link from "next/link";
import { poppins } from "./fonts";
import { ChevronRightIcon } from "@heroicons/react/24/outline";




export default function ExerciseCard() {



    return (
        <>
        <div className={`flex flex-row border-2 border-black rounded-3xl bg-mygrey p-3.5 justify-between ${poppins.className}`}>
            <div className="flex flex-col ">
                <h2 className="text-3xl font-bold">Exercise 1</h2>
                <p className="pl-1 text-xl">Sets 3</p>
            </div>
            <div className="flex flex-col justify-center">
                <ChevronRightIcon  className="w-10 border-2 border-black rounded-full bg-white "/>
            </div>

        </div>
        </>
    )
}