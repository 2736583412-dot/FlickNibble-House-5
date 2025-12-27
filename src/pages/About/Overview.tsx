import { useContext } from 'react';
import { LanguageContext } from '../../contexts/languageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Overview = () => {
  const { t, language } = useContext(LanguageContext);

  // 添加缺失的翻译键
  const translationKeys = {
    companyFounding: {
      zh: 'FlickNibble House成立于2018年，总部位于中国上海，是一家创新型的"电影+餐饮"体验品牌。我们致力于为顾客提供独特的观影和用餐体验，打破传统电影院和餐厅的界限，创造一个全新的娱乐空间。',
      en: 'FlickNibble House was founded in 2018 and is headquartered in Shanghai, China. It is an innovative "movie + dining" experience brand. We are committed to providing customers with a unique movie watching and dining experience, breaking the boundaries between traditional cinemas and restaurants, and creating a new entertainment space.',
      ja: 'FlickNibble Houseは2018年に設立され、中国上海市に本社を置く、革新的な「映画＋ダイニング」体験ブランドです。当社は顧客に独特の映画鑑賞と食体験を提供し、伝統的な映画館とレストランの境界を打破し、新たなエンターテイメントスペースを創造することに取り組んでいます。'
    },
    development2018: {
      zh: 'FlickNibble House在上海成立，开设第一家"电影+餐饮"体验店',
      en: 'FlickNibble House was established in Shanghai, opening the first "movie + dining" experience store',
      ja: 'FlickNibble Houseが上海に設立され、最初の「映画＋ダイニング」体験ストアをオープン'
    },
    development2020: {
      zh: '扩展至北京、广州、深圳，全国门店达到5家',
      en: 'Expanded to Beijing, Guangzhou, and Shenzhen, with 5 stores nationwide',
      ja: '北京、広州、深センに拡大し、全国の店舗数は5軒に到達'
    },
    development2022: {
      zh: '推出定制化电影主题餐单，获得行业创新奖',
      en: 'Launched customized movie-themed menus and won industry innovation awards',
      ja: 'カスタマイズされた映画テーマのメニューを発表し、業界イノベーション賞を受賞'
    },
    development2025: {
      zh: '推出"10天5城日本夏日限量游"，将电影、美食与旅游相结合',
      en: 'Launched the "10-Day 5-City Japan Summer Limited Tour", combining movies, food and travel',
      ja: '「10日5都市日本夏限定ツアー」を発表し、映画、食べ物、旅行を組み合わせる'
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* 页面头部 */}
      <header className="bg-gray-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('aboutTitle')}</h1>
          <p className="text-xl text-gray-300">{t('subNavCompanyOverview')}</p>
        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('aboutTitle')}</h2>
              <p className="text-gray-700 mb-4">{t('aboutDescription')}</p>
              <p className="text-gray-700">
                {translationKeys.companyFounding[language]}
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Modern%20cinema%20dining%20interior%2C%20elegant%20design%2C%20comfortable%20seating%2C%20high%20end%20restaurant%20atmosphere&sign=222e32b8e33a50569ef7a8388850ee21" 
                alt={t('aboutTitle')} 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          {/* 使命愿景 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                <i className="fa fa-bullseye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('missionTitle')}</h3>
              <p className="text-gray-700">{t('missionDescription')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <i className="fa fa-eye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('visionTitle')}</h3>
              <p className="text-gray-700">{t('visionDescription')}</p>
            </div>
          </div>
          
          {/* 核心价值 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 rounded-xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">{t('coreValuesTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 mx-auto">
                  <i className="fa fa-star text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('freshQuality')}</h3>
                <p className="text-gray-600 text-sm">{t('freshQualityDesc')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 mx-auto">
                  <i className="fa fa-heart text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('attentiveService')}</h3>
                <p className="text-gray-600 text-sm">{t('attentiveServiceDesc')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 mx-auto">
                  <i className="fa fa-handshake text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('winWinCooperation')}</h3>
                <p className="text-gray-600 text-sm">{t('winWinCooperationDesc')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600 mx-auto">
                  <i className="fa fa-lightbulb text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('continuousInnovation')}</h3>
                <p className="text-gray-600 text-sm">{t('continuousInnovationDesc')}</p>
              </div>
            </div>
          </div>
          
          {/* 主要业务 */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">{t('mainBusinessesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                  <i className="fa fa-utensils text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{t('scenarioCatering')}</h3>
                <p className="text-gray-700">{t('scenarioCateringDesc')}</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <i className="fa fa-ticket-alt text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{t('ticketMealPackage')}</h3>
                <p className="text-gray-700">{t('ticketMealPackageDesc')}</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <i className="fa fa-users text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{t('corporateCustomization')}</h3>
                <p className="text-gray-700">{t('corporateCustomizationDesc')}</p>
              </div>
            </div>
          </div>
          
          {/* 与娱乐行业的联系 */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 md:p-12 rounded-xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t('connectionWithEntertainment')}</h2>
            <p className="text-lg mb-6">
              {t('connectionWithEntertainmentDesc1')}
            </p>
            <p className="text-lg">
              {t('connectionWithEntertainmentDesc2')}
            </p>
          </div>
          

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Overview;