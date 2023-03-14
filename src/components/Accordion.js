import {useState} from 'react'
import AccordionData from "../accordion-data/AccordionData";
import "./Accordion.css"

const Accordion = ({title,description}) => {
 
const [showContent, setShowContent] = useState(false)

  return (
<>
<article>
<header>
  <h4>{title}</h4>
  <button onClick={()=>setShowContent(!showContent)}>More Detail</button>
</header>
{showContent && <p>{description}</p>}
{/* ความหมายคือ เมื่อ State showContent is TRUE ให้แสดงเนื้อหาใน Tag <p> */}
</article>
</>
  )
}

export default Accordion