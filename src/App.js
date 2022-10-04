import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const DashboardLayout = React.lazy(() =>
  import("./modules/dashboard/DashboardLayout")
);
const PageNotFound = React.lazy(() => import("./pages/NotFoundPage"));
const CategoryManage = React.lazy(() =>
  import("./modules/category/CategoryManage")
);
const CategoryUpdate = React.lazy(() =>
  import("./modules/category/CategoryUpdate")
);
const CategoryAddNews = React.lazy(() =>
  import("./modules/category/CategoryAddNews")
);
const PostAddNews = React.lazy(() => import("./modules/post/PostAddNews"));
const PostManage = React.lazy(() => import("./modules/post/PostManage"));
const PostUpdateNews = React.lazy(() =>
  import("./modules/post/PostUpdateNews")
);
const PostDetailsPage = React.lazy(() => import("./pages/PostDetailPage"));
const UserAdd = React.lazy(() => import("./modules/user/UserAdd"));
const UserManage = React.lazy(() => import("./modules/user/UserManage"));
const UserUpdate = React.lazy(() => import("./modules/user/UserUpdate"));

function App() {
  return (
    <AuthProvider>
      <Suspense>
        <Routes>
          <Route path="/register" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<SignIn></SignIn>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/blog" element={<>Hello World</>}></Route>
          <Route path="/contact" element={<>Hello World</>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          <Route
            path="/:postSlug"
            element={<PostDetailsPage></PostDetailsPage>}
          ></Route>
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/dashboard"
              element={<DashboardPage></DashboardPage>}
            ></Route>
            <Route
              path="/manage/post"
              element={<PostManage></PostManage>}
            ></Route>
            <Route
              path="/manage/update-post"
              element={<PostUpdateNews></PostUpdateNews>}
            ></Route>
            <Route
              path="/manage/category"
              element={<CategoryManage></CategoryManage>}
            ></Route>
            <Route
              path="/manage/add-post"
              element={<PostAddNews></PostAddNews>}
            ></Route>
            <Route
              path="/manage/add-category"
              element={<CategoryAddNews></CategoryAddNews>}
            ></Route>
            <Route
              path="/manage/update-category"
              element={<CategoryUpdate></CategoryUpdate>}
            ></Route>
            <Route
              path="/manage/user"
              element={<UserManage></UserManage>}
            ></Route>
            <Route
              path="/manage/add-user"
              element={<UserAdd></UserAdd>}
            ></Route>
            <Route path="/profile" element={<UserUpdate></UserUpdate>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
