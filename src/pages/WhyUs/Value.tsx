import { useContext } from 'react';
import { LanguageContext } from '../../contexts/languageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Value = () => {
  const { t } = useContext(LanguageContext);

  // 竞争优势数据
  const competitiveAdvantages = [
    {
      dimension: 'accommodationExperience',
      advantage: 'accommodationAdvantage',
      shortcoming: 'accommodationShortcoming'
    },
    {
      dimension: 'itineraryDesign',
      advantage: 'itineraryAdvantage',
      shortcoming: 'itineraryShortcoming'
    },
    {
      dimension: 'diningService',advantage: 'diningAdvantage',
      shortcoming: 'diningShortcoming'
    },
    {
      dimension: 'serviceGuarantee',
      advantage: 'serviceAdvantage',
      shortcoming: 'serviceShortcoming'
    },
    {
      dimension: 'flexibility',
      advantage: 'flexibilityAdvantage',
      shortcoming: 'flexibilityShortcoming'
    }
  ];

  // 行动号召数据
  const callToActions = [
    {
      title: 'bookNowCall'
    },
    {
      title: 'consultNowCall'
    },
    {
      title: 'shareAndEarnCall'
    },
    {
      title: 'limitedBenefitsCall'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* 页面头部 */}
      <header className="bg-gray-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('navWhyUs')}</h1>
          <p className="text-xl text-gray-300">{t('subNavValue')}</p>
        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 核心价值主张 */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('valuePropositionTitle')}</h2>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('coreValueProposition')}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('coreValuePropositionDesc')}
              </p>
            </div>
          </section>
          
          {/* 关键竞争优势 */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('competitiveAdvantagesTitle')}</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">{t('competitiveDimension')}</th>
                    <th className="px-6 py-4 text-left">{t('ourAdvantages')}</th>
                    <th className="px-6 py-4 text-left">{t('commonShortcomings')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                   {competitiveAdvantages.map((item, index) => (
                     <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{t(item.dimension)}</td>
                       <td className="px-6 py-4 text-gray-700">{t(item.advantage)}</td>
                       <td className="px-6 py-4 text-gray-700">{t(item.shortcoming)}</td>
                     </tr>
                   ))}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* 目标市场 */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('targetMarketTitle')}</h2>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('coreAudienceProfile')}</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">{t('basicAttributes')}</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">{t('behavioralCharacteristics')}</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">{t('painPoints')}</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">{t('decisionLogic')}</p>
                </div>
              </div>
              
               <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-900">{t('sustainabilityAndPartnerships')}</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* 可持续性部分 */}
                 <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                   <div className="flex items-center mb-4">
                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                       <i className="fa fa-leaf text-xl"></i>
                     </div>
                     <h4 className="text-xl font-bold text-gray-900">{t('sustainability')}</h4>
                   </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                     <p className="text-gray-700 mb-4">我们采用可持续的运营模式，通过智能资源配置和季节差异化定价策略，确保业务的长期稳定发展。</p>
                     <ul className="space-y-2 text-gray-700">
                       <li className="flex items-start">
                         <i className="fa fa-check-circle text-green-500 mt-1 mr-2"></i>
                         <span>季节差异化定价策略</span>
                       </li>
                       <li className="flex items-start">
                         <i className="fa fa-check-circle text-green-500 mt-1 mr-2"></i>
                         <span>资源优化配置，减少浪费</span>
                       </li>
                       <li className="flex items-start">
                         <i className="fa fa-check-circle text-green-500 mt-1 mr-2"></i>
                         <span>稳定利润率保障</span>
                       </li>
                     </ul>
                   </div>
                 </div>
                 
                 {/* 合作伙伴关系部分 */}
                 <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                   <div className="flex items-center mb-4">
                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                       <i className="fa fa-handshake text-xl"></i>
                     </div>
                     <h4 className="text-xl font-bold text-gray-900">{t('partnerships')}</h4>
                   </div>
                   <div className="bg-blue-50 p-6 rounded-lg">
                     <p className="text-gray-700 mb-4">{t('partnershipAdvantages')}</p>
                     <ul className="space-y-2 text-gray-700">
                       <li className="flex items-start">
                         <i className="fa fa-check-circle text-blue-500 mt-1 mr-2"></i>
                         <span>与OTA头部平台深度合作</span>
                       </li>
                       <li className="flex items-start">
                         <i className="fa fa-check-circle text-blue-500 mt-1 mr-2"></i>
                         <span>日本3★-5★酒店集群资源</span>
                       </li>
                       <li className="flex items-start">
                         <i className="fa fa-check-circle text-blue-500 mt-1 mr-2"></i>
                         <span>日本旅游局官方支持</span>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
           </section>
          
          {/* 行动号召 */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('callToAction')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {callToActions.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl shadow-lg"
                >
                  <p className="text-lg font-medium">{t(item.title)}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Value;