import { card } from "../assets";
import Button from "./Button";

function CardDeal() {
  return (
    <section id="product" className="section">
      <div className="section-info">
        <h2 className="heading2">Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className="paragraph max-w-[470px] mt-5 mb-5">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="section-img">
        <img
          src={card}
          alt="card"
          className="w-full h-full relative z-[5]"
        />
      </div>
    </section>
  );
}

export default CardDeal;
