"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  // State to track the currently expanded accordion
  const [expanded, setExpanded] = React.useState<string | false>(false);

  // Handler to update the expanded state
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Array of FAQs
  const faqs = [
    {
      id: "faq1",
      question: "What is Vedic Maths?",
      answer:
        "Vedic Maths is a collection of techniques based on ancient Indian scriptures that allow for quicker and more efficient calculations.",
    },
    {
      id: "faq2",
      question: "How can I enroll in the olympiads?",
      answer:
        "You can enroll in our courses by clicking the 'Register Now' and filling out the registration form.",
    },
    {
      id: "faq3",
      question: "Are the courses online or offline?",
      answer:
        "Our courses are primarily online, allowing you to learn at your own pace from anywhere in the world.",
    },
    {
      id: "faq4",
      question: "What age group is suitable for these courses?",
      answer:
        "Our courses are designed for learners of all ages, from young students to adults looking to enhance their skills.",
    },
    {
      id: "faq5",
      question: "Will I receive a certificate upon completion?",
      answer:
        "Yes, you will receive a certificate of completion for each course you finish successfully.",
    },
    {
      id: "faq6",
      question: "Is my data secure with your platform?",
      answer:
        "Absolutely! We prioritize your privacy and security. All of your data are encrypted during transmission and storage. Additionally, we comply with industry-standard security protocols to ensure your data remains safe at all times.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* FAQ Section */}
      {/* <h2 className="text-center text-2xl font-bold text-white mb-6">
        Frequently Asked Questions (FAQs)
      </h2> */}

      {/* Dynamically Generate Accordions */}
      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.id} // Control which accordion is expanded
          onChange={handleChange(faq.id)} // Handle accordion toggle
          style={{
            backgroundColor: "#0F0F0F",
            color: "#CFCFCF",
            marginBottom: "0.5rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#CFCFCF" }} />}
          >
            <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-start">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
