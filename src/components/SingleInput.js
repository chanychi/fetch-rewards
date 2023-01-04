function SingleInput ({type, value, change, title}) {
    return (
        <label htmlFor={title}>
        {title}:
        <input
          name={type}
          type={type}
          value={value[type]}
          onChange={e => change({
            ...value, 
            [e.target.name]:e.target.value})}
          required />
      </label>
    )
}

export default SingleInput