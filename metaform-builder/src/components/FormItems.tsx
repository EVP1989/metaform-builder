import React, { useState, useRef } from 'react';
import '../styles/FormItems.css';
//TODO: Correct type definitions (useRef, )!!

//interface FormItems

const FormItems = () => {

const draggingItem = useRef<any | null>(null);
const dragOverItem = useRef<any | null>(null);

const [list, setList] = useState([
'item-1',
'item-2',
'item-3'
]);

const handleDragStart = (e : any, position :any) => {
    draggingItem.current = position;
};

const handleDragEnter = (e : any, position : any) => {
    dragOverItem.current = position;
};

const handleDragEnd = (e : any) => {
const listCopy = [...list];
const draggingItemContent = listCopy[draggingItem.current];
listCopy.splice(draggingItem.current, 1);
listCopy.splice(dragOverItem.current, 0, draggingItemContent);
    
draggingItem.current = null;
dragOverItem.current = null;
setList(listCopy);
};

return (
<>
{
 list &&
  list.map((item, index) => (
     <h1 
        onDragStart={(e) => handleDragStart(e, index)}
        onDragEnter={(e) => handleDragEnter(e, index)}
        onDragEnd={handleDragEnd}
        key={index} draggable>
       {item}
     </h1>
    ))}
   </>
  );
};
export default FormItems;