

const Button = ({ text, onClick, primary, secondary, red }) => {
  return (
    <button className={text} onClick={onClick} primary={primary} secondary={secondary} red={red}>{text}</button>
  )
}

export default Button