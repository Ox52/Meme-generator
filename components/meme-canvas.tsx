import { StageSize, TextElemnt } from '@/types/meme';
import { Upload } from 'lucide-react';
import React from 'react'
import { Layer, Stage, Image as KonvasImage } from "react-konva";
import DraggaleText from './dragabel-text';


interface MemeCanvasProps{

    image :HTMLImageElement | null;
    stageSize:StageSize;
    textElemnt :TextElemnt[];
        selectedId:string| null;
        onSelectText :(id:string)=>void;



}
export default function MemeCanvas({
  image,
  stageSize,
  textElemnt,
  selectedId,
  onSelectText,
}: MemeCanvasProps) {
  if (!image) {
    return (
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden flex items-center justify-center  bg-gray-100"
        style={{ width: 600, height: 400 }}
      >
        <div className="text-center text-gray-500">
          <Upload className=" w-12 h-12 mx-auto  mb-2" />
          <p>upload an image to get started</p>
        </div>
      </div>
    );
  }
  return (
    <div
      className="border-2 border-dashed border-gray rounded-lg overflow-hidden"
      style={{ width: stageSize.width, height: stageSize.height }}
    >
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <KonvasImage
            image={image}
            width={stageSize.width}
            height={stageSize.height}
          />

          {textElemnt.map((textEl) => (
            <DraggaleText key={textEl.id} textProps={textEl} onSelect={()=>onSelectText(textEl.id)} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
