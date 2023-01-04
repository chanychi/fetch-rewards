import SingleInput from "./SingleInput";
import Multiselect from "./Multiselect";

function Label({type, value, change, data, title}) {
    return (data?.length) ? 
      <Multiselect title={title} type={type} value={value} data={data} change={change}/> : 
      <SingleInput title={title} type={type} value={value} change={change} />
}

export default Label