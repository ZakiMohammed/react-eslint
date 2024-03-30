import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="p-5 bg-dark-subtle text-center">
        <Logo />
        React ESLint &copy; {new Date().getFullYear()}
      </div>
    </>
  );
};

export default Footer;
