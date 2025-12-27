import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { LanguageProvider } from '@/contexts/languageContext';

// 页面组件
import Home from "@/pages/Home";

// 关于我们页面
import Overview from "@/pages/About/Overview";
import Leadership from "@/pages/About/Leadership";

// 产品服务页面
import JapanTour from "@/pages/Products/JapanTour";
import Programs from "@/pages/Products/Programs";

// 为什么选择我们页面
import Value from "@/pages/WhyUs/Value";
import Sustainability from "@/pages/WhyUs/Sustainability";
import Partnerships from "@/pages/WhyUs/Partnerships";

// 联系我们页面
import Info from "@/pages/Contact/Info";
import Inquiry from "@/pages/Contact/Inquiry";
import Social from "@/pages/Contact/Social";

// 空组件
import { Empty } from "@/components/Empty";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <LanguageProvider>
        <Routes>
          {/* 主页 */}
          <Route path="/" element={<Home />} />
          
          {/* 关于我们 */}
          <Route path="/about" element={<Overview />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/leadership" element={<Leadership />} />
          
          {/* 产品服务 */}
          <Route path="/products" element={<JapanTour />} />
          <Route path="/products/japan-tour" element={<JapanTour />} />
          <Route path="/products/programs" element={<Programs />} />
          
          {/* 为什么选择我们 */}
          <Route path="/why-us" element={<Value />} />
          <Route path="/why-us/value" element={<Value />} />
          <Route path="/why-us/sustainability" element={<Sustainability />} />
          <Route path="/why-us/partnerships" element={<Partnerships />} />
          
           {/* 联系我们 */}
          <Route path="/contact" element={<Info />} />
          <Route path="/contact/info" element={<Info />} />
          <Route path="/contact/inquiry" element={<Inquiry />} />
          <Route path="/contact/social" element={<Social />} />

          {/* 404路由 */}
          <Route path="*" element={<Empty />} />
        </Routes>
      </LanguageProvider>
    </AuthContext.Provider>
  );
}
