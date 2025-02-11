import React, { useState } from "react";

import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "../../redux/hooks";
import { useGetTodosQuery } from "../../redux/api/api";

const TodoContainer = () => {
  // const {todos}= useAppSelector((state)=>state.todos)
  const [priority,setPriority]= useState('')
  const {data:todos,isLoading,isError}= useGetTodosQuery(priority);

  console.log(todos);
  
  console.log(priority);
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <AddTodoModal/>
        
        <TodoFilter priority={priority} setPriority={setPriority}/>
        
      </div>
      <div className=" w-full h-full p-[5px] space-y-3 bg-primary-gradient rounded-xl my-5  mx-auto ">
      
      <div className="bg-white p-3 space-y-3  text-center rounded-md ">
       {/* <p className="text-2xl"> There is no Todo</p> */}
       {todos?.data?.map((item)=>(
        <TodoCard key={item._id} {...item}/>
       ))}
      
        </div>
  
     
      </div>
    </div>
  );
};

export default TodoContainer;
