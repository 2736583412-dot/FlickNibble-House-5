import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/languageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 图片URL数组
const heroImages = [
  "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Romantic%20cinema%20dining%20experience%2C%20couple%20watching%20movie%20while%20enjoying%20fine%20dining%2C%20elegant%20setting%2C%20warm%20lighting&sign=06a8e48270650e7e4562cc49bb311393",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japanese%20summer%20tourism%2C%20romantic%20couple%20travel%2C%20Tokyo%20skyline%2C%20Mount%20Fuji%2C%20beautiful%20scenery&sign=548ffa4002baf61057adf573cc0b5261",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Gourmet%20Japanese%20food%2C%20sushi%20platter%2C%20fine%20dining%2C%20elegant%20presentation%2C%20high%20quality%20ingredients&sign=9e2b1d3644953d5804a55b5d7fd91f3c"
];

// 特色内容
const features = [
  {
    id: 1,
    title: "innovativeExperience",
    description: "innovativeExperienceDesc",
    icon: "fa-film",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Luxury%20cinema%20seats%2C%20private%20booths%2C%20premium%20viewing%20experience&sign=e6755a2c604e74e1daa504457f7d2c63"
  },
  {
    id: 2,
    title: "exquisiteDining",
    description: "exquisiteDiningDesc",
    icon: "fa-utensils",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Gourmet%20food%20presentation%2C%20fine%20dining%2C%20creative%20cuisine&sign=382c59150a22ad89c9af82a1887657a0"
  },
  {
    id: 3,
    title: "romanticJapanTour",
    description: "romanticJapanTourDesc",
    icon: "fa-map-marked-alt",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Romantic%20Japanese%20travel%2C%20traditional%20architecture%2C%20cherry%20blossoms&sign=528c6b3abb67a49cbd771ac185988778"
  }
];

// 旅游套餐亮点
const tourHighlights = [
  {
    city: "tokyo",
    highlight: "tokyoHighlight"
  },
  {
    city: "kyoto",
    highlight: "kyotoHighlight"
  },
  {
    city: "osaka",
    highlight: "osakaHighlight"
  },
  {
    city: "fuji",
    highlight: "fujiHighlight"
  },
  {
    city: "hokkaido",
    highlight: "hokkaidoHighlight"
  }
];

// 顾客评价
const testimonials = [
  {
    name: "zhangCouple",
    comment: "testimonial1",
    rating: 5
  },
  {
    name: "wangCouple",
    comment: "testimonial2",
    rating: 5
  },
  {
    name: "liuCouple",
    comment: "testimonial3",
    rating: 4
  }
];

