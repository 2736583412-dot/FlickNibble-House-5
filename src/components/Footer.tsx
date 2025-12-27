import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/languageContext';

const Footer = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/316078710274/attachment/微信图片_20250926134537_20251227182351.jpg" 
                alt="FlickNibble House Logo" 
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-bold">FlickNibble House</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('aboutDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weixin"></i>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('navHome')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('navAbout')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  {t('navProducts')}
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-gray-400 hover:text-white transition-colors">
                  {t('navWhyUs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('navContact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker-alt mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">{t('addressDetail')}</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-gray-400"></i>
                <span className="text-gray-400">{t('phoneNumber')}</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-gray-400"></i>
                <span className="text-gray-400">{t('emailAddress')}</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-clock mr-3 text-gray-400"></i>
                <span className="text-gray-400">{t('businessHoursDetail')}</span>
              </li>
            </ul>
          </div>

          {/* 订阅通讯 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('subscribeNewsletter')}</h3>
            <p className="text-gray-400 mb-4">{t('subscribeNewsletterDesc')}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t('copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('privacyPolicy')}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('termsOfService')}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('cookiePolicy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;