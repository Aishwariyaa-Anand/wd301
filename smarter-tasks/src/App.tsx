import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/theme";
import router from "./routes"
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentProvider } from "./context/comment/context";

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <CommentProvider>
      <ProjectsProvider>
        <MembersProvider>
          <RouterProvider router={router} />
        </MembersProvider>
      </ProjectsProvider>
      </CommentProvider>
    </div>
  );
}
export default App;