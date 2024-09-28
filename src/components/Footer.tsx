const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Plate Up. Recipes data from{" "}
        <a target="_blank" href="https://www.edamam.com/">
          Edamam API.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
