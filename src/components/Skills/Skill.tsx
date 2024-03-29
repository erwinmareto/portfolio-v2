import Image from "next/image";

type SkillProps = {
  className?: string;
  image: string;
  title: string;
};

const Skill = ({ image, title }: SkillProps) => {
  return (
    <article className="relative flex justify-center border-y-2 border-black overflow-hidden py-4 md:py-8">
      <h2 className="text-4xl md:text-6xl z-10">{title}</h2>
      <Image
        className="absolute right-0 opacity-80 z-0"
        src={image}
        width={100}
        height={100}
        alt={title}
      />
    </article>
  );
};

export default Skill;
