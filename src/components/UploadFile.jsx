import { useState } from 'react';
import useFormStore from '../context/formStore';

const UploadFile = ({ register, name, errors, validationRules }) => {
  const { updateFileArray, removeFile } = useFormStore();
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    updateFileArray(
      name,
      newFiles.map((file) => ({
        name: file.name,
        type: file.type,
        file,
      }))
    );
  };

  const handleRemoveFile = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
    removeFile(name, fileToRemove);
  };

  const renderFilePreview = (file) => {
    const fileUrl = URL.createObjectURL(file);

    const ImagePreview = () => (
      <div>
        <img
          src={fileUrl}
          alt={file.name}
          className="w-full h-32 object-cover rounded"
        />
        <p className="text-sm text-gray-600 mt-2">{file.name}</p>
        <button
          onClick={() => handleRemoveFile(file)}
          className="text-red-500 text-sm mt-2"
        >
          Delete
        </button>
      </div>
    );

    const DocumentPreview = () => (
      <div>
        <embed
          src={fileUrl}
          type={file.type}
          className="w-full h-32"
          title={file.name}
        />
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm underline mt-2 block"
        >
          Preview {file.name}
        </a>
        <button
          onClick={() => handleRemoveFile(file)}
          className="text-red-500 text-sm mt-2"
        >
          Delete
        </button>
      </div>
    );

    const DefaultPreview = () => (
      <div className="relative bg-white p-2 border rounded-lg shadow-md transition-transform hover:scale-105">
        <div className="text-sm text-gray-700 mb-2">{file.name}</div>
        <button
          onClick={() => handleRemoveFile(file)}
          className="text-red-500 text-sm mt-2"
        >
          Delete
        </button>
      </div>
    );

    const fileTypeHandlers = {
      image: ImagePreview,
      pdf: DocumentPreview,
      default: DefaultPreview,
    };

    const getFileType = () => {
      if (file.type.startsWith('image/')) return 'image';
      if (
        file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type === 'application/epub+zip'
      )
        return 'pdf';
      return 'default';
    };

    const FileTypeComponent =
      fileTypeHandlers[getFileType()] || fileTypeHandlers.default;

    return <FileTypeComponent />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          id="file-upload"
          {...register(name, validationRules)}
          type="file"
          multiple
          onChange={handleFileChange}
          className="bg-white text-gray-700 px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 hover:bg-gray-100 file:hover:bg-gray-100 file:bg-white file:text-gray-700 file:border-0 file:cursor-pointer"
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}

      {/* File previews */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index} className="relative">
              {renderFilePreview(file)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UploadFile;
