import React from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import Dropdown from "../../components/dropdown/Dropdown";
import Field from "../../components/form/Field";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import { postStatus, theme } from "../../utils/constants";
import ImageUpload from "../../components/upload/ImageUpload";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import Toggle from "../../components/toggle/Toggle";
import { addDoc, collection, serverTimestamp, where } from "firebase/firestore";
import { db } from "../../firebases/firebaseConfig";
import Option from "../../components/dropdown/Option";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-toastify";
import useFetchData from "../../hooks/useFetchData";
import DashboardHeading from "../dashboard/DashboardHeading";

const PostAddNewStyles = styled.div``;

const schema = Yup.object({
  title: Yup.string()
    .required("Please enter post title")
    .min(10, "Please enter the minimum 10 character"),
  categoryID: Yup.string().required("Please choose a category for the post"),
  image: Yup.string(),
  status: Yup.number(),
  slug: Yup.string(),
  hot: Yup.boolean(),
});

const initialValue = {
  title: "",
  status: 2,
  slug: "",
  categoryID: "",
  hot: false,
  image: "",
};

const PostAddNews = () => {
  const { personalInfo } = useAuth();
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });
  const watchStatus = watch("status");
  const watchHot = watch("hot");

  const [valueSelected, setValueSelected] = React.useState(null);
  const {
    image,
    setImage,
    progressPercent,
    setProgressPercent,
    handleSelectImage,
    handleDeleteImage,
  } = useFirebaseImage(setValue, getValues);

  document.title = "Add Post";

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

  const handleAddPost = async (values) => {
    const cloneValue = { ...values };
    cloneValue.slug = slugify(values.slug || values.title, { lower: true });
    cloneValue.image = image;
    const colRef = collection(db, "posts");
    await addDoc(colRef, {
      ...cloneValue,
      userID: personalInfo.id,
      createAt: serverTimestamp(),
    });
    toast.success("Add post successfully!", {
      pauseOnHover: false,
      style: {
        backgroundColor: theme.toastSuccessColor,
      },
    });
    reset(initialValue);
    setValueSelected(null);
    setProgressPercent(0);
    setImage("");
  };

  const { data: categories } = useFetchData("category", [
    where("status", "==", 1),
  ]);

  return (
    <PostAddNewStyles>
      <DashboardHeading title="Add Post" desc="Add new post"></DashboardHeading>
      <form onSubmit={handleSubmit(handleAddPost)}>
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
          <Button type="submit" className="mx-auto" loading={isSubmitting}>
            Add new post
          </Button>
        </div>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNews;
