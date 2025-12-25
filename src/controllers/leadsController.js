import { NextResponse } from "next/server";
import LeadsForm from "@/models/LeadsForm";
import { transporter } from "../config/nodemailer";
import axios from "axios";
export const handleLeadsSubmit = async (req) => {
  const {
    FULL_NAME,
    EMAIL,
    PHONE_NO,
    REMARKS,
    COUNTRY,
    STATE,
    LEAD_IP,
    REQUEST_FORM,
  } = await req.json();

  // Check for empty fields
  if (
    [
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
    ].some((field) => !field)
  ) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // Create new form submission
  let newFormData;
  try {
    newFormData = await LeadsForm.create({
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
      WHATSAPP_STATUS: "no response",
    });

    if (!newFormData) throw new Error("Form creation failed.");

    // Attempt to sync with Oracle
    try {
      const response = await newFormData.syncWithOracle();
      console.log("Data successfully synced with Oracle.");
    } catch (oracleError) {
      console.error("Oracle sync failed:", oracleError.message);
      // The cron job will handle resyncing unsynced leads later
    }

    // Send success response to frontend
    return NextResponse.json(
      {
        message: "Your form has been successfully submitted.",
        success: true,
        data: {
          id: newFormData._id,
          LEAD_ID: newFormData.LEAD_ID,
          FULL_NAME,
          EMAIL,
          PHONE_NO,
          REMARKS,
          COUNTRY,
          STATE,
          LEAD_IP,
          REQUEST_FORM,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Something went wrong while submitting your form. Please try again later.",
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

// handle message and email sending
const sendWhatsAppMessage = async (phone) => {
  return await axios
    .post("https://waserver.pro/api/create-message", {
      appkey: "0497923c-a9e1-48bb-94ea-4373535379b5",
      authkey: "nFMsTFQPQedVPNOtCrjjGvk5xREsJq2ClbU79vFNk8NlgEb9oG",
      to: phone,
      template_id: "b6ac16bd-17ef-46c8-9288-fb35534a9651",
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(`WhatsApp message failed: ${error.message}`);
    });
};

// Function to send email notifications
const sendEmail = async (mailOptions) => {
  try {
    const response = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email: " + error.message);
  }
};

export const handleMessageSending = async (req) => {
  const {
    LEAD_ID,
    FULL_NAME,
    EMAIL,
    PHONE_NO,
    REMARKS,
    COUNTRY,
    STATE,
    LEAD_IP,
    REQUEST_FORM,
  } = await req.json();

  const errors = [];

  // Send WhatsApp message
  try {
    await sendWhatsAppMessage(PHONE_NO);
    await LeadsForm.updateOne(
      { LEAD_ID: LEAD_ID },
      { WHATSAPP_STATUS: "Message sent successfully" }
    );
  } catch (error) {
    await LeadsForm.updateOne(
      { LEAD_ID: LEAD_ID },
      { WHATSAPP_STATUS: error.message }
    );
    errors.push(error.message);
  }

  // Set up email options for admin notification
  const MailOptions = {
    from: "admin@yfcampus.com",
    to: "yfcampus@gmail.com",
    replyTo: EMAIL,
    subject: "New Form Submission",
    html: `<h1>New Form Submission</h1>
          <p><strong>Full Name:</strong> ${FULL_NAME}</p>
          <p><strong>Email:</strong> ${EMAIL}</p>
          <p><strong>Phone Number:</strong> ${PHONE_NO}</p>
          <p><strong>Country:</strong> ${COUNTRY}</p>
          <p><strong>State:</strong> ${STATE}</p>
          <p><strong>Remarks:</strong> ${REMARKS}</p>
          <p><strong>IP Address:</strong> ${LEAD_IP}</p>
          <p><strong>Request Form:</strong> ${REQUEST_FORM}</p>`,
  };

  // Reply email options for user confirmation
  const ReplyMailOptions = {
    from: "admin@yfcampus.com",
    to: EMAIL,
    subject: "Schedule for Tuition Classes - yfcampus.com",
    html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Future Campus - Free Trial Class</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <p>Assalam o Alaikum, <strong>${FULL_NAME}</strong>,</p>
    <p>Thank you for reaching out to <strong>Your Future Campus</strong>. We’re excited to help you achieve your academic goals with our personalized tuition classes.</p>
    <p>To schedule your free trial class, kindly let us know when you're available for a call so we can set up your appointment. You can reply to this email with the best time and preferred method of contact, either phone or WhatsApp.</p>
    <p>Our highly qualified instructors are available 24/7, offering courses in subjects like:</p>
    <ul>
        <li><strong>Mathematics</strong></li>
        <li><strong>Science</strong></li>
        <li><strong>English</strong></li>
        <li><strong>Computer Studies</strong></li>
        <li><strong>Specialized Computer Courses</strong></li>
    </ul>
    <p>Classes are available in multiple languages, and all sessions are conducted via Zoom or Teams for your convenience.</p>
    <p>If you have any questions or would like to confirm your appointment, feel free to reply to this email or reach out to us directly:</p>
    <p><strong>Contact Information:</strong></p>
    <ul>
        <li>UK: +447532792318</li>
        <li>AU: +61 480 050048</li>
        <li>US: +1 914 2791693</li>
        <li><strong>Email:</strong> <a href="mailto:admin@yfcampus.com">admin@yfcampus.com</a></li>
    </ul>
    <p>We look forward to speaking with you and supporting your educational journey, InshaAllah.</p>
    <p>Best Regards,<br>
    Your Future Campus Team<br>
    <a href="mailto:admin@yfcampus.com">admin@yfcampus.com</a>
    </p>
</body>
</html>`,
  };

  // Send emails
  try {
    await sendEmail(MailOptions);
  } catch (error) {
    errors.push(`Email to admin failed: ${error.message}`);
  }

  try {
    await sendEmail(ReplyMailOptions);
  } catch (error) {
    errors.push(`Reply email failed: ${error.message}`);
  }

  // Construct the response message
  const responseMessage =
    errors.length > 0
      ? `Data saved, but there were some issues: ${errors.join(", ")}`
      : "Data saved successfully, and messages sent!";

  // Return the final response
  return NextResponse.json(
    { message: responseMessage },
    { status: errors.length > 0 ? 400 : 201 }
  );
};

export const handleLeadsAdditionalData = async (req) => {
  try {
    // Parse the incoming JSON body
    const {
      id,
      contactTime,
      contactMethod,
      studentName,
      studentGender,
      studentAge,
      preferredCourse,
      classTiming,
      specialRequirements,
    } = await req.json();

    // Ensure all required fields are present
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    // Perform the update operation and wait for the result
    const leadsTable = await LeadsForm.findByIdAndUpdate(
      id,
      {
        CONTATCT_TIME: contactTime,
        CONTACT_METHOD: contactMethod,
        STUDENT_NAME: studentName,
        STUDENT_GENDER: studentGender,
        STUDENT_AGE: studentAge,
        PREFERRED_COURSES: preferredCourse,
        CLASS_TIMING: classTiming,
        SPECIAL_REQUIREMENTS: specialRequirements,
      },
      { new: true }
    ); // Use `new: true` to return the updated document

    // If no lead is found or update failed, return a 404 response
    if (!leadsTable) {
      return NextResponse.json(
        { message: "Lead not found or update failed" },
        { status: 404 }
      );
    }

    // Return the updated data as part of the response
    return NextResponse.json(
      {
        message: "Your request was processed successfully",
        updatedData: leadsTable, // Send the updated data back to the frontend
      },
      { status: 200 }
    );
  } catch (error) {
    // Log the error and return a 500 response
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { message: "Error in processing your request" },
      { status: 500 }
    );
  }
};

export const handleSecondMessageSending = async (req) => {
  const {
    PHONE_NO,
    CONTATCT_TIME,
    CONTACT_METHOD,
    STUDENT_NAME,
    STUDENT_GENDER,
    STUDENT_AGE,
    PREFERRED_COURSES,
    CLASS_TIMING,
    SPECIAL_REQUIREMENTS,
  } = await req.json();
  const appKey = getAppKey(PHONE_NO);

  // Message to send via WhatsApp
  const message = `
    Assalam o Alaikum ${STUDENT_NAME},

Thank you for filling out the additional information with Your Future Campus! We’re delighted to assist you on your educational journey.

Here are the details you provided:

Preferred Contact Time: ${CONTATCT_TIME}
Contact Method: ${CONTACT_METHOD}
Student's Name: ${STUDENT_NAME}
Gender: ${STUDENT_GENDER}
Age: ${STUDENT_AGE}
Preferred Course: ${PREFERRED_COURSES}
Class Timing: ${CLASS_TIMING}
Special Requirements: ${SPECIAL_REQUIREMENTS || "None"}
Our qualified teachers are ready to help you 24/7 via Zoom or Teams.

We look forward to welcoming you to our classes, InshaAllah!

Best Regards,
Your Future Campus Team
   `;

  const errors = [];

  // Send WhatsApp message
  try {
    await sendWhatsAppMessage(PHONE_NO, appKey, message);
  } catch (error) {
    errors.push(error.message);
  }
};

// fetch leadsdata
export const fetchLeadsData = async (req) => {
  try {
    // Fetch all leads from the database
    const leads = await LeadsForm.find().sort({ _id: -1 });
    // No filters, just return all leads

    if (leads.length === 0) {
      return NextResponse.json({ message: "No leads found" }, { status: 404 });
    }

    // Return the fetched leads data
    return NextResponse.json(
      {
        message: "Leads fetched successfully",
        data: leads,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { message: "Error fetching leads. Please try again later." },
      { status: 500 }
    );
  }
};

// fetch single leadsdata
export const fetchSingleLeadData = async (req) => {
  try {
    const { id } = await req.json();

    // Fetch all leads from the database
    const lead = await LeadsForm.findById(id); // No filters, just return all leads

    if (!lead) {
      return NextResponse.json({ message: "No lead found" }, { status: 404 });
    }

    // Return the fetched leads data
    return NextResponse.json(
      {
        message: "Leads fetched successfully",
        data: lead,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching lead:", error);
    return NextResponse.json(
      { message: "Error fetching leads. Please try again later." },
      { status: 500 }
    );
  }
};

export const deleteLead = async (req) => {
  try {
    const { id } = await req.json(); // Parse the incoming request JSON

    if (!id) {
      return new Response(JSON.stringify({ message: "Lead ID is required" }), {
        status: 400,
      });
    }

    // Attempt to find and delete the lead by ID
    const lead = await LeadsForm.findByIdAndDelete(id);

    if (!lead) {
      return new Response(JSON.stringify({ message: "Lead not found" }), {
        status: 404,
      });
    }

    // If lead is deleted, return success message
    return new Response(
      JSON.stringify({ message: "Lead deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting lead:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
};

// update leads

export const updateLead = async (req) => {
  try {
    // Parse the incoming JSON body
    const {
      id,
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      STATE,
      REQUEST_FORM,
      CONTACT_METHOD,
      STUDENT_NAME,
      STUDENT_GENDER,
      STUDENT_AGE,
      PREFERRED_COURSES,
      CLASS_TIMING,
      SPECIAL_REQUIREMENTS,
    } = await req.json();

    // Ensure all required fields are present
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    // Perform the update operation and wait for the result
    const leadsTable = await LeadsForm.findByIdAndUpdate(
      id,
      {
        FULL_NAME,
        EMAIL,
        PHONE_NO,
        REMARKS,
        COUNTRY,
        STATE,
        REQUEST_FORM,
        CONTACT_METHOD,
        STUDENT_NAME,
        STUDENT_GENDER,
        STUDENT_AGE,
        PREFERRED_COURSES,
        CLASS_TIMING,
        SPECIAL_REQUIREMENTS,
      },
      { new: true }
    ); // Use `new: true` to return the updated document

    // If no lead is found or update failed, return a 404 response
    if (!leadsTable) {
      return NextResponse.json(
        { message: "Lead not found or update failed" },
        { status: 404 }
      );
    }

    // Optionally, log the updated data
    console.log("Updated leads table data:", leadsTable);

    // Return the updated data as part of the response
    return NextResponse.json(
      {
        message: "Your request was processed successfully",
        updatedData: leadsTable, // Send the updated data back to the frontend
      },
      { status: 200 }
    );
  } catch (error) {
    // Log the error and return a 500 response
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { message: "Error in processing your request" },
      { status: 500 }
    );
  }
};

// oracle for submission
export const handleoracleleads = async (req) => {
  const {
    FULL_NAME,
    EMAIL,
    PHONE_NO,
    REMARKS,
    COUNTRY,
    STATE,
    LEAD_IP,
    REQUEST_FORM,
    CONTACT_TIME,
    CONTACT_METHOD,
    STUDENT_NAME,
    STUDENT_GENDER,
    STUDENT_AGE,
    PREFERRED_COURSES,
    CLASS_TIMING,
    SPECIAL_REQUIREMENTS,
  } = await req.json();

  // Check for empty fields
  if (
    [
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
    ].some((field) => !field)
  ) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // Create new form submission
  let newFormData;
  try {
    newFormData = await LeadsForm.create({
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
      WHATSAPP_STATUS: "no response",
      CONTACT_TIME,
      CONTACT_METHOD,
      STUDENT_NAME,
      STUDENT_GENDER,
      STUDENT_AGE,
      PREFERRED_COURSES,
      CLASS_TIMING,
      SPECIAL_REQUIREMENTS,
    });

    if (!newFormData) throw new Error("Form creation failed.");

    // Send success response to frontend
    return NextResponse.json(
      {
        message: "Your form has been successfully submitted.",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Something went wrong while submitting your form. Please try again later.",
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
