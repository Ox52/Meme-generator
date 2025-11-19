import { Label } from "@radix-ui/react-label";
import { Upload, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Type } from "lucide-react";


export default function TextControl() {
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
            <Button className="w-full "> Add Text</Button>
          </div>
        </CardContent>
      </Card>

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
                className="mt-1"
              />
            </div>
            <Button variant={"destructive"} className="w-full ">
              {" "}
               Delete Text
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
