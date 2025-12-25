import Link from "next/link";
import Image from "next/image";

const CountryCard = ({ countryName, flagImage, countryLink }) => {
    return (
        <Link aria-label="country link" href={countryLink}>
            <div className="p-3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-teal-500 hover:border-teal-700">
                {/* Country Flag or Image */}
                <div className="h-48 w-full relative">
                    <Image
                        src={flagImage} // Path to country flag or image
                        alt={countryName}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full rounded-md"
                    />
                </div>

                {/* Country Name and Button */}
                <div className="p-6 bg-teal-50">
                    <h3 className="text-2xl font-semibold text-teal-700 mb-2 group-hover:text-teal-900">
                        {countryName}
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Explore courses designed specifically for students in {countryName}.
                    </p>
                    <button aria-label="Learn more" className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-200">
                    Get More Info 
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;
