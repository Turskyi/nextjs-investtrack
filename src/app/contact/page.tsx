import Head from "next/head";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="bg-body background-color text-body color p-5">
      <Head>
        <title>Contact Us - Get in Touch</title>
        <meta
          name="description"
          content="Reach out to us through various platforms including Instagram, Facebook, LinkedIn, GitHub, email, or by visiting our address in North York, Ontario."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>
        <section className="mb-6">
          <p className="mb-4 text-lg">
            For inquiries or to connect with us, you can reach out through any
            of the following platforms:
          </p>
          <ul className="list-inside list-disc">
            <li className="mb-2">
              Instagram:{" "}
              <Link
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/vitalikhomenkoo/"
              >
                @vitalikhomenkoo
              </Link>
            </li>
            <li className="mb-2">
              Facebook:{" "}
              <Link
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/VitalKhomenko"
              >
                Vitalii Khomenko
              </Link>
            </li>
            <li className="mb-2">
              LinkedIn:{" "}
              <Link
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/vitaliikhomenko/"
              >
                Vitalii Khomenko
              </Link>
            </li>
            <li className="mb-2">
              GitHub:{" "}
              <Link
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Vitaliklisa"
              >
                @Vitaliklisa
              </Link>
            </li>
            <li className="mb-2">
              Email:{" "}
              <a
                className="text-accent hover:underline"
                href="mailto:vhomenko119@gmail.com"
              >
                vhomenko119@gmail.com
              </a>
            </li>
            <li className="mb-2">
              Address:{" "}
              <span className="text-accent">
                Harmony Village, Finch West Avenue, North York, Ontario, M9M
                0A3, Canada
              </span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
