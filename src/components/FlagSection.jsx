import Link from 'next/link';

const countries = [
    { name: 'United Arab Emirates', image: '/Images/uae.png', link: '/ae/online-maths-tuition' },
    { name: 'Australia', image: '/Images/au.png', link: '/au/online-maths-tuition' },
    { name: 'Canada', image: '/Images/ca.png', link: '/ca/online-maths-tuition' },
    // { name: 'Hong Kong', image: '/Images/hk.png', link: '/hk/online-maths-tuition' },
    { name: 'India', image: '/Images/in.png', link: '/in/online-maths-tuition' },
    // { name: 'Malaysia', image: '/Images/my.png', link: '/my/online-maths-tuition' },
    { name: 'New Zealand', image: '/Images/nz.png', link: '/nz/online-maths-tuition' },
    // { name: 'Philippines', image: '/Images/ph.png', link: '/ph/online-maths-tuition' },
    // { name: 'Singapore', image: '/Images/sg.png', link: '/sg/online-maths-tuition' },
    { name: 'United Kingdom', image: '/Images/uk.png', link: '/uk/online-maths-tuition' },
    { name: 'United States', image: '/Images/us.png', link: '/us/online-maths-tuition' },
    // { name: 'South Africa', image: '/Images/sa.png', link: '/za/online-maths-tuition' },
];

const FlagSection = () => {
    return (
        <section className="mb-8">
            <p className="text-center text-sm text-gray-600 mb-7">
                Select your country to discover tailored Maths tuition just for you!
            </p>
            <div className="flex justify-center flex-wrap gap-6">
                {countries.map((country, index) => (
                    <Link aria-label='country ' className='flex flex-col items-center' href={country.link} key={index}>
                        <img
                            src={country.image}
                            alt={`${country.name} Flag`}
                            className="w-20 h-12 object-cover rounded border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                        <p className="text-teal-700 font-medium mt-2">{country.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FlagSection;
