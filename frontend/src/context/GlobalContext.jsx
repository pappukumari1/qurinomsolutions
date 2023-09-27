import React, { createContext, useEffect, useState } from "react";
import {
  deleteApiHandler,
  getApiHandler,
  postApiHandler,
  putApiHandler,
} from "../apiHandler";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});


  const deletePost = async (id) => {
    const result = await deleteApiHandler(`/post/${id}`);
    if (result.status === 200) await getPost();
  };
  const getPost = async () => {
    const getRes = await getApiHandler(`/post/get`);
    setPosts(getRes.response);
  };
  return (
    <GlobalContext.Provider
      value={{
        posts,
        setPosts,
        user,
        setUser,
        deletePost,
        getPost,
        post,
        setPost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
