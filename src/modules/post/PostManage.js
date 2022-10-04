import { deleteDoc, doc, getDoc, where } from "firebase/firestore";
import { debounce } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import Pagination from "../../components/pagination/Pagination";
import Table from "../../components/table/Table";
import { db } from "../../firebases/firebaseConfig";
import useSnapshot from "../../hooks/useSnapshot";
import { theme } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";

const PostManage = () => {
  const [filter, setFilter] = React.useState("");
  const { dataSnapshot: listPost } = useSnapshot("posts", filter, [
    where("title", ">=", filter),
    where("title", "<=", filter + "utf8"),
  ]);
  const navigate = useNavigate();
  const handleDeletePost = async (postID) => {
    const docRef = doc(db, "posts", postID);
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
  const handleSearchPost = debounce((e) => setFilter(e.target.value), 500);
  return (
    <div>
      <DashboardHeading
        title="Posts"
        desc="Manage your post"
      ></DashboardHeading>
      <div className="mb-5 flex justify-end">
        <div className="w-full max-w-[300px]">
          <input
            type="text"
            className="w-full p-4 rounded-lg border border-solid border-gray-300"
            placeholder="Search post..."
            onChange={handleSearchPost}
          />
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Post</th>
            <th>Category</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listPost.length > 0 &&
            listPost.map((post) => (
              <tr key={post.id}>
                <td>{post.id.slice(0, 5) + "..."}</td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <img
                      src={post.image}
                      alt=""
                      className="w-[66px] h-[55px] rounded object-cover"
                    />
                    <div className="flex-1" title={post.title}>
                      <h3 className="font-semibold">
                        {post.title.slice(0, 40) + "..."}
                      </h3>
                      <PostTimer seconds={post.createAt.seconds}></PostTimer>
                    </div>
                  </div>
                </td>
                <td>
                  <CategoryName categoryID={post.categoryID}></CategoryName>
                </td>
                <td>
                  <PostAuthor userID={post.userID}></PostAuthor>
                </td>
                <td>
                  <div className="flex gap-x-5 text-gray-400">
                    <ActionView
                      onClick={() => navigate("/" + post.slug)}
                    ></ActionView>
                    <ActionEdit
                      onClick={() =>
                        navigate("/manage/update-post?id=" + post.id)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeletePost(post.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="mt-10"></div>
    </div>
  );
};

const CategoryName = ({ categoryID }) => {
  const [category, setCategory] = React.useState({});
  React.useEffect(() => {
    async function getCategory() {
      const colRef = doc(db, "category", categoryID);
      const docSnap = await getDoc(colRef);
      setCategory(docSnap.data());
    }
    getCategory();
  }, [categoryID]);
  return <span className="text-gray-500">{category.name}</span>;
};

const PostAuthor = ({ userID }) => {
  const [username, setUsername] = React.useState({});
  React.useEffect(() => {
    async function getUsername() {
      const colRef = doc(db, "users", userID);
      const docSnap = await getDoc(colRef);
      setUsername(docSnap.data());
    }
    getUsername();
  }, [userID]);
  return <span>{username.fullName}</span>;
};

const PostTimer = ({ seconds }) => {
  const date = new Date(seconds * 1000);
  const formDate = date.toLocaleDateString("vi-VI");
  return <time className="text-sm text-gray-500">{formDate}</time>;
};

export default PostManage;
