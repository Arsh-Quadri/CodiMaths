import React from "react";
import EventSection from "../../../components/EventSection";
import event1 from "../../../public/assets/event1.jpeg";
import event2 from "../../../public/assets/event2.jpg";
import event3 from "../../../public/assets/event3.jpeg";
import event4 from "../../../public/assets/event4.jpeg";
import event5 from "../../../public/assets/event5.jpeg";

const EventsPage = () => {
  const events = [
    {
      title: "IN-SPACe Inauguration",
      image: event1,
      link: "/events/astronomy-workshop",
      desc: "Codimaths inaugurated at IN-SPACe, Ahmedabad, advancing space education.",
    },
    {
      title: "MOU Signing with IEEE AESS",
      image: event2,
      link: "/events/mars-exploration",
      desc: "Codimaths signed an MOU with IEEE AESS Gujarat Chapter",
    },
    {
      title: "Olympiad Phase 1 Completed",
      image: event3,
      link: "/events/phase-1-schools", // new event page
      desc: "Phase 1 of the Codimaths Olympiad concluded successfully with participation from top schools in Zimbabwe, Kenya, and South Africa.",
    },
    {
      title: "Student Visit to ISRO IN-SPACe HQ",
      image: event4,
      link: "/events/student-isro-visit",
      desc: "Codimaths organized an educational trip for Air Force School students to ISRO’s IN-SPACe headquarters, inspiring young minds through real-world space exploration insights.",
    },
    {
      title: "GLEX 2025 Participation & MOU Signing",
      image: event5,
      link: "/events/glex-2025-mou",
      desc: "Codimaths proudly participated in the Global Space Exploration Conference (GLEX) 2025 and signed a MOU, reinforcing our commitment to global space education and collaboration.",
    },
  ];

  return (
    <div className="w-full">
      {events.map((event, index) => (
        <EventSection
          key={index}
          title={event.title}
          image={event.image}
          link={event.link}
          desc={event.desc}
        />
      ))}
    </div>
  );
};

export default EventsPage;
