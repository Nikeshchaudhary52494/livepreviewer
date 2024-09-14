import React, { useState } from 'react';
import FileManager from './components/FileManager';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import ImageManager from './components/ImageManager';

const App = () => {
  const [files, setFiles] = useState({
    'index.html': `<!DOCTYPE html>
    
<html lang="en" >
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>

      </body>
</html>`,
    'style.css': `* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
    `,
    'script.js': 'console.log("Hello World!");',
  });

  const [selectedFile, setSelectedFile] = useState('index.html');
  const [images, setImages] = useState({}); // Store uploaded images

  const handleFileChange = (fileName, content) => {
    setFiles({
      ...files,
      [fileName]: content,
    });
  };

  const handleImageUpload = (imageName, imageSrc) => {
    setImages((prevImages) => ({
      ...prevImages,
      [imageName]: imageSrc,
    }));
  };

  return (
    <div className="bg-[#514f72] h-[100vh] flex">
      <div className='w-1/4 p-4 text-white bg-[#21202E] border-r border-[#3a374d]'>
        <FileManager files={files} setSelectedFile={setSelectedFile} selectedFile={selectedFile} />
        <ImageManager images={images} onUpload={handleImageUpload} />
      </div>
      <div className="flex flex-col w-full ">
        <CodeEditor
          fileName={selectedFile}
          fileContent={files[selectedFile]}
          onFileChange={handleFileChange}
        />
        <Preview files={files} images={images} />
      </div>
    </div>
  );
};

export default App;
