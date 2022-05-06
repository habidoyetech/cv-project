

const FileInput = ({onChange}) => {
  return (
    <label>
      <input type="file" placeholder="Photo" onChange={onChange} />
      Photo
    </label>
  )
}

export default FileInput;