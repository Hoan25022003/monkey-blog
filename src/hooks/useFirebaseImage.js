import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export default function useFirebaseImage(setValue, getValues) {
  const [image, setImage] = useState("");
  const [progressPercent, setProgressPercent] = useState(0);

  const processUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressPercent(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;

          default:
            console.log("Nothing at all");
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
        });
      }
    );
  };

  const handleSelectImage = (e) => {
    const files = e.target.files[0];
    if (!files) return;
    setValue("image_name", files.name);
    processUploadImage(files);
  };

  const handleDeleteImage = () => {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, "images/" + getValues("image_name"));

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        setImage("");
        setProgressPercent(0);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  return {
    image,
    setImage,
    progressPercent,
    setProgressPercent,
    handleSelectImage,
    handleDeleteImage,
  };
}
