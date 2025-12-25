import React from "react";
import { useCountry } from "@/app/context/CountryContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import WhatsApp icon

function WhatsappFloating() {
  const { country } = useCountry();

  // Determine the phone number based on the country
  const phoneNumber =
    country === "United States of " || country === "Canada"
      ? "+19142791693"
      : country === "Australia" || country === "New Zealand"
      ? "+61480050048"
      : "+447532792318";

  // Generate WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a aria-label="Whatsapp Login" href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.container}>
      {/* Font Awesome WhatsApp Icon */}
      <FontAwesomeIcon icon={faWhatsapp} size="2x" style={styles.icon} />
    </a>
  );
}

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25d366', // WhatsApp green
    borderRadius: '50%',
    padding: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    color: '#fff',
  },
};

export default WhatsappFloating;
