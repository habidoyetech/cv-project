

const TextArea = ({name, placeholder, onChange, value}) => {
  return (
    <label className={name}>
      {placeholder}
      <textarea onChange={onChange} name={name} value={value}></textarea>
    </label>
  )
}

export default TextArea