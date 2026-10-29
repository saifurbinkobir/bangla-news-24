import React from 'react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 px-6">
      <div className="flex flex-col items-center text-center">
        {/* Animated Spinner */}
        <div className="relative w-20 h-20 mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-red-100" />
          {/* Spinning arc */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 border-r-rose-500 animate-spin" />
          {/* Inner pulse dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          </div>
          {/* Soft glow */}
          <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-red-400 to-rose-500 -z-10" />
        </div>

        {/* Bangla Text */}
        <h2 className="text-2xl sm:text-3xl font-bold text-red-900 mb-2">
          লোড হচ্ছে...
        </h2>
        <p className="text-red-700/70 text-base sm:text-lg leading-relaxed max-w-sm">
          অনুগ্রহ করে একটু অপেক্ষা করুন, আমরা আপনার জন্য সবকিছু প্রস্তুত করছি।
        </p>

        {/* Bouncing dots */}
        <div className="flex items-center gap-2 mt-6">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-bounce" />
        </div>
      </div>
    </div>
  )
};

export default LoadingPage;