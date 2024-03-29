import Link from "next/link";

const Contacts = () => {
  return (
    <>
      <section className="flex flex-col px-5 pt-32 gap-16 md:px-24 md:py-32">
        <div>
          <h1 className="text-5xl md:text-8xl">Get in Touch</h1>
          <h1 className="text-5xl md:text-8xl text-right">With Me.</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h2>
            <Link
              className="text-2xl underline md:text-4xl lg:text-6xl hover:no-underline"
              href="mailto:erwinmaretow@gmail.com"
            >
              erwinmaretow@gmail.com
            </Link>
          </h2>
          <h2 className="md:text-right">
            <Link
              className="text-2xl md:text-4xl lg:text-6xl hover:underline"
              href="mailto:erwinmaretow@gmail.com"
            >
              Resume
            </Link>
          </h2>
        </div>
      </section>
    </>
  );
};
export default Contacts;
