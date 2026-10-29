import Image from 'next/image';
import Link from 'next/link';
interface News{
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
    firstPublished: string
}

const NewsCard = ({news}:{news:News}) => {
    return (
        <Link href={`/news/${news.id}`}>
          <div className="card bg-base-100  shadow-sm">
                <figure>
                  <Image
                    src={news.imageUrl}
                    height={600}
                    width={600}
                    alt={news.imageAlt}
                    loading="eager"
                  />
                </figure>
                <div className="card-body">
                    <p className="text-red-600"><small>{news.category}</small></p>
                  <h2 className="card-title">{news.title}</h2>
                  <p>{news.description}</p>
                  <p>
                    <small>
                      {new Date(news.firstPublished).toLocaleString("bn-BD", {
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
        
    );
};

export default NewsCard;