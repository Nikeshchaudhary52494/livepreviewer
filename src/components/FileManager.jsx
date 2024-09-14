const FileManager = ({ files, setSelectedFile, selectedFile }) => {
  return (
    <>
      <h3 className="mb-1 text-lg font-bold text-slate-400 ">Files</h3>
      <ul>
        {Object.keys(files).map((fileName) => (
          <li
            key={fileName}
            onClick={() => setSelectedFile(fileName)}
            className={`cursor-pointer pl-2 mb-2 flex items-center ${selectedFile === fileName ? 'bg-[#3B3855] text-yellow-400' : ''
              }`}
          >
            {fileName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FileManager;
