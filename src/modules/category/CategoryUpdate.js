import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
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

const CategoryUpdate = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const categoryID = params.get("id");
  const {
    control,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { isSubmitting, isDirty },
  } = useForm({
    mode: "onChange",
  });
  useEffect(() => {
    async function getCategoryInfo() {
      const colRef = doc(db, "category", categoryID);
      const colSnap = await getDoc(colRef);
      reset(colSnap.data());
    }
    getCategoryInfo();
  }, [categoryID, reset]);
  if (!categoryID) return null;
  const watchStatus = watch("status");
  const handleUpdateCategory = async (values) => {
    const docRef = doc(db, "category", categoryID);
    await updateDoc(docRef, {
      ...values,
      slug: slugify(values.slug || values.name, { lower: true }),
      status: Number(values.status),
      updateAt: serverTimestamp(),
    });
    toast.success("Update successful category!", {
      pauseOnHover: false,
      style: {
        backgroundColor: theme.toastSuccessColor,
      },
    });
    navigate("/manage/category");
  };
  return (
    <div>
      <DashboardHeading
        title="Category Update"
        desc={`Update category for ${getValues("name")}`}
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleUpdateCategory)} autoComplete="off">
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
        <Button
          className={`mx-auto ${!isDirty && "pointer-events-none opacity-50"}`}
          type="submit"
          loading={isSubmitting}
        >
          Update category
        </Button>
      </form>
    </div>
  );
};

export default CategoryUpdate;
