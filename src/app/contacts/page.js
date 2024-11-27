import dynamic from "next/dynamic";
import LinkedinButton from "../components/LinkedinButton";

const ContactFormWithModel = dynamic(() => import("../components/contactForm"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/footer"), {
  ssr: false,
});

export default function Contacts() {
  return (
    <main id="contacts">
      <div className="h-full w-full">
        <div className="flex min-h-screen items-center justify-center px-4">
          <ContactFormWithModel />
        </div>
        <LinkedinButton />
      </div>
      <Footer />
    </main>
  );
}
