import { apple, bill, google } from "../assets";

function Billing() {
  return (
    <section id="product" className="section-reverse">
      <div className="section-img-reverse">
        <img
          src={bill}
          alt="billing"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-[3] top-0 w-1/2 h-1/2 rounded-full white__gradient -left-1/2" />
        <div className="absolute z-[0] bottom-0 w-1/2 h-1/2 rounded-full pink -left-1/2" />
      </div>
      <div className="section-info">
        <h2 className="heading2">
          Easily control your
          <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className="paragraph max-w-[470px] mt-5 mb-5">
          Elit enim sed massa etiam. Mauris eu
          adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
          aliporttitor integer platea placerat.
        </p>
        <div className="flex flex-row flex-wrap mt-6 sm:mt-10 gap-5">
        <img src={apple} alt="apple store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        <img src={google} alt="apple store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
\      </div>
    </section>
  );
}

export default Billing;
