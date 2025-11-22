import { TextElemnt } from "@/types/meme";
import { Text } from "react-konva";

interface DraggleableTextProps{

  textProps:TextElemnt;
  // isSelected:boolean;

  onSelect :()=>void;
  // onChange :(newAttrs :Partial<TextElemnt>) =>void; 


}


export default function DraggaleText({ textProps, onSelect }: DraggleableTextProps) {
  return (
    <>
      <Text draggable {...textProps} onClick={onSelect} offsetX={textProps.text.length * textProps.fontSize * 0.3} />
    </>
  );
}
