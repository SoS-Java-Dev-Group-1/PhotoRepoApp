import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Icon, Header } from "semantic-ui-react";

const PhotoDropzone = () => {
  const dropzoneStyles = {
    border: "dashed 3px",
    borderColor: "#eee",
    borderRadius: "5px",
    paddingTop: "30px",
    textAlign: "center" as "center",
    height: "200px",
  };

  const dropzoneActive = {
    borderColor: "green",
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles); // until we set our API calls, let's just make sure that this dropzone is working
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop }); // These states are included along with the 'react-dropzone' package

  return (
    <div
      {...getRootProps()}
      style={
        //Here we're saying that the style for dropzone includes both 'dropzoneStyles' and 'dropzoneActive' 
        //when a file is over the it, otherwise, this div will only have dropzoneStyles
        isDragActive ? { ...dropzoneStyles, ...dropzoneActive } : dropzoneStyles
      }
    >
      <input {...getInputProps()} />
      <Icon name="upload" size="huge" />
      <Header content="Drop image here" />
    </div>
  );
};

export default PhotoDropzone;
