import { useState, useContext } from 'react';
import { toast } from 'sonner';
import { LanguageContext } from '../../contexts/languageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Inquiry = () => {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'entertainmentExperience',
    travelPartySize: '2',
    travelDate: '',
    destinations: [] as string[],
    specialRequests: '',
    referralSource: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 处理复选框变化
  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prevData => {
      if (checked) {
        return {
          ...prevData,
          destinations: [...prevData.destinations, value]
        };
      } else {
        return {
          ...prevData,
          destinations: prevData.destinations.filter(item => item !== value)
        };
      }
    });
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 表单验证
    if (!formData.name || !formData.phone || !formData.email || !formData.inquiryType) {
      toast.error(t('formValidationError'));
      return;
    }
    
    // 模拟表单提交
    setIsSubmitting(true);
    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 显示成功提示
      toast.success(t('formSubmitSuccess'));
      
      // 重置表单
      setFormData({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'entertainmentExperience',
        travelPartySize: '2',
        travelDate: '',
        destinations: [],
        specialRequests: '',
        referralSource: '',
        message: ''
      });
    } catch (error) {
      toast.error(t('formSubmitError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // 添加缺失的翻译键
  const translationKeys = {
    formValidationError: {
      zh: '请填写所有必填字段',
      en: 'Please fill in all required fields',
      ja: 'すべての必須フィールドを入力してください'
    },
    formSubmitSuccess: {
      zh: '感谢您的咨询，我们将尽快回复您！',
      en: 'Thank you for your inquiry, we will reply to you as soon as possible!',
      ja: 'お問い合わせいただきありがとうございます。できるだけ早くお返事いたします！'
    },
    formSubmitError: {
      zh: '提交失败，请稍后再试',
      en: 'Submission failed, please try again later',
      ja: '送信に失敗しました。後でもう一度お試しください'
    }
  };

  // 目的地选项
  const destinationOptions = [
    { value: 'tokyo', label: '东京' },
    { value: 'kyoto', label: '京都' },
    { value: 'osaka', label: '大阪' },
    { value: 'nara', label: '奈良' },
    { value: 'okinawa', label: '冲绳' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* 页面头部 */}
      <header className="bg-gray-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('navContact')}</h1>
          <p className="text-xl text-gray-300">{t('subNavInquiry')}</p>
        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 联系我们卡片导航 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <i className="fa fa-map-marker-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{t('contactInfoCard')}</h3>
              <p className="text-gray-600 mb-6">{t('contactInfoCardDesc')}</p>
              <a href="/contact/info" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                {t('learnMoreButton')}
                <i className="fa fa-arrow-right ml-2"></i>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <i className="fa fa-file-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{t('inquiryFormCard')}</h3>
              <p className="text-gray-600 mb-6">{t('inquiryFormCardDesc')}</p>
              <a href="/contact/inquiry" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                {t('learnMoreButton')}
                <i className="fa fa-arrow-right ml-2"></i>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <i className="fa fa-share-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{t('socialMediaCard')}</h3>
              <p className="text-gray-600 mb-6">{t('socialMediaCardDesc')}</p>
              <a href="/contact/social" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                {t('learnMoreButton')}
                <i className="fa fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
          
          {/* 查询表单 */}
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">{t('inquiryFormTitleNew')}</h2>
            <p className="text-gray-600 mb-8 text-center">{t('inquiryFormIntro')}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formName')} <span className="text-red-500">{t('requiredField')}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder={t('namePlaceholder')}
                  required
                />
              </div>
              
              {/* 联系电话 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formPhone')} <span className="text-red-500">{t('requiredField')}</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder={t('phonePlaceholder')}
                  required
                />
              </div>
              
              {/* 电子邮箱 */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formEmail')} <span className="text-red-500">{t('requiredField')}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder={t('emailPlaceholderForm')}
                  required
                />
              </div>
              
              {/* 咨询类型 */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('inquiryType')} <span className="text-red-500">{t('requiredField')}</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="entertainmentExperience">{t('entertainmentExperience')}</option>
                  <option value="japanCoupleTour">{t('japanCoupleTour')}</option>
                  <option value="cooperationProject">{t('cooperationProject')}</option>
                  <option value="other">{t('otherInquiryNew')}</option>
                </select>
              </div>
              
              {/* 出行人数 */}
              <div>
                <label htmlFor="travelPartySize" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('travelPartySize')}
                </label>
                <select
                  id="travelPartySize"
                  name="travelPartySize"
                  value={formData.travelPartySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="2">2人</option>
                  <option value="4">4人</option>
                  <option value="6">6人</option>
                  <option value="8">8人</option>
                  <option value="more">8人以上</option>
                </select>
              </div>
              
              {/* 计划出行时间 */}
              <div>
                <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('travelDate')}
                </label>
                <input
                  type="text"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="例如：2024年夏季 / 樱花季 / 红叶季"
                />
              </div>
              
              {/* 感兴趣的目的地 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('interestedDestinations')}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {destinationOptions.map(option => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`destination-${option.value}`}
                        value={option.value}
                        checked={formData.destinations.includes(option.value)}
                        onChange={handleDestinationChange}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`destination-${option.value}`} className="ml-2 text-gray-700">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 特别需求/备注 */}
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('specialRequests')}
                </label>
                <input
                  type="text"
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                   placeholder={t('specialRequestsPlaceholder')}
                />
              </div>
              
              {/* 了解渠道 */}
              <div>
                <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('referralSource')}
                </label>
                <select
                  id="referralSource"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="" disabled>请选择</option>
                  <option value="xiaohongshu">{t('xiaohongshu')}</option>
                  <option value="douyin">{t('douyin')}</option>
                  <option value="ctrip">{t('ctrip')}</option>
                  <option value="friendReferral">{t('friendReferral')}</option>
                  <option value="other">其他</option>
                </select>
              </div>
              
              {/* 留言内容 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder={t('messagePlaceholder')}
                ></textarea>
              </div>
              
              {/* 隐私声明 */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">{t('privacyStatement')}</p>
              </div>
              
              {/* 提交按钮 */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa fa-spinner fa-spin mr-2"></i> {t('formSubmitLoading')}
                    </>
                  ) : (
                    <>
                      <i className="fa fa-paper-plane mr-2"></i> {t('submitInquiry')}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Inquiry;