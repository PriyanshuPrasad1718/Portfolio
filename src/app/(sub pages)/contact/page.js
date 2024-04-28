import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            CONTACT
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Welcome to our "Contact Me" page! We're thrilled to connect with you. Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Our team is dedicated to providing prompt and helpful responses to all inquiries.
          Feel free to reach out using the form below, and we'll get back to you as soon as possible. Additionally, you can find our contact information and social media links for alternative ways to get in touch.
          We value your feedback and appreciate the opportunity to assist you in any way we can. Thank you for visiting our website, and we look forward to hearing from you!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
