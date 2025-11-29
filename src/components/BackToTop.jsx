import React, { useEffect, useState } from 'react';

export default function BackToTop(){
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setVisible(window.scrollY > 220);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);
  if(!visible) return null;
  return (
    <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}
      className="fixed right-5 bottom-5 bg-pink-600 text-white p-5 rounded-full shadow-lg">↑</button>
  );
}
