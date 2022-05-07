
const Input = ({type, name, placeholder, onChange, value}) => {
  return (
    <label className={name}>
      {placeholder}
      <input type={type} name={name} onChange= {onChange} value={value}/>
    </label>
  )
}

export default Input