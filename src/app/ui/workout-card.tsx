'use client'

import { poppins } from "./fonts";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ClockIcon } from "@heroicons/react/24/outline";


export default function WorkoutCard() {
  return (
    <>
      <div className={`flex justify-between bg-black rounded-3xl px-5 py-3 text-white ${poppins.className}`}>
        <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">CHEST DAY</h2>
            <div className="flex gap-1.5">
                <p>Start Workout</p>
                <ArrowRightIcon className="w-5" />
            </div>
        </div>
        <div className="text-right flex flex-col-reverse gap-0.5">
            <div className="flex gap-1.5">
                <ClockIcon className="w-5" />
                <p>22.01.2023</p>
            </div>
            <p>5 Exercises</p>
        </div>
      </div>
    </>
  );
}
