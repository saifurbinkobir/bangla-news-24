import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headlines{
    id: string,
    title: string
}
const Marquee = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await res.json();
    const headLines: Headlines[] = data.data;
    return (
        <div className=" bg-red-600 text-white my-3">
            <div className=" flex items-center container mx-auto">
            <div className="bg-red-800 p-1 font-bold">সর্বশেষ</div>
            <MarqueeText className="py-1" direction="right" duration={15}>
            {headLines.map((h) => 
            <Link key={h.id} href={`/news/${h.id}`}>
            <span>
                <span>{h.title}</span>
                <span className="mx-5">•</span>
                </span>
                </Link>)}
                </MarqueeText>
        </div>
        </div>
    );
};

export default Marquee;