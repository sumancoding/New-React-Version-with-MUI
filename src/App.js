import React from "react";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import { Box, Stack } from "@mui/material";
import Add from "./components/Add";

const App = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
};

export default App;

// import React from "react";
// import { Stack, Button, styled } from "@mui/material";
// import ArchiveIcon from "@mui/icons-material/Archive";

// const App = () => {
//   const BlueButton = styled(Button)(({ theme }) => ({
//     backgroundColor: "skyblue",
//     color: "white",
//     "&:hover": { backgroundColor: "skyblue" },
//   }));
//   return (
//     <div>
//       <h1>Welcome Bro!!</h1>
//       <Stack spacing={2} direction="row">
//         <Button variant="contained" color="secondary">
//           Text
//         </Button>
//         <BlueButton startIcon={<ArchiveIcon />}>Conatined with Icon</BlueButton>
//         <BlueButton>Styled Button</BlueButton>
//       </Stack>
//     </div>
//   );
// };

// export default App;
