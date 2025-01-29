import LandingHeader from "./_components/LandingHeader";
import backgroundImage from "@assets/PNGs/backgroundImage.png";
import GetStarted from "./_components/GetStarted";
import GradientStyle from "./_components/GradientStyle";
import TrendingNow from "./_components/TrendingNow";
import MoreReasonCart from "./_components/MoreReasonCart";
import { MoreReasonCartItems } from "./_items/MoreReasonCartItems";
import LandingAccordion from "./_components/LandingAccordion";
import { landingAccordionItems } from "./_items/landinAccordionItems";

export const metadata = {
  title: "Netflix Landing Page",
};

function Landing() {
  return (
    <main>
      <section
        style={{
          backgroundImage: `url(${backgroundImage?.src})`,
          backgroundSize: "contain",
        }}
        className="relative bg-cover bg-center lg:h-[888px] md:h-[664px] "
      >
        <div className="lg:h-[888px] md:h-[664px] custom-linear-gradient">
          <LandingHeader />
          <GetStarted />
        </div>
      </section>
      <section className="justify-start items-center h-[800px] ">
        <GradientStyle />
        <TrendingNow />
      </section>
      <section className="flex flex-col justify-center items-start gap-4 px-[148px]">
        <p className="text-3xl">More Reason to Join</p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {MoreReasonCartItems.map((item, index) => (
            <MoreReasonCart
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
      <section className="sm:px-[148px] my-[64px]">
        <p className="text-3xl">Frequently Asked Questions</p>
        <LandingAccordion items={landingAccordionItems} />
      </section>
    </main>
  );
}

export default Landing;
