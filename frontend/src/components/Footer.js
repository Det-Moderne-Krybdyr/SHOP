function Footer({ userNames }) {
    return (
      <div className="footer">
        <p>Copyright &copy; 2023 Codr Kai Tutorials</p>
        <ul>
          {userNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Footer;
  