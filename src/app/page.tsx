import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  title: string,
  curationId: string,
  articles: {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
    firstPublished: string
  }[];
}
export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
    const data = await res.json();
    const sections = data.data;
    const mainNews = sections[0].articles;

    
    const otherSections:IOtherSection[] = sections.slice(1);
    console.log(otherSections);
  return (
    <div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 container mx-auto">
        {/* News Section */}
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>
          <div className="grid gap-5 mt-5">
            {otherSections.map(os => <div className=" pb-2" key={os.curationId}>
            <h1 className="font-bold mb-4 border-b-2 border-red-700">{os.title}</h1>
            <div className="grid grid-cols-3 gap-5">
              {os.articles.map(news => <NewsCard key={news.id} news= {news}></NewsCard>)}
            </div>
          </div>)}
          </div>
        </div>
        {/* Most Read Section */}
        <div className="col-span-1 ">
          <MostRead></MostRead>
        </div>
      </div>

    </div>
  );
}
