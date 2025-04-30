import ContactUsHeading from "./ContactUsHeading";

import ContactUsContent from "./ContactUsContent";

function ContactUs() {
  return (
    <section className="bg-background py-20" id="contact-us">
      <div className="container mx-auto px-4">
        <ContactUsHeading />

        <div className="border-secondary/20 mx-auto max-w-4xl rounded-2xl border bg-black/50 p-8 shadow-xl backdrop-blur-lg">
          <ContactUsContent />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
