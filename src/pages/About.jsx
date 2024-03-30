import { BsHeartHalf } from "react-icons/bs";
import Title from "./../components/Title";

const About = () => {
  return (
    <>
      <Title title="About" icon={<BsHeartHalf />} />

      <p>
        React ESLint is a React application that is built to demonstrate the use
        of the ESLint linter.
      </p>
      <p>
        In this app, we are covering some of the basic React unit test scenarios
        using ESLint.
      </p>
    </>
  );
};

export default About;
