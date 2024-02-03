
const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.text}</h1>
      <div className="navigation">
        {props.leftButton}
        {props.rightButton}
      </div>
    </div>
  )
}

export default Header