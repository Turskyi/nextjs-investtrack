import Head from 'next/head';
import Link from 'next/link';
import { INSTAGRAM } from '../../../constants';

const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  return age;
};

export default function AboutUs() {
  const birthDate = '2008-04-05';
  const age = calculateAge(birthDate);

  return (
    <div className="bg-body background-color text-body color flex-grow p-5">
      <Head>
        <title>About Us - Empowering Beginner Investors</title>
        <meta
          name="description"
          content="Learn more about our platform, designed to assist beginner investors with tracking and managing their investments. Discover the story of Vitalii Khomenko, a young investment enthusiast, and Dmytro Turskyi, the developer behind the project."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <p className="mb-4 text-lg">
          Discover how InvestTrack can help you take control of your
          investments. Whether you&apos;re just starting out or looking for a
          simple tool to track your portfolio, InvestTrack is completely free
          and easy to use on both web and mobile.
        </p>
        <h1 className="mb-6 text-4xl font-bold">About Us</h1>
        <section className="mb-6">
          <p>
            Welcome to our platform, a powerful tool designed to assist beginner
            investors in tracking and managing their investments. This project
            is the brainchild of Vitalii Khomenko, a {age}-year-old investment
            enthusiast who was born on April 5, 2008. Despite his young age,
            Vitalii has shown a remarkable aptitude for investments, creating a
            comprehensive Google Sheets table to track his progress.
          </p>
          <p>
            Recognizing the potential to make this process even more efficient,
            Dmytro Turskyi, the husband of Vitalii&apos;s sister, stepped in to
            bring Vitalii&apos;s vision to life. As a developer, Dmytro built
            this project to replicate and expand upon the functionalities of
            Vitalii&apos;s Google Sheets table. The web version of this project
            includes authentication features, allowing anyone to create an
            account and manage their investments, whether they are purchased or
            not.
          </p>
          <p>
            This platform is not just a tool but a testament to the
            collaborative effort between Vitalii, who provided the business
            ideas and the necessary investment knowledge, and Dmytro, who
            implemented these ideas into a functional and user-friendly
            application. If a high school student can create and utilize such a
            powerful tool, so can any beginner investor.
          </p>
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
          <p className="text-lg mt-4">
            You can create a free account by visiting{' '}
            <Link
              className="text-accent hover:underline"
              href="https://invest.turskyi.com/sign-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              the sign-up page
            </Link>
            , or log in to your existing account via{' '}
            <Link
              className="text-accent hover:underline"
              href="https://invest.turskyi.com/sign-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              the sign-in page
            </Link>
            .
          </p>
          <p className="text-lg mt-4">
            You can also reach out or join our discussion on{' '}
            <Link
              className="text-accent hover:underline"
              href="https://t.me/+rkZH9QPzYOpjNTQy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </Link>
            , or visit{' '}
            <Link
              className="text-accent hover:underline"
              href="https://turskyi.com/#/support"
              target="_blank"
              rel="noopener noreferrer"
            >
              the developer’s support page
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
