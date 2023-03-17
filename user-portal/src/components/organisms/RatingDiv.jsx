import Para from "../atoms/Para"
import Span from "../atoms/Span"
function RatingDiv(props){
    const{brandName,name,PclassName,SclassName,ratings,icon} = props
    return(
        <>
      <Para para={brandName} className={PclassName}/>
      <Span para={name} className={SclassName}/><br />
      <Span para={ratings} icon={icon} className={SclassName}/>
      </> 
    )
}

export default RatingDiv