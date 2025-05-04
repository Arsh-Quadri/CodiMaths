import React from "react";
import EventSection from "../../../components/EventSection";
import event1 from "../../../public/assets/event1.jpeg";
import event2 from "../../../public/assets/event2.jpg";

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
