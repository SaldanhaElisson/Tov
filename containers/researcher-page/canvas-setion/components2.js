'use client';

import React, { useEffect, useRef, useState } from 'react';

export const WhiteboardCanvas2 = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawind, setIsDrawind] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 800 * 2;
    canvas.height = 600 * 2;
    canvas.style.width = `800px`;
    canvas.style.height = ` 600px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeSylte = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setIsDrawind(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawind(false);
  };

  const drawing = ({ nativeEvent }) => {
    if (!isDrawind) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <div className='absolute top-0'>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={drawing}
        onMouseUp={finishDrawing}
        className='select-none border border-gray-400	'
      />
    </div>
  );
};
