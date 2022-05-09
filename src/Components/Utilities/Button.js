

const Button = ({ text, onClick, primary, secondary, red }) => {
  return (
    <button className={text} onClick={onClick} secondary={secondary} >{text}</button>
  )
}

export default Button