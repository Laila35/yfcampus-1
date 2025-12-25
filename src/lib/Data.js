import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faFlask,
  faChalkboardTeacher,
  faGraduationCap,
  faBookOpen,
  faLaptop,
  faClipboardCheck,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export const chooseUs = [
  {
    id: 1,
    name: "Global Curriculum Experts",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    option:
      "Our tutors are knowledgeable about a wide range of international curricula, ensuring students receive relevant and comprehensive support in math.",
  },
  {
    id: 2,
    name: "Personalized Learning Plans",
    icon: <FontAwesomeIcon icon={faBookOpen} />,
    option:
      "Each student receives a tailored learning plan based on their unique strengths, weaknesses, and academic goals, no matter their location.",
  },
  {
    id: 3,
    name: "Online Convenience",
    icon: <FontAwesomeIcon icon={faLaptop} />,
    option:
      "Learn from anywhere with live, interactive sessions via Zoom, Teams, or Google Meet, utilizing our online whiteboard for effective problem-solving.",
  },
  {
    id: 4,
    name: "Exam-Focused Tutoring",
    icon: <FontAwesomeIcon icon={faClipboardCheck} />,
    option:
      "We specialize in preparing students for various standardized tests and local examinations, ensuring they are equipped for success in their math studies.",
  },
];

export const chooseUsScience = [
  {
    id: 1,
    name: "Global Science Curriculum Experts",
    icon: <FontAwesomeIcon icon={faMicroscope} />,
    option:
      "Our tutors are well-versed in various international science curricula, providing students with a deep understanding and relevant guidance in their studies.",
  },
  {
    id: 2,
    name: "Personalized Learning Plans",
    icon: <FontAwesomeIcon icon={faFlask} />,
    option:
      "Every student receives a custom-tailored learning plan to focus on their strengths and improve areas that need attention in their science education.",
  },
  {
    id: 3,
    name: "Online Convenience",
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
    option:
      "Study from anywhere with flexible, live sessions on Zoom, Teams, or Google Meet, offering convenience and effective learning tools.",
  },
  {
    id: 4,
    name: "Science Exam Preparation",
    icon: <FontAwesomeIcon icon={faClipboardList} />,
    option:
      "Our tutors specialize in preparing students for various science exams, ensuring they are confident and ready for their assessments.",
  },
];
