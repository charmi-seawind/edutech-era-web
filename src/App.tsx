import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

import Layout from "./layouts/Latout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BuyNowPage from "./pages/BuyNowPage";
import NewsMediaPage from "./pages/NewsMediaPage";
import ProductPage from "./pages/ProductPage";
import AffilatePage from "./pages/AffilatePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./module/blog/BlogDetails";
import FaqPage from "./pages/FaqPage";
import VideoPage from "./pages/VideoPage";
import PayementPolicy from "./page/PayementPolicy";
import PrivacyPolicy from "./page/PrivacyPolicy";
import Refund from "./page/Refund";
import TermsCondition from "./page/TermsCondition";
import NoteBook from "./page/NoteBook";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/buynow" element={<BuyNowPage />} />
          <Route path="/media" element={<NewsMediaPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/affilate" element={<AffilatePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/blog-details" element={<BlogDetail />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/page/payment-policy" element={<PayementPolicy />} />
          <Route path="/page/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/page/terms-condition" element={<TermsCondition />} />
          <Route path="/page/refund" element={<Refund />} />
          <Route path="/notebook" element={<NoteBook />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
