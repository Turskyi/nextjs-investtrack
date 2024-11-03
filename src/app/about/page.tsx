import Head from "next/head";
import Link from "next/link";
import { INSTAGRAM } from "../../../constants";

export default function AboutUs() {
  return (
    <div className="bg-body background-color text-body color p-5">
      <Head>
        <title>
          {/* TODO: compose title, for example "About Us - Something something..."*/}
        </title>
        <meta
          name="description"
          //   TODO: compose content, for example "content="Learn more about Vitalii Khomenko, his journey, and the story behind ....""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="mb-6 text-4xl font-bold">About Us</h1>
        <section className="mb-6">
          {/* TODO: compose content about Vitalii Khomenko and his passion to investments even though he is so young and he was born in April 5, 2008. And few words about the husband of his sister (me the developer) Dmytro Turskyi, who build this project for him, so it will be easier to work with investments rather than just in google sheets. */}
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
          <p className="text-lg">
            For inquiries, please reach out to Vitalii Khomenko via
            Instagram:&nbsp;
            <Link
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href={INSTAGRAM}
            >
              @vitalikhomenkoo
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
