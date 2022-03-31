import "./variousInpt.scss";
import { useState } from "react";
const VariousInpt: React.FC<{ key: string; value?: any }> = ({
  key
  
}) => {
   console.log(key)
   const [state,newState] = useState('')
  return (
   <div className="form-vrap">
                
   <div className="fomrName">{key}</div>
   <input placeholder=". . ." />
 </div>
  );
};

export default VariousInpt;
