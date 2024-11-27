"use client";

import { bgMapping } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";

const Details = () => {
  const params = useParams();

  return (
    <section
      className={cn(
        "min-h-screen flex flex-col gap-16 px-5 pt-16 md:px-24 md:py-16 lg:flex-row",
        `backdrop-blur-lg bg-opacity-55`,
        bgMapping[params.projectName as string]
      )}
    >
      <article className="flex flex-col items-start gap-4">
        <Image
          src={`/${params.projectName}.png`}
          width={550}
          height={300}
          alt="wihire"
          className="rounded-lg shadow-xl"
        />
        <div className="max-w-2xl flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl">Reminderoo</h1>
          <p className="text-lg md:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            quasi perspiciatis itaque nesciunt quod suscipit, officia sunt optio
            iste a ratione id ipsa libero animi. Vitae eveniet harum quo unde!
          </p>
        </div>
      </article>

      <div className=" flex-col flex gap-8">
        <article className="max-w-xl">
          <h3 className="font-bold text-xl mb-2 md:text-3xl">
            Why this project was made
          </h3>
          <p className="text-lg md:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            odio perferendis facere cupiditate qui quia quaerat, corrupti
            perspiciatis pariatur deserunt, repellat minima natus beatae
            delectus nesciunt, soluta animi maiores illo!
          </p>
          <p className="text-lg md:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            odio perferendis facere cupiditate qui quia quaerat, corrupti
            perspiciatis pariatur deserunt, repellat minima natus beatae
            delectus nesciunt, soluta animi maiores illo!
          </p>
        </article>
        <article className="max-w-xl">
          <h3 className="font-bold text-xl mb-2 md:text-3xl">What i learned</h3>
          <ul className="list-disc text-lg md:text-2xl">
            <li>
              <p>Lorem ipsum, dolor sit amet</p>
            </li>
            <li>
              <p>Lorem ipsum, dolor sit amet</p>
            </li>
            <li>
              <p>Lorem ipsum, dolor sit amet</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Details;
