import React from "react";
import { ClipboardCheck, Target, LineChart, CheckCircle2 } from "lucide-react";

const icons = [ClipboardCheck, Target, LineChart, CheckCircle2];

const WhyChooseAQA = ({ point1, point2, point3, point4 }) => {
    const points = [point1, point2, point3, point4];

    return (
        <section className="bg-white text-gray-900 p-8 md:p-10 rounded-2xl shadow-xl mt-12 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                <span className="text-gray-800">Why Students Choose</span>{" "}
                <span className="text-blue-600">Our AQA Exam Preparation</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {points.map((text, idx) => (
                    <Feature key={idx} icon={icons[idx]} text={text} />
                ))}
            </div>
        </section>
    );
};

const Feature = ({ icon: Icon, text }) => (
    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-out">
        <div className="text-blue-600 flex-shrink-0 bg-blue-100 p-2 rounded-lg">
            <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
);

export default WhyChooseAQA;
