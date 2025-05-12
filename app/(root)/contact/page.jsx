import Image from "next/image";
import bghome1 from "../../../public/assets/bghome1.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Contact = () => {
  return (
    <div className="w-full h-fit py-[100px] flex flex-col justify-center items-center relative overflow-hidden px-6 gap-[100px]">
      <Image
        src={bghome1}
        alt="bghome1"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="backdrop-blur-lg text-center bg-black/20 border border-white/30 p-8 rounded-2xl flex flex-col justify-center items-center text-white w-[80vw] h-fit gap-5 max-sm:w-full">
        <h2 className="text-4xl font-medium font-lilita text-primary-blue uppercase">
          Contact Us
        </h2>
        <div className="flex justify-center items-start gap-2 w-full">
          <div className="left w-[50%] left-0 flex flex-col justify-center items-start text-start">
            <p className="font-medium text-2xl text-primary-blue">
              Our Company Address
            </p>
            <p className="w-[100%] mb-1 text-xl">
              A 4 ABL WORKSPACE SECTOR 4 NOIDA , INDIA . PINCODE: 201009
            </p>
            <p className="font-medium text-2xl text-primary-blue w-full">
              Phone Number
            </p>
            <p className="w-full mb-1 text-xl">+919773690707</p>
            <p className="font-medium text-2xl text-primary-blue w-full">
              Email
            </p>
            <a href="mailto:info@codimaths.com" className="w-full mb-1 text-xl">
              info@codimaths.com
            </a>
          </div>
          <div className="right w-[50%] right-0">
            <div className="w-[85%] h-[320px] mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.572799763537!2d77.32270797543445!3d28.58258827569209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5c634e7d5c9%3A0x541263cf553b858e!2sABL%20Workspaces!5e0!3m2!1sen!2sin!4v1737708061688!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-medium font-lilita text-primary-blue uppercase mt-5">
          Follow Us
        </h2>
        <div className="flex justify-center items-center gap-5">
          <a
            href="https://www.instagram.com/codimaths_gainwisdom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              fontSize="large"
              className="social-icon hover:text-primary-blue"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/codimaths/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              fontSize="large"
              className="social-icon hover:text-primary-blue"
            />
          </a>
          <a
            href="https://x.com/CodiMaths"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon
              fontSize="large"
              className="social-icon hover:text-primary-blue"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
