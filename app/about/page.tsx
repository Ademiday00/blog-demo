import Navbar from "../components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
            About Seun Awosika
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Publisher, creative director, media professional and storyteller
            passionate about the power of ideas and meaningful communication.
          </p>
        </div>
      </section>

     
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          <div className="relative mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-3xl bg-gray-100">
              <img
                src="/images/media.png"
                alt="Seun Awosika"
                className="h-[450px] w-full object-cover sm:h-[550px]"
              />
            </div>
          </div>

          
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              The Publisher
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Stories. Ideas. Impact.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Seun Awosika is a publisher and creative director with
                experience in the broadcast media industry and a background
                spanning scripting, media production, presentation,
                reportorial work and media coaching.
              </p>

              <p>
                His professional experience spans publishing, creative
                direction, journalism, broadcasting and media production.
              </p>

              <p>
                Through this platform, Seun shares perspectives, stories,
                observations and ideas across media, journalism, publishing,
                culture and creativity.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://seunawosika.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Visit SeunAwosika.com
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <section className=" bg-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Areas of Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Media & Creative Work
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-bold text-gray-900">
                Media Production
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Experience in developing and producing media content for
                different audiences and platforms.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-bold text-gray-900">
                Publishing
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                A focus on publishing ideas, stories and information that
                inform, engage and connect with audiences.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-bold text-gray-900">
                Storytelling
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Using storytelling and communication to make ideas accessible,
                engaging and meaningful.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-bold text-gray-900">
                Scripting
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Developing scripts and written content for media and
                communication.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-bold text-gray-900">
                Presentation
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Communicating stories and ideas through confident and engaging
                presentation.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-bold text-gray-900">
                Media Coaching
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Helping people improve how they communicate, present and
                engage with audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Professional Journey
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            A career spanning publishing, broadcast media, journalism, creative
            direction and media production.
          </p>
        </div>

        <div className="mt-12 space-y-0">
          
          <div className="relative border-l border-gray-200 pb-12 pl-8 sm:pl-10">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-600 ring-1 ring-gray-200" />

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Publisher
                </h3>

                <p className="mt-1 font-medium text-gray-700">
                  seunawosika.com
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Full-time
                </p>
              </div>

              <div className="text-sm text-gray-500 sm:text-right">
                <p>Feb 2020 - Present</p>
                <p className="mt-1">Lagos State, Nigeria</p>
              </div>
            </div>
          </div>

          
          <div className="relative border-l border-gray-200 pb-12 pl-8 sm:pl-10">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-600 ring-1 ring-gray-200" />

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Creative Director
                </h3>

                <p className="mt-1 font-medium text-gray-700">
                  Platformdotcom Media
                </p>
              </div>

              <div className="text-sm text-gray-500 sm:text-right">
                <p>Nov 2012 - Present</p>
              </div>
            </div>
          </div>

          
          <div className="relative border-l border-gray-200 pb-12 pl-8 sm:pl-10">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-600 ring-1 ring-gray-200" />

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Executive Director
                </h3>

                <p className="mt-1 font-medium text-gray-700">
                  Sahara Weekly
                </p>
              </div>

              <div className="text-sm text-gray-500 sm:text-right">
                <p>Jan 2015 - Present</p>
              </div>
            </div>
          </div>

         
          <div className="relative border-l border-gray-200 pb-12 pl-8 sm:pl-10">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-600 ring-1 ring-gray-200" />

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Reporter
                </h3>

                <p className="mt-1 font-medium text-gray-700">
                  Core TV News
                </p>
              </div>

              <div className="text-sm text-gray-500 sm:text-right">
                <p>Jan 2014 - May 2014</p>
              </div>
            </div>
          </div>

          
          <div className="relative border-l border-gray-200 pl-8 sm:pl-10">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-600 ring-1 ring-gray-200" />

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Producer, Presenter and Reporter
                </h3>

                <p className="mt-1 font-medium text-gray-700">
                  Star 101.5 FM
                </p>
              </div>

              <div className="text-sm text-gray-500 sm:text-right">
                <p>Mar 2001 - Nov 2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Background
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Education & Professional Development
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-gray-600">
                Seun Awosika has a Higher National Diploma focused on
                Publishing and Journalism from Yaba College of Technology,
                alongside professional certifications that have contributed to
                his development across media, publishing and creative work.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Explore the stories and ideas.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
            Read the latest articles, perspectives and conversations from Seun
            Awosika.
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Explore Articles
          </Link>
        </div>
      </section>
    </main>
  );
}