import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./theme";
import { Box, Container, CssBaseline } from "@mui/material";
import RecipeSearch from "./containers/RecipeSearch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor="#0D1119" borderRadius="10px" p={3} width={410}>
        <RecipeSearch />
      </Box>
    </ThemeProvider>
  );
}

export default App;
