export default function ClientFeedback() {
  const ratings = [
    { stars: 5, percent: 85 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 },
  ];

  return (
    <section className="bg-[#f8faf8]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">
            Client Feedback Summary
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            An overview of how businesses rate Victor & Co. based on service
            quality, reliability, and operational efficiency.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: BAR CHART */}
          <div className="space-y-5">
            {ratings.map((item) => (
              <div key={item.stars} className="flex items-center gap-4">
                
                {/* STAR LABEL */}
                <div className="w-12 text-sm font-semibold text-gray-700">
                  {item.stars} ★
                </div>

                {/* BAR */}
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>

                {/* PERCENT */}
                <div className="w-12 text-sm text-gray-600">
                  {item.percent}%
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: SUMMARY TEXT */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              What Clients Appreciate
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Most clients rate Victor & Co. highly for reliable execution,
              transparent documentation, and responsive coordination across
              logistics and infrastructure services.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Consistent 4–5 star feedback reflects long-term partnerships and
              trust built through operational excellence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
