import "./Header.css";

function Header(props) {
  return (
    <div className="Header" style={props.noBackground && {background: 'none'}} >
      <div className="Line1"></div>
      <div className="Line2"></div>
      <div className="Line3"></div>
    </div>
  );
}

export default Header;
