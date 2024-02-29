import { ChevronLeftIcon, PlayCircleIcon } from "@heroicons/react/24/outline"
import { poppins } from "../ui/fonts"
import Link from "next/link"
import ExerciseCard from "../ui/exercise-card"



export default function WorkoutPage() {
    return (
        <>
        <main className={`flex flex-col mb-20 pb-5 ${poppins.className}`}>

            <div className="flex flex-col bg-black border-red-700 w-30 text-white p-5 gap-4 rounded-b-3xl">
                <div className="flex flex-row justify-between mb-2">
                    <Link href="/">
                        <ChevronLeftIcon className="w-10 cursor-pointer" />
                    </Link>
                    <button className="border-2 px-5 rounded-3xl text-lg">Log</button>
                </div>

                <h1 className="text-4xl font-medium antialised">WORKOUT NAME</h1>
                <div className="flex flex-row justify-between text-lg items-center">
                    <p>5 Exercises</p>
                    <div className="flex flex-row items-center gap-1.5">
                        <PlayCircleIcon className="w-10" />
                        <p>Time: 00:00:00</p>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <ExerciseCard />
            </div>

        </main>
        </>
    )
}