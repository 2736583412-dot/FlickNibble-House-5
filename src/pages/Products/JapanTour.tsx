import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/languageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// 日本旅游套餐数据
const japanTourPackage = {
  title: "japanTourTitle",
  subtitle: "japanTourSubtitle",
  description: "japanTourDescription",
  highlights: [
    { city: "tokyo", highlight: "tokyoHighlight" },
    { city: "kyoto", highlight: "kyotoHighlight" },
    { city: "osaka", highlight: "osakaHighlight" },
    { city: "nara", highlight: "naraHighlight" },
    { city: "okinawa", highlight: "okinawaHighlight" }
  ],
  itinerary: [
    {
      day: "day1-2",
      city: "tokyo",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Tokyo%20skyline%2C%20romantic%20couple%20travel%2C%20night%20view%2C%20Tokyo%20Tower&sign=1a8b0bb33603cc521741fe30a7d281cc",
      activities: [
        "抵达东京成田国际机场，专车接机",
        "入住豪华酒店，享受欢迎晚宴",
        "迪士尼乐园一日游，体验浪漫氛围",
        "米其林星级餐厅用餐体验",
        "东京塔夜景观赏"
      ]
    },
    {
      day: "day3-4",
      city: "kyoto",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Kyoto%20traditional%20temple%2C%20couple%20in%20kimono%2C%20cherry%20blossoms&sign=7775e01c30858062017b00e3ba66120d",
      activities: [
        "新干线前往京都",
        "传统日式旅馆体验",
        "和服租赁与文化体验",
        "金阁寺、清水寺游览",
        "茶道文化体验",
        "岚山竹林漫步"
      ]
    },
    {
      day: "day5",
      city: "nara",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Nara%20park%2C%20deer%2C%20traditional%20Japanese%20architecture%2C%20couple%20travel&sign=c9a5c1e669a769525281d679bc5409f1",
      activities: [
        "近铁前往奈良",
        "奈良公园喂鹿体验",
        "东大寺参观",
        "春日大社游览",
        "柿叶寿司美食体验"
      ]
    },
    {
      day: "day6-7",
      city: "osaka",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Osaka%20Universal%20Studios%2C%20couple%20having%20fun%2C%20entertainment%20park&sign=05f4c8493a67ecffaf9581f4aa769bcc",
      activities: [
        "近铁前往大阪",
        "环球影城一日游",
        "道顿堀美食探索之旅",
        "温泉度假体验",
        "大阪城公园游览"
      ]
    },
    {
      day: "day8-9",
      city: "okinawa",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Okinawa%20beach%2C%20romantic%20couple%20swimming%2C%20turquoise%20water&sign=4a0719ad2eae0af0e0f461ff08c738cc",
      activities: [
        "国内航班前往冲绳",
        "美丽海水族馆参观",
        "万座毛自然公园游览",
        "恩纳村海滩水上活动",
        "国际通购物体验",
        "琉球王国文化体验"
      ]
    }
  ],
  inclusions: [
    "国际往返机票（经济舱）",
    "全程豪华住宿（双人间）",
    "行程内所有早餐、午餐和晚餐",
    "全程专属导游和专车服务",
    "行程内所有景点门票",
    "旅游保险",
    "签证协助"
  ],
  pricing: {
    standardPrice: "¥25,000/人",
    seasonalPrices: [
      {
        season: "旺季 (3月-4月樱花季, 7月-8月暑假, 10月-11月红叶季)",
        price: "¥28,750 - ¥30,000/人",
        note: "价格上浮15%-20%"
      },
      {
        season: "平季 (1月-2月, 5月-6月, 9月)",
        price: "¥25,000/人",
        note: "基准价格"
      },
      {
        season: "特惠季 (12月非假期)",
        price: "¥22,500/人",
        note: "价格优惠10%"
      }
    ]
  },
  costBreakdown: [
    {
      category: "交通费",
      amount: "¥6,200",
      details: [
        "国际航班: 上海⇌东京 + 大阪⇌冲绳 (3,750元/人含税费)",
        "城际交通: 东京⇌京都新干线等 (1,300元/人)",
        "城市交通: 地铁、单轨等 (750元/人)",
        "短途交通: 出租车、专车等 (400元/人)"
      ]
    },
    {
      category: "住宿费",
      amount: "¥6,800",
      details: [
        "东京新宿/涩谷区酒店 (2晚) : 1,600元",
        "东京迪士尼主题酒店 (1晚) : 1,100元",
        "京都站/清水寺周边精品酒店 (3晚) : 2,300元",
        "大阪难波/心斋桥地区高端酒店 (2晚) : 1,200元",
        "冲绳那霸国际通海景度假酒店 (1晚) : 600元"
      ]
    },
    {
      category: "餐饮费",
      amount: "¥2,600",
      details: [
        "早餐: 9天酒店早餐 (800元/人)",
        "午餐: 寿司郎、一兰拉面等特色餐食 (1,100元/人)",
        "晚餐: 居酒屋、美食街、主题餐厅等 (700元/人)"
      ]
    },
    {
      category: "景点活动费",
      amount: "¥3,500",
      details: [
        "门票: 东京迪士尼VIP套餐、东京塔等 (2,300元/人)",
        "特别活动: 迪士尼VIP巡游观赏、冲绳水上运动等 (1,200元/人)"
      ]
    },
    {
      category: "导游服务费",
      amount: "¥1,600",
      details: [
        "全程专属导游服务"
      ]
    },
    {
      category: "保险费",
      amount: "¥450",
      details: [
        "海外旅行意外险、航班延误险等"
      ]
    },
    {
      category: "营销广告费",
      amount: "¥650",
      details: [
        "年度高端情侣主题营销预算分摊"
      ]
    },
    {
      category: "管理运营费",
      amount: "¥1,100",
      details: [
        "高端行程定制服务费、预订手续费等"
      ]
    },
    {
      category: "公司利润",
      amount: "¥4,100",
      details: [
        "利润率: 19.6%"
      ]
    }
  ],
  coreFinancialIndicators: {
    totalCost: "¥20,900",
    profitMargin: "19.6%",
    finalSellingPrice: "¥25,000"
  },
  images: {
    main: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japan%20summer%20tour%20couple%20travel%2C%20beautiful%20scenery%2C%20romantic%20atmosphere%2C%20Tokyo%20and%20Kyoto&sign=c54223d00b322df1245f9d4abe8f686c",
    gallery: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Romantic%20dining%20in%20Japan%2C%20couple%20having%20dinner%2C%20Japanese%20cuisine%2C%20elegant%20restaurant&sign=c5ec0cb5d17ab0b4396c567b3268bea3",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Japanese%20movie%20theater%2C%20couple%20watching%20movie%2C%20luxury%20cinema%20experience&sign=1a1d3a23fc631a2694bf311076e95ce8"
    ]
  },
  pricingStrategy: {
    description: "本套餐采用高端、精致、浪漫导向的定价策略，针对追求极致体验的情侣群体。以3★-5★顶级住宿资源为核心升级，结合'核心景点全覆盖+专属VIP体验+高品质餐饮+专职导游服务'，提升行程的奢华感、私密性、情感价值和专属感。通过顶级住宿和定制化服务形成核心竞争力，精准吸引重视旅行品质、愿意为舒适和专属体验付费的情侣群体。",
    seasonalChanges: [
      {
        season: "旺季 (3月-4月樱花季, 7月-8月暑假, 10月-11月红叶季)",
        description: "价格将上浮15%至20%，即每人28,750元至30,000元。此时高端酒店价格已上涨40%至60%，机票、景点VIP预约和活动成本同时上升。价格调整能够覆盖成本增加，保持稳定利润率。"
      },
      {
        season: "平季 (1月-2月, 5月-6月, 9月)",
        description: "基准售价保持在每人25,000元。资源供应稳定，高端酒店及各项成本波动较小，保证服务质量与利润率的平衡。"
      },
      {
        season: "特惠季 (12月非假期)",
        description: "价格下降10%，即每人22,500元。此时高端酒店价格已下降25%至30%。通过适度折扣吸引客源，清理淡季资源库存，同时保持15%以上合理利润率。"
      }
    ]
  }
};

