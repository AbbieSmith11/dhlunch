import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage.tsx";
import Restaurant from "../pages/Restaurant/Restaurant.tsx";
import WriteReview from "../pages/WriteReview/WriteReview.tsx";
import MyRestaurantsPage from "../pages/Dashboard/MyRestaurantsPage/MyRestaurantsPage.tsx";
import MyReviewsPage from "../pages/Dashboard/MyReviewsPage/MyReviewsPage.tsx";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/writereview" element={<WriteReview />} />
        <Route
          path="/dashboard/myrestaurants"
          element={<MyRestaurantsPage />}
        />
        <Route path="/dashboard/myreviews" element={<MyReviewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
