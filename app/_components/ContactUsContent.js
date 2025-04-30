import ContactUsForm from "./ContactUsForm";
import ContactUsInfo from "./ContactUsInfo";

function ContactUsContainer({ children }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Contact Info */}
      <ContactUsInfo />

      {/* Contact Form */}
      <ContactUsForm />
    </div>
  );
}

export default ContactUsContainer;
