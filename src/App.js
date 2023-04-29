import { GlobalStyle } from "./GlobalStyles";
import { Container } from "./App.styled.jsx";
import { TweetCardsList } from "./components/TweetCard/TweetCardsList";

function App() {
  return (
    <Container>
      <TweetCardsList />
      <GlobalStyle />
    </Container>
  );
}

export default App;