const Home = () => {
  const { t, language } = useContext(LanguageContext);

  // 添加缺失的翻译键
  const translationKeys = {
    innovativeExperience: {
      zh: "创新观影体验",
      en: "Innovative Viewing Experience",
      ja: "革新的な視聴体験"
    },
    innovativeExperienceDesc: {
      zh: "在享受美食的同时观看最新电影，打破传统观影模式",
      en: "Watch the latest movies while enjoying delicious food, breaking traditional viewing patterns",
      ja: "美味しい食べ物を楽しみながら最新の映画を鑑賞し、伝統的な視聴パターンを打破します"
    },
    exquisiteDining: {
      zh: "精致美食享受",
      en: "Exquisite Dining Experience",
      ja: "洗練された食体験"
    },
    exquisiteDiningDesc: {
      zh: "专业厨师团队打造的创意料理，为您带来味蕾的盛宴",
      en: "Creative cuisine crafted by professional chefs, bringing you a feast for the taste buds",
      ja: "プロのシェフチームによって作られた創造的な料理で、味覚の饗宴をお届けします"
    },
    romanticJapanTour: {
      zh: "浪漫日本之旅",
      en: "Romantic Japan Tour",
      ja: "ロマンチックな日本ツアー"
    },
    romanticJapanTourDesc: {
      zh: "10天5城深度体验，感受日本的文化、美食与浪漫",
      en: "10-day deep experience in 5 cities, experiencing Japanese culture, cuisine and romance",
      ja: "10日間の5都市深層体験で、日本の文化、料理、ロマンスを感じてください"
    },
    tokyo: {
      zh: "东京",
      en: "Tokyo",
      ja: "東京"
    },
    tokyoHighlight: {
      zh: "迪士尼乐园浪漫体验、米其林餐厅用餐",
      en: "Romantic experience at Disneyland, dining at Michelin-starred restaurants",
      ja: "ディズニーランドでのロマンチックな体験、ミシュラン星付きレストランでの食事"
    },
    kyoto: {
      zh: "京都",
      en: "Kyoto",
      ja: "京都"
    },
    kyotoHighlight: {
      zh: "传统日式旅馆、和服体验、茶道文化",
      en: "Traditional Japanese ryokan, kimono experience, tea ceremony culture",
      ja: "伝統的な日本の旅館、着物体験、茶道文化"
    },
    osaka: {
      zh: "大阪",
      en: "Osaka",
      ja: "大阪"
    },
    osakaHighlight: {
      zh: "环球影城、美食探索之旅、温泉度假",
      en: "Universal Studios, food exploration tour, hot spring vacation",
      ja: "ユニバーサル・スタジオ、美食探検ツアー、温泉リゾート"
    },
    fuji: {
      zh: "富士山",
      en: "Mt. Fuji",
      ja: "富士山"
    },
    fujiHighlight: {
      zh: "日出观赏、温泉酒店、浪漫晚餐",
      en: "Sunrise viewing, hot spring hotel, romantic dinner",
      ja: "日の出鑑賞、温泉ホテル、ロマンチックなディナー"
    },
    hokkaido: {
      zh: "北海道",
      en: "Hokkaido",
      ja: "北海道"
    },
    hokkaidoHighlight: {
      zh: "薰衣草田、海鲜美食、星空观测",
      en: "Lavender fields, seafood cuisine, stargazing",
      ja: "ラベンダー畑、シーフード料理、星空観測"
    },
    zhangCouple: {
      zh: "张先生 & 李女士",
      en: "Mr. Zhang & Ms. Li",
      ja: "張さん & 李さん"
    },
    wangCouple: {
      zh: "王先生 & 陈女士",
      en: "Mr. Wang & Ms. Chen",
      ja: "王さん & 陳さん"
    },
    liuCouple: {
      zh: "刘先生 & 赵女士",
      en: "Mr. Liu & Ms. Zhao",
      ja: "劉さん & 趙さん"
    },
    testimonial1: {
      zh: "这是我们度过的最浪漫的旅行，电影与美食的结合让整个旅程充满惊喜。",
      en: "This is the most romantic trip we've ever had. The combination of movies and food made the whole journey full of surprises.",
      ja: "これは私たちがこれまでに経験した最もロマンチックな旅行でした。映画と食べ物の組み合わせが旅全体を驚きでいっぱいにしました。"
    },
    testimonial2: {
      zh: "服务非常贴心，行程安排合理，每个城市都有独特的体验。",
      en: "The service is very attentive, the itinerary is reasonable, and each city has a unique experience.",
      ja: "サービスは非常に細やかで、旅程は合理的で、各都市には独特の体験があります。"
    },
    testimonial3: {
      zh: "食物的品质超出预期，电影院的环境也非常舒适，强烈推荐！",
      en: "The quality of the food exceeded expectations, and the cinema environment is very comfortable. Highly recommended!",
      ja: "食べ物の品質は期待を超えており、映画館の環境も非常に快適です。強くおすすめします！"
    }
  };

  // 修复幻灯片切换逻辑
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* 英雄区域 */}
      <section className="relative pt-16 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <div className="h-full w-full">
            {heroImages.map((image, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            ))}
          </div>
          {/* 幻灯片指示器 */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 animate-fadeIn">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fadeIn animation-delay-300">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-600">
              <Link 
                to="/products/japan-tour" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-center"
              >
                {t('heroButton')}
              </Link>
              <Link 
                to="/contact/inquiry" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                {t('inquiryButton')}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#features" className="text-white opacity-70 hover:opacity-100 transition-opacity">
            <i className="fa fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>

      {/* 特色服务 */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('featuresTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('aboutDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={translationKeys[feature.title as keyof typeof translationKeys][language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                    <i className={`fa ${feature.icon} text-xl`}></i>
                  </div>
                   <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title in translationKeys ? translationKeys[feature.title as keyof typeof translationKeys][language] : feature.title}</h3>
                  <p className="text-gray-600">{translationKeys[feature.description as keyof typeof translationKeys][language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* 新旅游套餐 */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">316|             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">新旅游套餐</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              我们精心打造的全新旅游套餐，结合了独特的文化体验、美食探索和难忘的旅程。这是一场为追求高品质旅行体验的情侣和旅行者量身定制的精彩冒险。
            </p>
            <div className="inline-block">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                限时优惠
              </span>
              <span className="inline-block ml-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                独家体验
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-200 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-pink-200 rounded-full opacity-50 -z-10"></div>
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Luxury%20travel%20couple%20adventure%2C%20beautiful%20scenery%2C%20romantic%20atmosphere&sign=f406148f9570ec9b6526e0e253c2ae48" 
                alt="新旅游套餐" 
                className="w-full h-auto rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">行程亮点</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold mt-0.5 mr-3">1</div>
                  <div>
                    <span className="font-bold text-gray-900">独特的文化体验：</span>
                    <span className="text-gray-700">探索当地文化遗产，参与传统手工艺制作</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold mt-0.5 mr-3">2</div>
                  <div>
                    <span className="font-bold text-gray-900">精选美食探索：</span>
                    <span className="text-gray-700">品尝当地特色美食，参加厨艺大师班</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold mt-0.5 mr-3">3</div>
                  <div>
                    <span className="font-bold text-gray-900">豪华住宿体验：</span>
                    <span className="text-gray-700">入住高品质酒店，享受优质服务</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products/japan-tour" 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-center"
                >
                  查看详情
                </Link>
                <Link 
                  to="/contact/inquiry" 
                  className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors text-center"
                >
                  立即咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 顾客评价 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('testimonialsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('testimonialsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i 
                      key={i} 
                      className={`fa fa-star text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    ></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{translationKeys[testimonial.comment as keyof typeof translationKeys][language]}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <i className="fa fa-user text-gray-500"></i>
                  </div>
                  <span className="font-medium text-gray-900">{translationKeys[testimonial.name as keyof typeof translationKeys][language]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 行动号召 */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products/japan-tour" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('bookNowButton')}
            </Link>
            <Link 
              to="/contact/inquiry" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              {t('learnMoreButton')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// 导入必要的hook
import { useState, useEffect } from 'react';

export default Home;