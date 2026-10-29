import Link from "next/link";

interface MostReadNews{
    title: string,
    id: number
}
const MostRead = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const news:MostReadNews[] = data.data;
    return (
        <div className="card p-5 bg-base-100 border border-gray-300">
            <h1 className="font-bold text-[#181818] mb-3">সর্বাধিক পঠিত</h1>
            <div className="grid gap-3">
                {news.map((n, i) => 
                <Link href={`/news/${n.id}`} key={n.id}>
                    <div >
                        <h2><span className="text-red-600 pr-2 text-1xl font-bold">{i + 1}</span>{n.title}</h2>
                    </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default MostRead;