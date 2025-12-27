import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/languageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useContext(LanguageContext);

  // 导航项目
  const navItems = [
    { 
      id: 'home', 
      label: t('navHome'), 
      path: '/',
      subItems: []
    },
    { 
      id: 'about', 
      label: t('navAbout'), 
      path: '/about',
      subItems: [
        { id: 'overview', label: t('subNavCompanyOverview'), path: '/about/overview' },
        { id: 'leadership', label: t('subNavLeadership'), path: '/about/leadership' }
      ]
    },
    { 
      id: 'products', 
      label: t('navProducts'), 
      path: '/products',
      subItems: [
        { id: 'japanTour', label: t('subNavJapanTour'), path: '/products/japan-tour' },
        { id: 'programs', label: t('subNavPrograms'), path: '/products/programs' }
      ]
    },
    { 
      id: 'why-us', 
      label: t('navWhyUs'), 
      path: '/why-us',
      subItems: [
        { id: 'value', label: t('subNavValue'), path: '/why-us/value' },
        { id: 'sustainability', label: t('subNavSustainability'), path: '/why-us/sustainability' },
        { id: 'partnerships', label: t('subNavPartnerships'), path: '/why-us/partnerships' }
      ]
    },
    { 
      id: 'contact', 
      label: t('navContact'), 
      path: '/contact',
      subItems: [
        { id: 'info', label: t('subNavContactInfo'), path: '/contact/info' },
        { id: 'inquiry', label: t('subNavInquiry'), path: '/contact/inquiry' },
        { id: 'social', label: t('subNavSocialMedia'), path: '/contact/social' }
      ]
    }
  ];

  // 切换下拉菜单
  const toggleDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  // 切换语言
  const handleLanguageChange = (lang: 'zh' | 'en' | 'ja') => {
    setLanguage(lang);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* 品牌标志 */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/316078710274/attachment/微信图片_20250926134537_20251227182351.jpg" 
                  alt="FlickNibble House Logo" 
                  className="h-8 w-auto mr-2"
                />
                <span className="text-xl font-bold text-gray-900 dark:text-white">FlickNibble House</span>
              </Link>
            
            {/* 桌面导航 */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navItems.map((item) => (
                <div key={item.id} className="relative flex items-center">
                  {item.subItems.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className="flex items-center px-1 pt-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {item.label}
                        <i className={`fa fa-chevron-down ml-1 text-xs transition-transform ${activeDropdown === item.id ? 'transform rotate-180' : ''}`}></i>
                      </button>
                      
                      {/* 下拉菜单 */}
                      {activeDropdown === item.id && (
                        <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-1 pt-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* 语言切换器 */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleLanguageChange('zh')}
              className={`px-2 py-1 text-sm rounded ${language === 'zh' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              中
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('ja')}
              className={`px-2 py-1 text-sm rounded ${language === 'ja' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              日
            </button>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} h-6 w-6`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.subItems.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.label}
                      <i className={`fa fa-chevron-down ml-auto transition-transform ${activeDropdown === item.id ? 'transform rotate-180' : ''}`}></i>
                    </button>
                    
                    {/* 移动端下拉菜单 */}
                    {activeDropdown === item.id && (
                      <div className="mt-1 ml-4 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* 移动端语言切换器 */}
            <div className="flex space-x-2 px-3 py-2">
              <button
                onClick={() => handleLanguageChange('zh')}
                className={`px-2 py-1 text-sm rounded ${language === 'zh' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
              >
                中
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange('ja')}
                className={`px-2 py-1 text-sm rounded ${language === 'ja' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
              >
                日
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;