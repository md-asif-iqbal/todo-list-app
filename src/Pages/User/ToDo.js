import React, { useRef } from "react";

const ToDo = () => {
    const taskName = useRef("")
    const taskDes = useRef("")


    const taskSubmit= async(event)=>{
        event.preventDefault();
        const name = taskName.current.value;
        const description = taskDes.current.value;
        console.log(name,"and", description);
        event.target.reset();
    }
  return (
    <div>
      <div class="hero min-h-screen bg-base-300">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Task Here !</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={taskSubmit}>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Task Name</span>
                </label>
                <input
                  type="text"
                  ref={taskName}
                  required
                  placeholder="Enter your task name..."
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Short Description</span>
                </label>
                <textarea
                ref={taskDes}
                  type="text"
                  placeholder="Write here..."
                  class="textarea input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Add Task</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
