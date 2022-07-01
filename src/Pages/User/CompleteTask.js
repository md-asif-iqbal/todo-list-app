import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const CompleteTask = () => {
  const status = "completed";
  const [newData, setNewData] = useState(null);
  const [user, loading] = useAuthState(auth);
  const { data, isLoading, refetch } = useQuery("data", () =>
    fetch(
      `https://stark-harbor-77488.herokuapp.com/taskcomplete?email=${user.email}&&status=${status}`
    ).then((res) => res.json())
  );
  console.log(data);

  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="bg-white text-2xl font-bold "> All Complete Task Here</h2>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, index) => (
              <tr key={p._id}>
                <th>{index + 1}</th>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td className="text-green-600">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompleteTask;
