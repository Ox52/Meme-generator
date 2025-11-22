'use client'

import { StageSize, TextElemnt } from "@/types/meme"
import { calculateStageSize, loadImageFromFile } from "@/utils/image" 
import Konva from "konva"
import { Filter } from "lucide-react"
import { resolve } from "path"
import { useCallback, useRef, useState } from "react"


 export const useMemeGenerator =()=>{

  const [image,setImage] = useState<HTMLImageElement | null>(null)

  const [stageSize,setStageSize] =useState<StageSize>({width:600,height:400})

  const [textElement ,setTextElement] = useState<TextElemnt[]>([])

  const [selectedId,setSelectedId] = useState<string|null>(null)

  const stageRef =  useRef<Konva.Stage>(null)

  const handelImageUplaod = useCallback(async( event:React.ChangeEvent<HTMLInputElement>)=>{

    const file = event.target.files?.[0]

    if(!file) return

      try{

        const img = await loadImageFromFile(file)

        const newStageSize = calculateStageSize(img)
        setStageSize(newStageSize)
        setTextElement([])
      
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

  const deleteText = useCallback((id:string)=>{

    setTextElement((prev)=>prev.filter((el)=>el.id!==id))
    setSelectedId(null)

  },[])

  const resetCanvas = useCallback(()=>{
    setImage(null)
    setTextElement([])
    setSelectedId(null)
    setStageSize({width:600 ,height:400})
  },[])

  const  exportImage = useCallback(async()=>{

if(!stageRef.current) return

await  new Promise((resolve)=> setTimeout(resolve, 150))
 const uri = stageRef.current.toDataURL({
  pixelRatio:2,
  mimeType:"image/png"
 });

const link = document.createElement("a")
link.download ="meme.png"
link.href =uri
document.body.appendChild(link)
link.click()
document.body.removeChild(link)

  },[])
  return {
    image,
    stageSize,
    textElement,
    selectedId,
    handelImageUplaod,
    addText,
    updateText,
    setSelectedId,
    deleteText,
    resetCanvas,
    stageRef,
    exportImage,
  };
}