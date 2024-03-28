import Image from "next/image";

type Props = {};
const About = (props: Props) => {
  return (
    <section className="relative flex flex-col gap-5 bg-neutral-950 text-white px-5 py-28">
      <h1 className="text-8xl z-10">
        About <br /> Me.
      </h1>
      <article className="flex justify-center overflow-x-hidden">
        <p className="max-w-2xl text-2xl z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab
          dignissimos libero nesciunt labore quibusdam sapiente eos nisi non.
          Eligendi, reiciendis vel. Mollitia, et reiciendis consequatur ipsam
          voluptatibus tempore a.
        </p>
        <Image
          className="absolute -top-32 right-0"
          src={"/bw-pic.png"}
          width={500}
          height={500}
          alt="profile-picture"
        />
      </article>
    </section>
  );
};
export default About;
