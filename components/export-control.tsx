import { Type } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Download } from "lucide-react";

export default function ExportControl() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=" flex items-center gap-2">
          <Download className="w-5 h-5" /> Export
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button className="w-full "> Download PNG</Button>
        </div>
      </CardContent>
    </Card>
  );
}
