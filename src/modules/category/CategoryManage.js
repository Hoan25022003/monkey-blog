import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { debounce } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import Button2 from "../../components/button/Button2";
import LabelStatus from "../../components/status/LabelStatus";
import Table from "../../components/table/Table";
import { db } from "../../firebases/firebaseConfig";
import useSnapshot from "../../hooks/useSnapshot";
import { theme } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryManage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState("");
  const { dataSnapshot: categories, dataCount: categoryCount } = useSnapshot(
    "category",
    filter,
    [where("name", ">=", filter), where("name", "<=", filter + "utf8")]
  );
  const handleDeleteCategory = async (categoryID) => {
    const docRef = doc(db, "category", categoryID);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: theme.primary,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      await deleteDoc(docRef);
    }
  };
  const handleSearchCategory = debounce((e) => {
    setFilter(e.target.value);
  }, 500);
  console.log(categoryCount);
  return (
    <div>
      <DashboardHeading
        title="Categories"
        desc="Manage your category"
      ></DashboardHeading>
      <div className="flex items-center justify-between mb-5">
        <Button2
          link="/manage/add-category"
          bgColor={theme.toastSuccessColor}
          fontColor="green"
        >
          Add Category
        </Button2>
        <input
          type="text"
          className="p-4 border border-gray-200 w-[300px] rounded-xl focus:border-green-500 transition-all"
          placeholder="Search category in here"
          onChange={handleSearchCategory}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <em className="text-gray-400">{category.slug}</em>
                </td>
                <td>
                  {category.status === 1 ? (
                    <LabelStatus type="success">Approved</LabelStatus>
                  ) : (
                    <LabelStatus type="danger">Unapproved</LabelStatus>
                  )}
                </td>
                <td>
                  <div className="flex gap-5 text-gray-400">
                    <ActionView></ActionView>
                    <ActionEdit
                      onClick={() =>
                        navigate("/manage/update-category?id=" + category.id)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteCategory(category.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryManage;
