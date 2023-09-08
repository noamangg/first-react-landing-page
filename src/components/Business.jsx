import { features } from "../constants";
import Button from "./Button";

const FeatureCard = (props) => (
  <div className="flex flex-row p-6 rounded-3xl gap-6 feature-card mt-6">
    <div className="w-[64px] h-[64px] rounded-full  bg-dimBlue flex justify-center items-center">
    <img src={props.feature.icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="flex-1">
      <h4 className="font-poppins font-semibold text-white text-lg leading-6 mb-1">{props.feature.title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-base leading-6 mb-1">{props.feature.content}</p>
    </div>
  </div>
)


function Business() {
  return (
    <section id="features" className="section ">
      <div className="section-info">
        <h2 className="heading2">
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className="paragraph max-w-[470px] mt-5 mb-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className="mt-10" />
      </div>

      <div className="section-img flex-col">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={feature.id} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;
