import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
};

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  image,
  slug,
}: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${slug}`}>
        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-blue-600">{category}</span>

          <span className="text-gray-400">•</span>

          <span className="text-gray-500">{date}</span>
        </div>

        <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition group-hover:text-blue-600 sm:text-2xl">
          {title}
        </h3>

        <p className="line-clamp-2 text-sm leading-6 text-gray-600 sm:text-base">
          {excerpt}
        </p>

        <span className="mt-4 inline-block text-sm font-semibold text-gray-900">
          Read more 
        </span>
      </Link>
    </article>
  );
}