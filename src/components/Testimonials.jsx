import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

function Testimonials() {
  return (
    <section id="clients" className="padding-y flex-center flex-col relative">
      <div className="absolute z-[0] w-3/5 h-3/5 -right-[50%] rounded-full blue__gradient"/>
      <div className="section-info md:flex-row gap-4 flex-col justify-between items-center text-center">
        <h2 className="heading2">
          What people are
          <br className="sm:block hidden" /> saying about us
        </h2>
        <p className="paragraph max-w-[470px] my-5">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
