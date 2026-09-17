import Counter from "../components/Counter";

const AboutPage = () => {
  console.log("about router rendered");
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>About Company</li>
        <li>About Employee</li>
        <li>About Review</li>
      </ul>

      <Counter></Counter>
    </div>
  );
};

export default AboutPage;
