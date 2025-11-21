import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Upload } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { RotateCcw } from "lucide-react";


interface UploadControlProps{

    onImageUpload :(event:React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadControl(  {onImageUpload}: UploadControlProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=" flex items-center gap-2">
          <Upload  className="w-5 h-5"/> Uplaod Image
        </CardTitle>
      </CardHeader>
      <CardContent>
        

        <div className="space-y-4">
            <div>
                <Label> Choose Image JPG/PNG</Label>
                <Input  type="file" accept="image/jpeg,image/png" className="mt-1" onChange={onImageUpload}/>
                
            </div>
<Button variant={"outline"} className="w-full bg-transparent">  <RotateCcw className=" w-4 h-4 mr-2"/> Reset Canvas</Button>

        </div>
      </CardContent>
    </Card>
  );
}
