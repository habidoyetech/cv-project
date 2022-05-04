

const TextArea = ({name, placeholder, onChange, value}) => {
  return (
    <textarea onChange={onChange} name={name} placeholder={placeholder} value={value}></textarea>
  )
}

export default TextArea