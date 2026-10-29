import Link from 'next/link'
import { Noto_Sans_Bengali } from 'next/font/google'


export default function NotFound() {
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 px-6`}
    >
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[10rem] sm:text-[12rem] font-black leading-none bg-gradient-to-b from-red-500 to-rose-700 bg-clip-text text-transparent select-none">
            ৪০৪
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-red-400 to-rose-500 -z-10" />
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center ring-8 ring-red-50">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-3">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>
        <p className="text-red-700/70 text-lg mb-8 leading-relaxed">
          ওহো! আপনি যে পেজটি খুঁজছেন সেটি নেই, সরিয়ে ফেলা হয়েছে, অথবা
          সাময়িকভাবে পাওয়া যাচ্ছে না।
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:from-red-600 hover:to-rose-700 transform hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          হোমে ফিরে যান
        </Link>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="w-2 h-2 rounded-full bg-red-300" />
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span className="w-2 h-2 rounded-full bg-red-500" />
        </div>
      </div>
    </div>
  )
}