const JapanTour = () => {
  const { t, language } = useContext(LanguageContext);

  // 城市名称翻译
  const cityNames = {
    tokyo: {
      zh: "东京",
      en: "Tokyo",
      ja: "東京"
    },
    kyoto: {
      zh: "京都",
      en: "Kyoto",
      ja: "京都"
    },
    osaka: {
      zh: "大阪",
      en: "Osaka",
      ja: "大阪"
    },
    nara: {
      zh: "奈良",
      en: "Nara",
      ja: "奈良"
    },
    okinawa: {
      zh: "冲绳",
      en: "Okinawa",
      ja: "沖縄"
    }
  };

  // 城市亮点翻译
  const cityHighlights = {
    tokyoHighlight: {
      zh: "迪士尼乐园浪漫体验、米其林餐厅用餐",
      en: "Romantic experience at Disneyland, dining at Michelin-starred restaurants",
      ja: "ディズニーランドでのロマンチックな体験、ミシュラン星付きレストランでの食事"
    },
    kyotoHighlight: {
      zh: "传统日式旅馆、和服体验、茶道文化",
      en: "Traditional Japanese ryokan, kimono experience, tea ceremony culture",
      ja: "伝統的な日本の旅館、着物体験、茶道文化"
    },
    osakaHighlight: {
      zh: "环球影城、美食探索之旅、温泉度假",
      en: "Universal Studios, food exploration tour, hot spring vacation",
      ja: "ユニバーサル・スタジオ、美食探検ツアー、温泉リゾート"
    },
    naraHighlight: {
      zh: "奈良公园喂鹿、东大寺、春日大社",
      en: "Nara Park deer feeding, Todaiji Temple, Kasuga Taisha Shrine",
      ja: "奈良公園での鹿の餌やり、東大寺、春日大社"
    },
    okinawaHighlight: {
      zh: "美丽海水族馆、海滩水上活动、琉球文化",
      en: "Churaumi Aquarium, beach water activities, Ryukyu culture",
      ja: "美ら海水族館、ビーチウォーターアクティビティ、琉球文化"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* 页面头部 */}
      <header className="bg-gray-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('navProducts')}</h1>
          <p className="text-xl text-gray-300">{t('subNavJapanTour')}</p>
        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 特色图片展示 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2 relative overflow-hidden rounded-xl shadow-lg h-96">
              <img 
                src={japanTourPackage.images.main} 
                alt="日本旅游套餐" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <h2 className="text-3xl font-bold text-white">10天5城日本夏日限量游</h2>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-6">
              {japanTourPackage.images.gallery.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl shadow-lg h-full">
                  <img 
                    src={image} 
                    alt={`日本旅游套餐图片 ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* 套餐介绍 */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">套餐介绍</h3>
            <p className="text-gray-700 mb-6">结合中国18-35岁情侣的浪漫旅行需求，将日本美食、电影浪漫、日本多地特色深度绑定，让整个旅程充满光、影、味蕾的双重疗愈。</p>
            <p className="text-gray-700 mb-6">
              本次旅程由flicknibble House精心策划，结合了我们在"电影+餐饮"领域的专业经验，为情侣打造一场难忘的浪漫之旅。在10天的旅程中，您将体验日本的文化、美食、电影和浪漫氛围，留下美好的回忆。
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-4">定价策略</h4>
              <p className="text-gray-700">
                {japanTourPackage.pricingStrategy.description}
              </p>
            </div>
          </div>
          
          {/* 行程亮点 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">行程亮点</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {japanTourPackage.highlights.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                    <i className="fa fa-map-marker-alt text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">{cityNames[item.city as keyof typeof cityNames][language]}</h4>
                  <p className="text-gray-700 text-center">{cityHighlights[item.highlight as keyof typeof cityHighlights][language]}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 行程详情 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">行程详情</h3>
            <div className="space-y-12">
              {japanTourPackage.itinerary.map((day, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? "" : "order-2 md:order-1"}>
                    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                      <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full mb-4">
                        {day.day}
                      </div>
                      <h4 className="text-xl font-bold mb-4 text-gray-900">{cityNames[day.city as keyof typeof cityNames][language]}</h4>
                      <ul className="space-y-3">
                        {day.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <i className="fa fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? "" : "order-1 md:order-2"}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg h-80">
                      <img 
                        src={day.image} 
                        alt={cityNames[day.city as keyof typeof cityNames][language]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 套餐包含内容与价格 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">套餐包含</h3>
              <ul className="space-y-3">
                {japanTourPackage.inclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">价格信息</h3>
              <div className="space-y-6">
                {japanTourPackage.pricing.seasonalPrices.map((season, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{season.season}</span>
                      <span className="text-xl font-bold text-purple-600">{season.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{season.note}</p>
                  </div>
                ))}
                
                <div className="mt-6">
                  <p className="text-gray-700 mb-4">* 价格基于双人入住计算，单人入住需补差价</p>
                  <p className="text-gray-700">* 最终价格可能会根据汇率波动有所调整</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 成本明细 */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">成本明细 (每人)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-4">
                {japanTourPackage.costBreakdown.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{item.category}</span>
                      <span className="text-gray-700">{item.amount}</span>
                    </div>
                    <div className="pl-4 text-sm text-gray-600 mt-1">
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="mb-1">• {detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {japanTourPackage.costBreakdown.slice(4).map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{item.category}</span>
                      <span className="text-gray-700">{item.amount}</span>
                    </div>
                    {item.details && item.details.length > 0 && (
                      <div className="pl-4 text-sm text-gray-600 mt-1">
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex}>• {detail}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="flex justify-between items-center pt-2 border-t-2 border-purple-500 mt-2">
                  <span className="font-bold text-gray-900">总成本</span>
                  <span className="font-bold text-gray-900">{japanTourPackage.coreFinancialIndicators.totalCost}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-purple-600">利润</span>
                  <span className="font-bold text-purple-600">{japanTourPackage.coreFinancialIndicators.profitMargin}</span>
                </div>
              </div>
            </div>
            
            {/* 核心财务指标 */}
            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">核心财务指标</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-gray-500 text-sm">总成本 (每人)</p>
                  <p className="text-2xl font-bold text-gray-900">{japanTourPackage.coreFinancialIndicators.totalCost}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-gray-500 text-sm">利润率</p>
                  <p className="text-2xl font-bold text-purple-600">{japanTourPackage.coreFinancialIndicators.profitMargin}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-gray-500 text-sm">最终售价</p>
                  <p className="text-2xl font-bold text-purple-600">{japanTourPackage.coreFinancialIndicators.finalSellingPrice}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 季节性价格变化 */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">季节性价格变化</h3>
            <div className="space-y-6">
              {japanTourPackage.pricingStrategy.seasonalChanges.map((season, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{season.season}</h4>
                  <p className="text-gray-700">{season.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 预订按钮 */}
          <div className="text-center">
            <Link 
              to="/contact/inquiry" 
              className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg transition-colors"
            >
              立即预订
            </Link>
            <p className="text-gray-600 mt-4">
              限量50组，预订从速！
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JapanTour;