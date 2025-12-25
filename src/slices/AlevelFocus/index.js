const AlevelFocus = ({ slice }) => {
    const focusPoints = slice.primary.focus_points.map((i) => i.point);
    
    return (
        <section className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl   font-bold text-gray-900 mb-4">
                    {slice.primary.heading}
                </h2>
                <div className="w-20 h-1 bg-teal-500 rounded-full mx-auto mb-6"></div>
                <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
                    {slice.primary.intro[0].text}
                </p>
                <p className="text-sm sm:text-base text-teal-600 font-medium max-w-2xl mx-auto">
                    {slice.primary.subline[0].text}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {focusPoints.map((point, index) => (
                    <div
                        key={index}
                        className="bg-teal-50 rounded-xl p-5 sm:p-6 border border-transparent"
                    >
                        <p className="text-gray-800 font-medium text-sm sm:text-base leading-relaxed">
                            {point}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AlevelFocus;