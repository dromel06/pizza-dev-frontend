import React, { useRef, useEffect } from 'react';

export default function CanvasPizza( { Ingredientes } ) {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#f2d312'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])
  
  return <canvas ref={canvasRef}/>
}
