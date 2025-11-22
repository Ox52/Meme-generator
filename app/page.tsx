"use client";
import ExportControl from "@/components/export-control";
import MemeCanvas from "@/components/meme-canvas";
import TextControl from "@/components/text-control";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UploadControl from "@/components/upload-control";

import { useMemeGenerator } from "@/hooks/useMemeGenerator";

export default function Home() {
  const {
    image,
    stageSize,
    handelImageUplaod,
    addText,
    textElement,
    selectedId,
    updateText,
    setSelectedId,
    deleteText,
    resetCanvas,
    stageRef,
    exportImage,
  } = useMemeGenerator();
  console.log(image)
 

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className=" text-center mb-8">
          <h1 className=" text-4xl font-bold text-gray-900 mb-2">
            Meme Generator
          </h1>
          <p className="text-gray-600">
            Create a hilarious memes with custom text and images
          </p>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {/* control panel */}
          <div className=" lg:col-span-1 space-y-4">
            <UploadControl
              onImageUpload={handelImageUplaod}
              onReset={resetCanvas}
            />
            <TextControl
              hasImage={!!image}
              onAddText={addText}
              textElemnt={textElement}
              selectedId={selectedId}
              onUpdateText={updateText}
              onDeleteText={deleteText}
            />
            <ExportControl hasImage={!!image} onExport={exportImage} />
          </div>

          {/* canvas panel */}

          <div className=" lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Canvas</CardTitle>

                <CardContent className=" flex justify-center">
                  <MemeCanvas
                    image={image}
                    stageSize={stageSize}
                    textElemnt={textElement}
                    selectedId={selectedId}
                    onSelectText={setSelectedId}
                    stageRef={stageRef}
                  />
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
