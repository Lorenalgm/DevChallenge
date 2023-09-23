import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Challenges } from "./pages/Challenges";
import { Community } from "./pages/Community";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/devs" element={<Community />} />
      </Switch>
    </BrowserRouter>
  );
}
