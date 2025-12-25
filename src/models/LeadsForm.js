import mongoose from "mongoose";
import axios from "axios";
const leadsSchema = new mongoose.Schema(
  {
    LEAD_ID: {
      type: Number,
      unique: true,
      default: 1,
    },
    FULL_NAME: {
      type: String,
      required: true,
    },
    EMAIL: {
      type: String,
      required: true,
    },
    PHONE_NO: {
      type: String,
      required: true,
    },
    REMARKS: {
      type: String,
    },
    COUNTRY: {
      type: String,
    },
    STATE: {
      type: String,
    },
    LEAD_IP: {
      type: String,
    },
    REQUEST_FORM: {
      type: Number,
    },
    WHATSAPP_STATUS: {
      type: String,
      default: "No response",
    },
    CONTATCT_TIME: {
      type: String,
    },
    CONTACT_METHOD: {
      type: String,
    },
    STUDENT_NAME: {
      type: String,
    },
    STUDENT_GENDER: {
      type: String,
    },
    STUDENT_AGE: {
      type: Number,
    },
    PREFERRED_COURSES: {
      type: [String],
    },
    CLASS_TIMING: {
      type: String,
    },
    SPECIAL_REQUIREMENTS: {
      type: String,
    },
    syncedToOracle: {
      type: Boolean,
      default: false, // Track whether the lead has been synced to Oracle
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

// Pre-save hook to handle auto-increment logic for 'LEAD_ID'
leadsSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastLead = await mongoose
      .model("Leads")
      .findOne()
      .sort({ LEAD_ID: -1 });
    this.LEAD_ID = lastLead ? lastLead.LEAD_ID + 1 : 1; // Start from 1 if no document exists
  }
  next();
});

leadsSchema.methods.syncWithOracle = async function () {
  try {
    const oracleEndpoint =
      "http://103.18.23.62:8080/apeks/apps/erp/YfcLeads/insertleads"; // Update this with your actual Oracle API endpoint

    // Send the lead data to OracleF
    const response = await axios.post(oracleEndpoint, {
      LEAD_ID: this.LEAD_ID,
      FULL_NAME: this.FULL_NAME,
      EMAIL: "********",
      PHONE_NO: "********",
      REMARKS: this.REMARKS,
      COUNTRY: this.COUNTRY,
      STATE: this.STATE,
      LEAD_IP: this.LEAD_IP,
      REQUEST_FORM: this.REQUEST_FORM,
      WHATSAPP_STATUS: this.WHATSAPP_STATUS,
    });

    console.log("Synced with Oracle:", response);

    // Mark as synced
    this.syncedToOracle = true;
    await this.save();

    return response.data; // Return the response data here
  } catch (error) {
    console.error("Failed to sync lead with Oracle:", error.message);
    // Optionally, handle error in the background if Oracle is down
    throw new Error("Failed to sync with Oracle"); // Throw error to be caught in the calling function
  }
};

export default mongoose.models.Leads || mongoose.model("Leads", leadsSchema);
