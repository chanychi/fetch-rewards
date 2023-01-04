function Multiselect ({type, value, change, title, data}) {
    return (
        <label htmlFor={title}>
            {title}:
            <select
              name={type}
              value={value[type]}
              onChange={e => change({
                ...value, 
                [e.target.name]:e.target.value})}
              required>
              <option key=""></option>
              {data?.map(state => (state.name) ? <option key={state.name}>{state.name}</option> : <option key={state}>{state}</option>
              )}
            </select>
          </label> 
    )
}

export default Multiselect