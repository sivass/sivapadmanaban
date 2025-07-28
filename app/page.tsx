import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mx-auto mt-10 space-y-4">
      <p>
        I love building clean, useful software for the web. I’m a self-taught
        developer with nearly 10 years of experience across e-commerce, payment
        systems, hotel bookings, and loan management.
      </p>
      <p>
        This is my digital space — where I share my work, notes, and thoughts
        around software, tech, and ideas.
      </p>
      <div className="flex w-full mx-auto mt-10 space-x-4 space-y-4">
        <p>Feel free to connect with me on:</p>
        <div className="flex space-x-4">
          <Link href="https://github.com/sivass">GitHub</Link>
          <Link href="https://www.linkedin.com/in/siva-padmanaban/">
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full mx-auto mt-10 space-y-4">
        <p>© Siva Padmanaban</p>
      </div>
    </div>
  );
}
