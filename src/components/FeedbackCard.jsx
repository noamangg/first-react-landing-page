import { quotes } from "../assets";

function FeedbackCard(props) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-3xl max-w-[370px] md:mr-10 sm:mr-5 mr-5 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-base leading-8 text-white my-10">
        {props.card.content}
      </p>

      <div className="flex flex-row gap-4">
        <img
          src={props.card.img}
          alt={props.card.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-xl leading-8 text-white">{props.card.name}</h4>
          <p className="font-poppins font-normal text-base leading-8 text-white">{props.card.title}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
