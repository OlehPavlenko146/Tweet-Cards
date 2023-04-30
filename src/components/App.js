import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyles";
import { Container } from "../App.styled.jsx";

import { Loader } from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));
const Layout = lazy(() => import("./Layout/Layout"));
const Tweets = lazy(() => import("../pages/Tweets/Tweets"));

function App() {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>

      <GlobalStyle />
    </Container>
  );
}

export default App;
