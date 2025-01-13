"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion
        style={{
          backgroundColor: "#0F0F0F",
          color: "#CFCFCF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#CFCFCF" }} />}
        >
          <Typography sx={{ fontWeight: 600 }}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
            This is the content of Accordion 1. You can put anything here!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          backgroundColor: "#0F0F0F",
          color: "#CFCFCF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#CFCFCF" }} />}
        >
          <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
            This is the content of Accordion 2. It can hold more components.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
