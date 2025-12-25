"use client";
import React, { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import PhoneInput from "react-phone-input-2";
import countriesList from "@/lib/countries.json";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import countries from "i18n-iso-countries";
import { FaEnvelope, FaRegComment, FaUser } from "react-icons/fa";
import axios from "axios";
import "dotenv/config";
import { useRouter } from "next/navigation";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
async function getIP() {
  try {
    const res = await fetch(
      `https://ipinfo.io/?token=${process.env.NEXT_PUBLIC_IP_TOKEN}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching IP data:", error);
    return null;
  }
}

const Register = () => {
  const [defaultCountry, setDefaultCountry] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("");
  const [ip, setIp] = useState("");
  const [region, setRegion] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [courses, setCourses] = useState([]);
  const [id, setId] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    contactTime: "",
    contactMethod: "",
    studentName: "",
    studentGender: "",
    studentAge: "",
    preferredCourse: [],
    classTiming: "",
    specialRequirements: "",
  });

  // handle email and message

  const handleMessage = async (data) => {
    const response = await axios.post("/api/first-response", data);
    console.log("mesage sending reposne is ", response);
  };
  const handleSecondFormMessage = async (data) => {
    const response = await axios.post("/api/second-response", data);
  };

  const submitContact = async (data, resetForm) => {
    setLoading(true);
    try {
      const payload = {
        FULL_NAME: data.name,
        EMAIL: data.email,
        PHONE_NO: `+${data.phone}`,
        REMARKS: data.message,
        COUNTRY: defaultCountry, // Use auto-detected country instead of form field
        STATE: region,
        LEAD_IP: ip,
        REQUEST_FORM: 16,
      };

      const response = await axios.post(`/api/leadsform`, payload);
      setTimeout(() => handleMessage(response.data.data), 0);
      resetForm();
      router.push("/thank-you");
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(
        err?.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  // // Fetch courses from backend
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await axios.get("/api/courses/get-data"); // Update endpoint as needed
  //       setCourses(response.data.courses);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const handleCheckboxChange = (course) => {
    const currentIndex = formData.preferredCourse.indexOf(course.COURSE_ID_PK);
    const newPreferredCourses = [...formData.preferredCourse];

    if (currentIndex === -1) {
      newPreferredCourses.push(course.COURSE_ID_PK); // Store course ID
    } else {
      newPreferredCourses.splice(currentIndex, 1);
    }

    setFormData({ ...formData, preferredCourse: newPreferredCourses });
    setShowCheckboxes(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting submission
    setError(""); // Clear any existing error messages before submission
    const dataToSubmit = {
      ...formData,
      id,
    };
    try {
      const response = await axios.post(
        "/api/leads-additional-info",
        dataToSubmit
      );
      handleSecondFormMessage(response.data.updatedData);
      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } catch (error) {
      toast.error("Error in submitting data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const ipInfo = await getIP();
        if (ipInfo && ipInfo.country) {
          const countryCode = ipInfo.country.toUpperCase();
          const countryName = countries.getName(countryCode, "en");
          const matchedCountry = countriesList.countries.find(
            (country) =>
              country.short_name.toLowerCase() === countryName.toLowerCase()
          );
          if (matchedCountry) {
            setDefaultCountry(matchedCountry.country_id);
            setPhoneCountryCode(countryCode.toLowerCase());
            setIp(ipInfo?.ip);
            setRegion(ipInfo?.region);
          }
        }
      } catch (error) {
        console.error("Failed to fetch IP information:", error);
      }
    };
    fetchIP();
  }, []);

  return (
    <>
      <ToastContainer />

      {!formSubmitted ? (
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
          }}
          enableReinitialize
          onSubmit={(values, actions) => {
            submitContact(values, actions.resetForm);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email().required("Email is required"),
            phone: Yup.string().required("Phone number is required"),
            message: Yup.string(),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              setFieldValue,
            } = props;
            return (
              <Form>
                {/* Name Field */}
                <div className="mb-4">
                  <div className="relative flex items-center">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full pl-10 py-[0.6rem] px-4 rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-black transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <div className="relative flex items-center">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full pl-10 py-[0.6rem] px-4 rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-black transition-all"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="mb-4 relative flex items-center">
                  <PhoneInput
                    country={phoneCountryCode || "us"}
                    placeholder="Phone Number"
                    value={values.phone}
                    onChange={(phone) => setFieldValue("phone", phone)}
                    containerStyle={{ width: "100%" }}
                    inputStyle={{
                      width: "100%",
                      paddingTop: "1.3rem",
                      paddingBottom: "1.3rem",
                      paddingLeft: "48px",
                      paddingRight: "16px",
                      borderRadius: "0.375rem",
                      border: "0.5px solid #D1D5DB",
                      boxSizing: "border-box",
                    }}
                    buttonStyle={{
                      backgroundColor: "white",
                      borderRight: "1px solid #d1d1d1",
                    }}
                    aria-describedby="phone-number"
                  />
                  {errors.phone && touched.phone && (
                    <div className="text-red-500 mt-2">{errors.phone}</div>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-4 relative flex items-center">
                  <FaRegComment className="absolute left-4 top-1/3 transform -translate-y-1/2 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full pl-12 py-2 px-4 rounded-md bg-grey border border-grey focus:bg-transparent placeholder:text-black"
                  />
                </div>

                <button
                  aria-label="Submit"
                  type="submit"
                  className="w-full p-2 mt-1 mb-2 font-semibold bg-teal-700 text-white rounded hover:bg-teal-800"
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <form className="form">
          {/* Additional fields */}
          <div className="flex flex-col gap-6 mb-8">
            <div className="relative flex flex-col">
              <label
                htmlFor="contactTime"
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                Best Time to Contact
              </label>
              <input
                type="datetime-local"
                id="contactTime"
                name="contactTime"
                placeholder="Best Time to Contact"
                className="w-full py-3 pl-4 pr-4 text-[13px] rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-gray-400"
                value={formData.contactTime}
                onChange={(e) =>
                  setFormData({ ...formData, contactTime: e.target.value })
                }
              />
            </div>

            <div className="relative flex flex-col">
              <label
                htmlFor="contactMethod"
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                Preferred Way to Contact
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                aria-label="Contact Method"
                className="w-full py-3 pl-4 pr-4 text-[13px] rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-gray-400"
                value={formData.contactMethod}
                onChange={(e) =>
                  setFormData({ ...formData, contactMethod: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Email">Email</option>
              </select>
            </div>

            <div className="relative flex flex-col">
              <label
                htmlFor="studentName"
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                Student's Name
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                placeholder="Student's Name"
                value={formData.studentName}
                onChange={(e) =>
                  setFormData({ ...formData, studentName: e.target.value })
                }
                className="w-full py-3 pl-4 pr-4 text-[13px] rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-gray-400"
              />
            </div>

            <div className="relative flex flex-col">
              <label
                htmlFor="studentGender"
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                Student's Gender
              </label>
              <select
                id="studentGender"
                name="studentGender"
                aria-label="Select Gender"
                value={formData.studentGender}
                onChange={(e) =>
                  setFormData({ ...formData, studentGender: e.target.value })
                }
                className="w-full py-3 pl-4 pr-4 text-[13px] rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-gray-400"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="relative flex flex-col">
              <label
                htmlFor="studentDOB"
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                Student's Age
              </label>
              <input
                type="text"
                id="studentDOB"
                name="studentDOB"
                value={formData.studentAge}
                onChange={(e) => {
                  const value = e.target.value;

                  // Inline validation: Only allow numbers
                  if (/^\d*$/.test(value)) {
                    setFormData({ ...formData, studentAge: value });
                    setError(""); // Clear error if valid
                  } else {
                    setError("Please enter a valid number"); // Set error if not a number
                  }
                }}
                placeholder="Student's age"
                className="w-full py-3 pl-4 pr-4 text-[13px] rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-gray-400"
              />

              {/* Error message display */}
              {error && (
                <span className="text-red-500 text-xs mt-1">{error}</span>
              )}
            </div>

            <div className="relative flex flex-col">
              <label
                htmlFor="preferredCourse"
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                Preferred Courses
              </label>
              <div
                className={`cursor-pointer text-black text-sm border rounded-md p-2 border-gray-300 bg-white`}
                onClick={toggleCheckboxes}
              >
                {"Select preferred courses"}
              </div>

              {showCheckboxes && (
                <div
                  className="absolute z-10 mt-2 bg-white border rounded-md shadow-md p-4"
                  style={{ top: "50px", width: "250px" }}
                >
                  {courses.map((course) => (
                    <div
                      key={course.COURSE_ID_PK}
                      className="flex items-center hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={`course-${course.COURSE_ID_PK}`}
                        checked={formData.preferredCourse.includes(
                          course.COURSE_ID_PK
                        )}
                        onChange={() => handleCheckboxChange(course)}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`course-${course.COURSE_ID_PK}`}
                        className="text-sm text-gray-700"
                      >
                        {course.COURSE_NAME}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex flex-col">
              <label
                htmlFor="classTiming"
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                Class Timing
              </label>
              <input
                type="text"
                id="classTiming"
                name="classTiming"
                placeholder="e.g., Morning 9-11 AM"
                className="w-full py-3 pl-4 pr-4 text-[13px] rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-gray-400"
                value={formData.classTiming}
                onChange={(e) =>
                  setFormData({ ...formData, classTiming: e.target.value })
                }
              />
            </div>

            <div className="relative flex flex-col">
              <label
                htmlFor="specialRequirements"
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                Special Requirements
              </label>
              <input
                type="text"
                id="specialRequirements"
                name="specialRequirements"
                className="w-full py-3 pl-4 pr-4 text-[13px] rounded-md bg-grey border border-grey focus:border-blue-500 focus:ring-0 focus:bg-white placeholder:text-gray-400"
                value={formData.specialRequirements}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    specialRequirements: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              aria-label="Submit Additional info"
              onClick={handleSubmit}
              type="submit"
              className="w-full p-3 font-semibold bg-gradient-to-r from-[#003366] to-[#005599] text-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#002244] hover:to-[#003366] transition-all duration-500 ease-in-out transform hover:-translate-y-1"
            >
              Submit Additional Info
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Register;