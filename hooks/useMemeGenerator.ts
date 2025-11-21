'use client'

import { StageSize, TextElemnt } from "@/types/meme"
import { calculateStageSize, loadImageFromFile } from "@/utils/image" 
import { useCallback, useState } from "react"


 export const useMemeGenerator =()=>{

  const [image,setImage] = useState<HTMLImageElement | null>(null)

  const [stageSize,setStageSize] =useState<StageSize>({width:600,height:400})

  const [textElement ,setTextElement] = useState<TextElemnt[]>([])

  const [selectedId,setSelectedId] = useState<string|null>(null)

  const handelImageUplaod = useCallback(async( event:React.ChangeEvent<HTMLInputElement>)=>{

    const file = event.target.files?.[0]

    if(!file) return

      try{

        const img = await loadImageFromFile(file)

        const newStageSize = calculateStageSize(img)
        setStageSize(newStageSize)
      
        setImage(img)

      }catch(error){
        console.log("error loading image:",error)

      }
    
  },[])

  const addText = useCallback(()=>{
  
    const newText:TextElemnt ={

      id:`text-${Date.now()}`,
      text:"MEME TEXT ",
      x:stageSize.width/2,
      y:stageSize.height/2,
      fontSize:40,
      fill:"white",
      stroke:"black",
      strokeWidth:2,
      fontFamily:"Impact,Arial Black ,sans-serif",
      aligh:"center"

    }
    setTextElement((prev)=>[...prev , newText]);
    setSelectedId(newText.id)

  },[stageSize])

  const updateText =useCallback((id:string ,newText:string)=>{
setTextElement((prev)=>prev.map((el)=>(el.id===id ?{...el, text:newText}:el)))

  },[])

  return {
    image,
    stageSize,
    textElement,
    selectedId,
    handelImageUplaod,
    addText,
    updateText,
    setSelectedId
  };
}