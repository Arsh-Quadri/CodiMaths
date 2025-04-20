// import HeroSection1 from "../../components/HeroSection1";
// import HeroSection2 from "../../components/HeroSection2";
// import HeroSection3 from "../../components/HeroSection3";
// export default function Home() {
//   return (
//     <div className="w-full h-full flex flex-col justify-center items-center">
//       <div className="h-fit w-full">
//         <HeroSection1 />
//       </div>
//       <div className="h-fit w-full">
//         <HeroSection2 />
//       </div>
//       <div className="h-fit w-full">
//         <HeroSection3 />
//       </div>
//     </div>
//   );
// }
import HeroSection1 from "../../components/HeroSection1";
import HeroSection2 from "../../components/HeroSection2";
import HeroSection3 from "../../components/HeroSection3";
import HeroSection4 from "../../components/HeroSection4";
import HeroSection5 from "../../components/HeroSection5";
import HeroSection6 from "../../components/HeroSection6";
import HeroSection7 from "../../components/HeroSection7";
import HeroSection8 from "../../components/HeroSection8";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="h-fit w-full relative">
        <HeroSection1 />
        {/* Fade to black for transition */}
        <div className="w-full h-10 bg-gradient-to-b from-transparent to-[#09161D] absolute bottom-0 left-0 z-20" />
      </div>

      <div className="h-fit w-full relative">
        {/* Fade from black for smooth start */}
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-[#09161D] absolute top-0 left-0 z-20" />
        <HeroSection2 />
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-[#09161D] absolute bottom-0 left-0 z-20" />
      </div>

      <div className="h-fit w-full relative">
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-[#09161D] absolute top-0 left-0 z-20" />
        <HeroSection3 />
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-[#09161D] absolute bottom-0 left-0 z-20" />
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-[#09161D] absolute top-0 left-0 z-20" />
        <HeroSection4 />
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-[#09161D] absolute bottom-0 left-0 z-20" />
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-[#09161D] absolute top-0 left-0 z-20" />
        <HeroSection5 />
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-[#09161D] absolute bottom-0 left-0 z-20" />
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-[#09161D] absolute top-0 left-0 z-20" />
        <HeroSection6 />
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-[#09161D] absolute bottom-0 left-0 z-20" />
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-[#09161D] absolute top-0 left-0 z-20" />
        <HeroSection7 />
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-primary-dark absolute bottom-0 left-0 z-20" />
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-primary-dark absolute top-0 left-0 z-20" />
        <HeroSection8 />
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-primary-dark absolute bottom-0 left-0 z-20" />
      </div>
      <Footer />
    </div>
  );
}
