import Link from "next/link";
import Navbar from "./components/Navbar";
import { posts } from "./data/post";
import BlogCard from "./components/BlogCard";


export default function Home() {
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      
      <section className="relative -top-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Media • Publishing • Storytelling
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
              Stories, ideas and perspectives that matter.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Welcome to the official publication of Seun Awosika 
              exploring media, journalism, publishing, creativity and the
              stories that shape our world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Explore Articles
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                About Seun
              </Link>
            </div>
          </div>

          {/* Seun's Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[400px] w-full max-w-[420px] overflow-hidden rounded-3xl bg-gray-100 sm:h-[500px]">
              <img
                src="/images/media.png"
                alt="Seun Awosika"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 mb-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 text-right">
            Featured Story
          </p>
        </div>

        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group grid overflow-hidden rounded-3xl bg-gray-100 lg:grid-cols-2 "
        >
          <div className="relative min-h-[300px] sm:min-h-[400px]">
            <img
                src="/images/medai.jpeg"
                alt="Seun Awosika"
                className="h-full w-full object-cover"
              />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="mb-4 text-sm font-semibold text-blue-600">
              {featuredPost.category}
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {featuredPost.title}
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              {featuredPost.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <span>{featuredPost.author}</span>
              <span>•</span>
              <span>{featuredPost.date}</span>
            </div>

            <span className="mt-8 text-sm font-semibold text-blue-600">
              Read story 
            </span>
          </div>
        </Link>
      </section>

      {/* Latest Articles */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              From the Journal
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden text-sm font-semibold text-blue-600 sm:block"
          >
            View all 
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-10 block text-center text-sm font-semibold text-blue-600 sm:hidden"
        >
          View all articles 
        </Link>
      </section>

      {/* About Preview */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              About
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              About Seun Awosika
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Seun Awosika is a publisher and creative director with experience
              in broadcast media, scripting, media production and presentation,
              reportorial work, and media coaching.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block text-sm font-semibold text-blue-600"
            >
              Learn more about Seun 
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}