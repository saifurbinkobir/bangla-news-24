
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );
  const data = await res.json();
  const news = data.data;
  if(!news){
    notFound();
  }

  return (
    <main className="mx-auto max-w-175 px-4 py-8">

      {/* Article Title */}
      <h1 className="mb-4 text-3xl font-bold leading-tight">
        {news.title}
      </h1>

      {/* Description */}
      <p className="mb-5 text-base leading-7 text-gray-600">
        {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
      </p>

      {/* Author and Date */}
      <div className="mb-8 border-y border-gray-200 py-3 text-sm text-gray-500">
        <span>{news.byline?.[0]?.name}</span>
        <span className="mx-2">•</span>
        <span>
          {new Date(news.firstPublished).toLocaleString("bn-BD", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </span>
      </div>

      {/* Article Body */}
      <article>
        {news.body?.map(
          (
            block: {
              type: string;
              text?: string;
              url?: string;
              width?: number;
              height?: number;
              altText?: string;
              caption?: string;
              copyrightHolder?: string;
            },
            index: number
          ) => {
            if (block.type === "image" && block.url) {
              return (
                <figure key={index} className="mb-7">
                  <Image
                    src={block.url}
                    alt={block.altText || news.title}
                    width={block.width || 800}
                    height={block.height || 450}
                    className="h-auto w-full rounded-md"
                  />
                  {block.caption && (
                    <figcaption className="mt-2 text-xs text-gray-500">
                      {block.caption}
                      {block.copyrightHolder &&
                        ` (${block.copyrightHolder})`}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (block.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="mb-4 mt-8 text-2xl font-bold"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "text") {
              return (
                <p
                  key={index}
                  className="mb-5 whitespace-pre-line text-lg leading-8 text-gray-800"
                >
                  {block.text}
                </p>
              );
            }

            return null;
          }
        )}
      </article>

      {/* Article Tags */}
      <div className="mt-10 flex flex-wrap gap-2 border-t border-gray-200 pt-5">
        {news.tags?.map((tag: string, index: number) => (
          <span
            key={index}
            className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

    </main>
  );
};

export default NewsDetails;
