import { Routes, Route } from "react-router-dom";
import Products from "./Products";

function PageContent() {
  return (
    <div className="pageContent">
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/:categoryId" element={<Products />}></Route>
      </Routes>
    </div>
  );
}
export default PageContent;