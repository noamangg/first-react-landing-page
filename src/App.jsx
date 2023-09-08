import {
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTAs,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="padding-x flex-center">
      <div className="box-width">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex-start">
      <div className="box-width">
        <Hero />
      </div>
    </div>

    <div className="bg-primary padding-x flex-start">
      <div className="box-width">
        <Stats /> 
        <Business /> 
        <Billing /> 
        <CardDeal /> 
        <Testimonials />
        <Clients /> 
        <CTAs /> 
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
