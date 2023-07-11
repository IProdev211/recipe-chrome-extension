import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./theme";
import { Box, Container, CssBaseline } from "@mui/material";
import RecipeSearch from "./containers/RecipeSearch";
import { useState } from "react";
import AddRecipe from "./containers/AddRecipe";

function App() {
  const [addRecipe, setAddRecipe] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor="#0D1119" borderRadius="10px" p={3} width={410}>
        {addRecipe ? (
          <AddRecipe onBack={() => setAddRecipe(false)} />
        ) : (
          <RecipeSearch goToAdd={() => setAddRecipe(true)} />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
