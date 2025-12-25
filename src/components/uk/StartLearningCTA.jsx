import { Button } from "../ui/button";
import { Mail, PhoneCall } from "lucide-react";
const StartLearningCTA = ({ title, desc, number, email, btn_txt }) => {
    const phoneNumber = number.replace(/\D/g, "");
    return (
        <section className="max-w-6xl mx-auto my-20 px-6 md:px-10 py-12   bg-gray-50">
            <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-3xl font-semibold leading-tight">
                    {title}
                </h2>
                <p className="max-w-2xl mx-auto">{desc}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                    <a
                        href={`https://wa.me/${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2  font-semibold hover:underline underline-offset-4 transition"
                    >
                        <PhoneCall className="w-5 h-5 text-white opacity-90" />
                        {number}
                    </a>
                    <span className="hidden sm:block w-px h-6 bg-white/30" />
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2  font-semibold hover:underline underline-offset-4 transition"
                    >
                        <Mail className="w-5 h-5 text-white opacity-90" />
                        {email}
                    </a>
                </div>
                <div className="mt-10 flex justify-center">
                    <a href="/book-trial">
                        <Button className=" bg-teal-900 font-semibold hover:bg-teal-800 px-8 py-3 rounded-xl shadow-md transition-all">
                            {btn_txt}
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StartLearningCTA;
