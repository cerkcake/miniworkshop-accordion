import { useState } from "react";

import Accordion from "./components/Accordion";
import AccordionData from "./accordion-data/AccordionData";
import "./components/Accordion.css";


const App = () => {

  const [contents, setContents] = useState(AccordionData);

  return (
    <>
      <div>
        <div>
          <h3>เครื่องมืพัฒนาเว็บ 2021</h3>
          <section>
            {contents.map((content)=>{
              return <Accordion key={content.id} {...content}/>
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
