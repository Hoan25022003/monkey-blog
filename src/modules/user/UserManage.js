import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import Table from "../../components/table/Table";
import useFetchData from "../../hooks/useFetchData";
import { where } from "firebase/firestore";
import { useAuth } from "../../contexts/authContext";
import LabelStatus from "../../components/status/LabelStatus";

const UserStatus = ({ status }) => {
  switch (status) {
    case 1:
      return <LabelStatus type="success">Active</LabelStatus>;

    case 2:
      return <LabelStatus type="warning">Pending</LabelStatus>;

    case 3:
      return <LabelStatus type="danger">Banned</LabelStatus>;

    default:
      break;
  }
};

const UserRole = ({ role }) => {
  switch (role) {
    case 1:
      return <LabelStatus type="success">Admin</LabelStatus>;

    case 2:
      return <LabelStatus type="warning">Moderator</LabelStatus>;

    case 3:
      return <LabelStatus type="danger">User</LabelStatus>;

    default:
      break;
  }
};

const UserManage = () => {
  const { personalInfo } = useAuth();
  const { data: listUser } = useFetchData("users", [
    where("email", "!=", personalInfo.email),
  ]);
  return (
    <div>
      <DashboardHeading
        title="Manage user"
        desc="Manage user to system"
      ></DashboardHeading>
      {personalInfo.role === 1 ? (
        <Table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Info</td>
              <td>Email Address</td>
              <td>Status</td>
              <td>Role</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {listUser.length > 0 &&
              listUser.map((user) => (
                <tr key={user.id}>
                  <td title={user.id}>{user.id.slice(0, 6) + "..."}</td>
                  <td className="flex items-center">
                    <img
                      src={user.avatar}
                      className="w-10 h-10 rounded-full mr-3"
                      alt=""
                    />
                    <span>{user.fullName}</span>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <UserStatus status={user.status}></UserStatus>
                  </td>
                  <td>
                    <UserRole role={user.role}></UserRole>
                  </td>
                  <td>Actions</td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <div className="mt-8 text-center h-[250px] flex flex-col items-center justify-center">
          <img
            src="/say-no.png"
            className="mx-auto w-[100px] h-[100px]"
            alt=""
          />
          <h1 className="mt-6 font-semibold text-xl text-gray-500">
            You have not permission to access this page
          </h1>
        </div>
      )}
    </div>
  );
};

export default UserManage;
