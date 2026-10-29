
import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

      {/* First News */}
      <Link href={`/news/${firstNews.id}`} className="block h-full">
        <div className="card bg-base-100 h-full w-full overflow-hidden rounded-lg border border-gray-300">

          <figure className="relative aspect-video w-full">
            <Image
              src={firstNews.imageUrl}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              alt={firstNews.imageAlt || firstNews.title}
              className="object-cover"
              loading="eager"
            />
          </figure>

          <div className="card-body flex-1 gap-2 p-4">
            <p className="text-red-600">
              <small>{firstNews.category}</small>
            </p>

            <h2 className="card-title text-lg leading-6">
              {firstNews.title}
            </h2>

            <p className="text-sm leading-5 text-gray-600">
              {firstNews.description}
            </p>

            <p className="mt-auto pt-2 text-gray-400">
              <small>
                {new Date(firstNews.firstPublished).toLocaleString("bn-BD", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: "UTC",
                })}
              </small>
            </p>
          </div>
        </div>
      </Link>

      {/* Other News */}
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-300 bg-base-100">
        {otherNews.slice(0, 4).map((restNews) => (
          <Link
            key={restNews.id}
            href={`/news/${restNews.id}`}
            className="block border-b border-gray-300 px-3 py-3 last:flex-1 last:border-b-0"
          >
            <p className="mb-1 text-[11px] font-medium text-red-600">
              {restNews.category}
            </p>

            <h3 className="text-[15px] font-medium leading-5">
              {restNews.title}
            </h3>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default MainNews;
