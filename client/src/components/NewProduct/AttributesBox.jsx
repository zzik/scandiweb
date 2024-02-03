
const AttributesBox = (props) => {
    
    const {dataset} = props
    
    return (
    <div className='attributes_box'>
        {dataset.inputs.map((el)=>{
            const formInputNameLowercase = el.toLowerCase()
            return (
                <div className='input_container' key={el}>
                    <label>{el} ({dataset.units}): </label>
                    <input type="number" name={formInputNameLowercase} id={formInputNameLowercase} required/>
                </div>
            )
        })}
        <hr/>
        <p className='description'>{dataset.description}</p>
    </div>
  )
}

export default AttributesBox