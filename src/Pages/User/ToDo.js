import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const ToDo = () => {
  const [user, loading] = useAuthState(auth);
  const taskName = useRef("");
  const taskDes = useRef("");

  if (loading) {
    return <Loading />;
  }
  const taskSubmit = async (event) => {
    event.preventDefault();
    const name = taskName.current.value;
    const description = taskDes.current.value;
    const email = user.email;

    const data = {
      name: name,
      description: description,
      email: email,
    };
    console.log(data);

    const url = `https://stark-harbor-77488.herokuapp.com/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success("Congress!!! your task added");
        console.log(res);
        event.target.reset();
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Task Here !</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={taskSubmit}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Name</span>
                  </label>
                  <input
                    type="text"
                    ref={taskName}
                    required
                    placeholder="Enter your task name..."
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    ref={taskDes}
                    type="text"
                    placeholder="Write here..."
                    className="textarea input-bordered hover:border-green-900 focus:z-10"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary hover:bg-rose-600 hover:border-0"
                    type="submit"
                    value="Add Task"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ToDo;
