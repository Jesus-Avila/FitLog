import Image from "next/image";
import { poppins } from "./ui/fonts";
import WorkoutCard from "./ui/workout-card";
import CreateWorkoutCard from "./ui/create-workout-card";


async function getUsers() {
  const res = await fetch("http://localhost:3000/api", { cache: "no-cache" });
  const data = await res.json();
  console.log("data received", data);
  return data;
}

export default async function Home() {
  const users = await getUsers();
  return (
    <main className={`flex flex-col mb-20 p-4 ${poppins.className}`}>
       <div className="mb-1.5">
          <p>Hello world!</p>
        </div>
        <div className="mb-6">
          <h1 className="text-4xl font-medium antialised mb-4">Your Workouts</h1>
          <div className="flex flex-col gap-3.5">
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-medium antialised mb-4">Create Workout</h2>
          <CreateWorkoutCard />
        </div>


      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
}
