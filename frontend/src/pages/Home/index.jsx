import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import MainLayout from "../../layout/mainLayout";
import GlobalContext from "../../context/GlobalContext";
import { postApiHandler, putApiHandler } from "../../apiHandler";
import MediaCard from "../../components/card";
import { useNavigate } from "react-router-dom";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Home() {
  const { getPost, posts, post, setPost } = React.useContext(GlobalContext);
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const history = useNavigate();

  const onSubmit = async (values) => {

    const result = post._id
      ? await putApiHandler(`/post/${post._id}`, values)
      : await postApiHandler("/post", values);
    setPost({});
    if (result.data.status === 401) {
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      history("/signin");
    } else {
      await getPost();
    }
  };
  React.useEffect(() => {
    getPost();
  }, []);
  React.useEffect(() => {
    if (post) setValue("thought", post.thought);
  }, [post]);
  return (
    <MainLayout>
      {/* <Container component="main" maxWidth="xs"> */}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              label="Thought"
              {...register("thought")}
            />
            <Button variant="outlined" color="success" type="submit">{post && post._id ? "EDIT" :  "ADD"}</Button>
          </Box>
        </form>
      </Box>

      <h3>Posts</h3>

      {posts?.map((val) => {
        return <MediaCard key={val._id} post={val} />;
      })}
    
    </MainLayout>
  );
}
