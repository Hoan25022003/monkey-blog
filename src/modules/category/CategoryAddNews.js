import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import slugify from "slugify";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import Field from "../../components/form/Field";
import FieldCheckboxes from "../../components/form/FieldCheckboxes";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import { db } from "../../firebases/firebaseConfig";
import { categoryStatus, theme } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryAddNews = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      slug: "",
      status: 1,
      createAt: new Date(),
    },
  });
  const watchStatus = watch("status");
  const handleAddCategory = async (values) => {
    if (!isValid) return;
    const cloneValues = { ...values };
    try {
      const colRef = collection(db, "category");
      await addDoc(colRef, {
        ...cloneValues,
        status: Number(cloneValues.status),
        slug: slugify(cloneValues.slug || cloneValues.name, { lower: true }),
        createAt: serverTimestamp(),
      });
      toast.success("Add Successful Category!", {
        pauseOnHover: false,
        style: {
          backgroundColor: theme.toastSuccessColor,
        },
      });
    } catch (error) {
      toast.error(error, {
        pauseOnHover: false,
        style: {
          backgroundColor: theme.toastErrorColor,
        },
      });
    } finally {
      reset({ name: "", slug: "", status: 1, createAt: new Date() });
    }
  };
  return (
    <div>
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleAddCategory)} autoComplete="off">
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your category name"
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              name="slug"
              placeholder="Enter your slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.APPROVED}
                value={categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.UNAPPROVED}
                value={categoryStatus.UNAPPROVED}
              >
                Unapproved
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button className="mx-auto" type="submit" loading={isSubmitting}>
          Add new category
        </Button>
      </form>
    </div>
  );
};

export default CategoryAddNews;
