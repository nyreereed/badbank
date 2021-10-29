import Card from "components/card";
import Logo from "../bank.png";

function Home() {
  return (
    <Card
      txtcolor="black"
      header="Bad Bank Landing Page"
      title="Welcome to Bad Bank"
      text="Thank you for being a valued customer!"
      body={<img src={Logo} className="img-fluid" alt="Responsive image" />}
    />
  );
}

export default Home;
