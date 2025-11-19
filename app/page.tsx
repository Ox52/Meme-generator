
import ExportControl from "@/components/export-control";
import TextControl from "@/components/text-control";
import UploadControl from "@/components/upload-control";
import Image from "next/image";

export default function Home() {
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
            <UploadControl />
            <TextControl />
            <ExportControl />
          </div>

          {/* canvas panel */}

          <div className="bg-blue-600 lg:col-span-2">dawdsa</div>
        </div>
      </div>
    </div>
  );
}
