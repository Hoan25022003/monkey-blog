import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import DashboardHeading from "../dashboard/DashboardHeading";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Field from "../../components/form/Field";
import Label from "../../components/form/Label";
import Input from "../../components/form/Input";
import Radio from "../../components/checkbox/Radio";
import { postStatus, theme } from "../../utils/constants";
import Toggle from "../../components/toggle/Toggle";
import ImageUpload from "../../components/upload/ImageUpload";
import Button from "../../components/button/Button";
import { collection, doc, getDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebases/firebaseConfig";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import Dropdown from "../../components/dropdown/Dropdown";
import useFetchData from "../../hooks/useFetchData";
import Option from "../../components/dropdown/Option";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import { toast } from "react-toastify";
import slugify from "slugify";
import { useMemo } from "react";
import axios from "axios";

Quill.register("modules/imageUploader", ImageUploader);

const schema = Yup.object({
  title: Yup.string()
    .required("Please enter post title")
    .min(10, "Please enter the minimum 10 character"),
  categoryID: Yup.string().required("Please choose a category for the post"),
  image: Yup.string().required("Please select a present image for post"),
  status: Yup.number(),
  slug: Yup.string(),
  hot: Yup.boolean(),
});

const imgbbApi =
  "https://api.imgbb.com/1/upload?key=f8e815dfbd5fbbe3997abbd65dfa80cf";

const PostUpdateNews = () => {
  const [params] = useSearchParams();
  const postID = params.get("id");
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = React.useState({});
  const [content, setContent] = React.useState("");
  const [valueSelected, setValueSelected] = React.useState();
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const {
    image,
    setImage,
    progressPercent,
    setProgressPercent,
    handleSelectImage,
    handleDeleteImage,
  } = useFirebaseImage(setValue, getValues);
  const watchStatus = watch("status");
  const watchHot = watch("hot");
  const { data: categories } = useFetchData("category", [
    where("status", "==", 1),
  ]);
  React.useEffect(() => {
    const listError = Object.values(errors);
    if (listError.length > 0) {
      toast.error(listError[0].message, {
        pauseOnHover: false,
        style: {
          backgroundColor: theme.toastErrorColor,
        },
      });
    }
  }, [errors]);
  React.useEffect(() => {
    async function getPostInfo() {
      if (!postID) return;
      const colRef = doc(db, "posts", postID);
      const colSnap = await getDoc(colRef);
      setPostInfo(colSnap.data());
      setImage(colSnap.data().image);
      setContent(colSnap.data().content);
      reset(colSnap.data());
    }
    async function getCategory() {
      const docRef = doc(db, "category", postInfo.categoryID);
      const docSnap = await getDoc(docRef);
      setValueSelected(docSnap.data().name);
    }
    getPostInfo();
    getCategory();
  }, [postID]);
  const handleUpdatePost = async (values) => {
    const colRef = doc(db, "posts", postID);
    await updateDoc(colRef, {
      ...values,
      slug: slugify(values.slug || values.title, { lower: true }),
      content,
    });
    toast.success("Update post successfully!", {
      pauseOnHover: false,
      style: {
        backgroundColor: theme.toastSuccessColor,
      },
    });
    navigate("/manage/post");
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbApi,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  if (!postID) return null;
  return (
    <div>
      <DashboardHeading
        title="Update Post"
        desc="Update new post"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleUpdatePost)}>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5 mt-3">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECT}
                value={postStatus.REJECT}
              >
                Reject
              </Radio>
            </div>
          </Field>
          <Field>
            <Label className>Feature post</Label>
            <div className="mt-3">
              <Toggle
                on={watchHot}
                onClick={() => setValue("hot", !watchHot)}
              ></Toggle>
            </div>
          </Field>
        </div>
        <div className="mb-10">
          <Field>
            <Label>Content</Label>
            <div className="w-full h-[500px] mt-3 pb-10 entry-content">
              <ReactQuill
                modules={modules}
                theme="snow"
                className="h-full"
                value={content}
                onChange={setContent}
              />
            </div>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Category</Label>
            <Dropdown placeholder={valueSelected || "Please select a category"}>
              {categories.length > 0 &&
                categories.map((item) => (
                  <Option
                    key={item.id}
                    onClick={() => {
                      setValueSelected(item.name);
                      setValue("categoryID", item.id);
                    }}
                  >
                    {item.name}
                  </Option>
                ))}
            </Dropdown>
          </Field>
          <Field>
            <Label>Image</Label>
            <ImageUpload
              name="image"
              className="mt-3 h-[250px]"
              image={image}
              progress={progressPercent}
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
            ></ImageUpload>
          </Field>
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className={`mx-auto ${
              !isDirty && !content && "pointer-events-none opacity-50"
            }`}
            loading={isSubmitting}
          >
            Update post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostUpdateNews;
