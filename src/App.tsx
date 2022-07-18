import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Hello</h1>
    </ThemeProvider>
  );
}
