import { Label } from "@radix-ui/react-label";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Type } from "lucide-react";
import { TextElemnt } from "@/types/meme";

interface TextControlProps {
  hasImage: boolean;
  onAddText: () => void;
  textElemnt: TextElemnt;
  selectedId: string | null;
  onUpdateText: (id: string, text: string) => void;
  onDeleteText:(id:string)=>void;
}
export default function TextControl({
  onAddText,
  textElemnt,
  selectedId,
  hasImage,
  onUpdateText,
  onDeleteText
}: TextControlProps) {

    const selectedText =textElemnt.find((el)=>el.id ===selectedId) 
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className=" flex items-center gap-2">
            <Type className="w-5 h-5" /> Add Text
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full " onClick={onAddText} disabled={!hasImage}>
              {" "}
              Add Text
            </Button>
          </div>
        </CardContent>
      </Card>
      {selectedId && selectedText &&(
        <Card>
          <CardHeader>
            <CardTitle>Edit Text</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>text content</Label>
                <Input
                  placeholder=" enter a meme text"
                  value={selectedText.text}
                  className="mt-1"
                  onChange={(e) => onUpdateText(selectedId, e.target.value)}
                />
              </div>
              <Button variant={"destructive"} className="w-full "  onClick={()=>onDeleteText(selectedId)}>
                {" "}
                Delete Text
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
