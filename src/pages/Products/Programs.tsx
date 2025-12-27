import { useContext } from 'react';
import { LanguageContext } from '../../contexts/languageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// 节目活动数据
const programs = [
  {
    id: 1,
    title: "movieThemedDinner",
    description: "movieThemedDinnerDesc",
    price: "¥398/person",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Movie%20themed%20dinner%2C%20elegant%20presentation%2C%20creative%20cuisine%2C%20fine%20dining&sign=6130ebdff421353597fe17cd4bc009f7",
    features: [
      "movieDinnerFeature1",
      "movieDinnerFeature2",
      "movieDinnerFeature3",
      "movieDinnerFeature4"
    ]
  },
  {
    id: 2,
    title: "privateScreeningParty",
    description: "privateScreeningPartyDesc",
    price: "¥2,888/event",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Private%20movie%20screening%2C%20luxury%20cinema%2C%20group%20of%20friends%20enjoying&sign=34fcb69d11d81dacf3d339affa9b1f37",
    features: [
      "privateScreeningFeature1",
      "privateScreeningFeature2",
      "privateScreeningFeature3",
      "privateScreeningFeature4"
    ]
  },
  {
    id: 3,
    title: "filmmakingExperience",
    description: "filmmakingExperienceDesc",
    price: "¥688/person",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Movie%20making%20experience%2C%20behind%20the%20scenes%2C%20filmmaking%20workshop&sign=a82ed31ad3755e942f921fbad57c0a60",
    features: [
      "filmmakingFeature1",
      "filmmakingFeature2",
      "filmmakingFeature3",
      "filmmakingFeature4"
    ]
  },
  {
    id: 4,
    title: "foodMoviePairing",
    description: "foodMoviePairingDesc",
    price: "¥298/person",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Food%20and%20movie%20pairing%2C%20gourmet%20food%20with%20movie%20screening&sign=b4800217b1ae6d73f66462e0add6cecc",
    features: [
      "foodPairingFeature1",
      "foodPairingFeature2",
      "foodPairingFeature3",
      "foodPairingFeature4"
    ]
  }
];

// 即将推出的活动
const upcomingEvents = [
  {
    title: "halloweenMovieNight",
    description: "halloweenMovieNightDesc",
    date: "halloweenMovieDate",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Halloween%20movie%20night%2C%20spooky%20decorations%2C%20costume%20party&sign=866a03d66d1cb6a540c8fe43420a6358"
  },
  {
    title: "christmasMovieMarathon",
    description: "christmasMovieMarathonDesc",
    date: "christmasMovieDate",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Christmas%20movie%20marathon%2C%20holiday%20decorations%2C%20warm%20atmosphere&sign=371728e82d202c62f19e835610a5c980"
  },
  {
    title: "valentinesMovieDinner",
    description: "valentinesMovieDinnerDesc",
    date: "valentinesMovieDate",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Valentine%27s%20Day%20romantic%20movie%20dinner%2C%20couple%20celebrating%2C%20rose%20decorations&sign=839173a7c72ee86de26d64f474f749b1"
  }
];

const Programs = () => {
  const { t, language } = useContext(LanguageContext);

  // 添加缺失的翻译键
  const translationKeys = {
    programsDescription: {
      zh: 'flicknibble House提供多种独特的"电影+餐饮"体验，满足不同顾客的需求',
      en: 'FlickNibble House provides a variety of unique "movie + dining" experiences to meet the needs of different customers',
      ja: 'FlickNibble Houseは、さまざまな顧客のニーズに応えるために、さまざまな独特の「映画＋ダイニング」体験を提供します'
    },
    movieThemedDinner: {
      zh: '电影主题晚餐',
      en: 'Movie Themed Dinner',
      ja: '映画テーマディナー'
    },
    movieThemedDinnerDesc: {
      zh: '根据热门电影主题设计的特色晚餐，让您在用餐的同时感受电影的魅力',
      en: 'Special dinner designed based on popular movie themes, allowing you to feel the charm of movies while dining',
      ja: '人気の映画テーマを基にデザインされた特別なディナーで、食事を楽しみながら映画の魅力を感じることができます'
    },
    movieDinnerFeature1: {
      zh: '四道菜式精致晚餐',
      en: 'Four-course exquisite dinner',
      ja: '4コースの絶品ディナー'
    },
    movieDinnerFeature2: {
      zh: '专属电影主题装饰',
      en: 'Exclusive movie theme decorations',
      ja: '専用の映画テーマ装飾'
    },
    movieDinnerFeature3: {
      zh: '精选葡萄酒搭配',
      en: 'Selected wine pairing',
      ja: '厳選されたワインのペアリング'
    },
    movieDinnerFeature4: {
      zh: '电影片段欣赏',
      en: 'Movie clips appreciation',
      ja: '映画クリップ鑑賞'
    },
    privateScreeningParty: {
      zh: '私人观影派对',
      en: 'Private Screening Party',
      ja: 'プライベートスクリーニングパーティー'
    },
    privateScreeningPartyDesc: {
      zh: '包场观影体验，为您和您的朋友提供专属的观影空间和定制服务',
      en: 'Exclusive screening experience, providing exclusive viewing space and customized services for you and your friends',
      ja: '貸切スクリーニング体験で、あなたとお友達のための専用の視聴スペースとカスタマイズされたサービスを提供します'
    },
    privateScreeningFeature1: {
      zh: '最多15人私人观影空间',
      en: 'Private viewing space for up to 15 people',
      ja: '最大15人までのプライベート視聴スペース'
    },
    privateScreeningFeature2: {
      zh: '定制电影选择',
      en: 'Custom movie selection',
      ja: 'カスタマイズされた映画の選択'
    },
    privateScreeningFeature3: {
      zh: '精选小食和饮品',
      en: 'Selected snacks and drinks',
      ja: '厳選されたスナックとドリンク'
    },
    privateScreeningFeature4: {
      zh: '专属服务人员',
      en: 'Exclusive service staff',
      ja: '専用のサービススタッフ'
    },
    filmmakingExperience: {
      zh: '电影制作体验',
      en: 'Filmmaking Experience',
      ja: '映画制作体験'
    },
    filmmakingExperienceDesc: {
      zh: '参与电影制作的全过程，了解电影背后的故事和技术',
      en: 'Participate in the entire process of filmmaking, understand the stories and techniques behind movies',
      ja: '映画制作の全過程に参加し、映画の背後にあるストーリーと技術を理解します'
    },
    filmmakingFeature1: {
      zh: '电影制作工作坊',
      en: 'Filmmaking workshop',
      ja: '映画制作ワークショップ'
    },
    filmmakingFeature2: {
      zh: '专业导演指导',
      en: 'Professional director guidance',
      ja: 'プロの監督による指導'
    },
    filmmakingFeature3: {
      zh: '拍摄和剪辑体验',
      en: 'Shooting and editing experience',
      ja: '撮影と編集の体験'
    },
    filmmakingFeature4: {
      zh: '成果展示和分享',
      en: 'Result display and sharing',
      ja: '成果の展示と共有'
    },
    foodMoviePairing: {
      zh: '美食与电影配对',
      en: 'Food and Movie Pairing',
      ja: 'フードと映画のペアリング'
    },
    foodMoviePairingDesc: {
      zh: '根据电影情节和场景设计的美食套餐，让您在观影过程中享受美食',
      en: 'Food packages designed based on movie plots and scenes, allowing you to enjoy food while watching movies',
      ja: '映画のプロットとシーンに基づいてデザインされたフードパッケージで、映画を見ながら食事を楽しむことができます'
    },
    foodPairingFeature1: {
      zh: '多部经典电影选择',
      en: 'Multiple classic movie options',
      ja: '複数の古典的な映画のオプション'
    },
    foodPairingFeature2: {
      zh: '四式精美小食',
      en: 'Four exquisite snacks',
      ja: '4種類の絶品スナック'
    },
    foodPairingFeature3: {
      zh: '特色饮品搭配',
      en: 'Special drink pairing',
      ja: '特色のドリンクペアリング'
    },
    foodPairingFeature4: {
      zh: '观影指南',
      en: 'Viewing guide',
      ja: '視聴ガイド'
    },
    halloweenMovieNight: {
      zh: '万圣节电影之夜',
      en: 'Halloween Movie Night',
      ja: 'ハロウィン映画ナイト'
    },
    halloweenMovieNightDesc: {
      zh: '特别装扮、恐怖电影和主题美食',
      en: 'Special costumes, horror movies and themed food',
      ja: '特別なコスチューム、ホラー映画、テーマフード'
    },
    halloweenMovieDate: {
      zh: '2025年10月31日',
      en: 'October 31, 2025',
      ja: '2025年10月31日'
    },
    christmasMovieMarathon: {
      zh: '圣诞节电影马拉松',
      en: 'Christmas Movie Marathon',
      ja: 'クリスマス映画マラソン'
    },
    christmasMovieMarathonDesc: {
      zh: '经典圣诞电影、姜饼屋制作和热红酒',
      en: 'Classic Christmas movies, gingerbread house making and mulled wine',
      ja: 'クラシックなクリスマス映画、ジンジャーブレッドハウス作り、ミュールドワイン'
    },
    christmasMovieDate: {
      zh: '2025年12月24-25日',
      en: 'December 24-25, 2025',
      ja: '2025年12月24-25日'
    },
    valentinesMovieDinner: {
      zh: '情人节浪漫电影晚餐',
      en: 'Valentine\'s Day Romantic Movie Dinner',
      ja: 'バレンタインデーロマンチック映画ディナー'
    },
    valentinesMovieDinnerDesc: {
      zh: '双人浪漫晚餐、爱情电影和专属礼物',
      en: 'Double romantic dinner, love movies and exclusive gifts',
      ja: 'ダブルロマンチックディナー、ラブ映画、専用ギフト'
    },
    valentinesMovieDate: {
      zh: '2026年2月14日',
      en: 'February 14, 2026',
      ja: '2026年2月14日'
    },
    includes: {
      zh: '包含内容：',
      en: 'Includes:',
      ja: '含まれるもの：'
    },
    monday: {
      zh: '一',
      en: 'Mon',
      ja: '月'
    },
    tuesday: {
      zh: '二',
      en: 'Tue',
      ja: '火'
    },
    wednesday: {
      zh: '三',
      en: 'Wed',
      ja: '水'
    },
    thursday: {
      zh: '四',
      en: 'Thu',
      ja: '木'
    },
    friday: {
      zh: '五',
      en: 'Fri',
      ja: '金'
    },
    saturday: {
      zh: '六',
      en: 'Sat',
      ja: '土'
    },
    sunday: {
      zh: '日',
      en: 'Sun',
      ja: '日'
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* 页面头部 */}
      <header className="bg-gray-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('navProducts')}</h1>
          <p className="text-xl text-gray-300">{t('subNavPrograms')}</p>
        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('programsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translationKeys.programsDescription[language]}
            </p>
          </div>
          
          {/* 节目活动卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programs.map((program) => (
              <div 
                key={program.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={program.image} 
                    alt={translationKeys[program.title as keyof typeof translationKeys][language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
                    {program.price}
                  </div>
                </div>
                <div className="p-6">
                   <h3 className="text-xl font-bold mb-3 text-gray-900">{program.title in translationKeys ? translationKeys[program.title as keyof typeof translationKeys][language] : program.title}</h3>
                  <p className="text-gray-700 mb-4">{translationKeys[program.description as keyof typeof translationKeys][language]}</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">{translationKeys.includes[language]}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <i className="fa fa-check text-green-500 mr-2"></i>
                          <span className="text-gray-700">{translationKeys[feature as keyof typeof translationKeys][language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                      {t('eventDetailsButton')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 即将推出的活动 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">{t('comingSoonEvents')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={event.image} 
                      alt={translationKeys[event.title as keyof typeof translationKeys][language]} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{translationKeys[event.title as keyof typeof translationKeys][language]}</h4>
                  <p className="text-gray-700 text-sm mb-2">{translationKeys[event.description as keyof typeof translationKeys][language]}</p>
                  <div className="text-purple-600 font-medium text-sm">{translationKeys[event.date as keyof typeof translationKeys][language]}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 活动日历 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('eventsCalendar')}</h3>
            <div className="grid grid-cols-7 gap-1 text-center">
              {/* 星期标题 */}
              <div className="font-bold text-gray-500 py-2">{translationKeys.monday[language]}</div>
              <div className="font-bold text-gray-500 py-2">{translationKeys.tuesday[language]}</div>
              <div className="font-bold text-gray-500 py-2">{translationKeys.wednesday[language]}</div>
              <div className="font-bold text-gray-500 py-2">{translationKeys.thursday[language]}</div>
              <div className="font-bold text-gray-500 py-2">{translationKeys.friday[language]}</div>
              <div className="font-bold text-gray-500 py-2">{translationKeys.saturday[language]}</div>
              <div className="font-bold text-gray-500 py-2">{translationKeys.sunday[language]}</div>
              
              {/* 日期 */}
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const hasEvent = [5, 12, 19, 26].includes(day);
                return (
                  <div 
                    key={day} 
                    className={`h-16 flex flex-col items-center justify-center rounded-lg border transition-colors ${
                      hasEvent ? 'border-purple-200 hover:bg-purple-50' : 'border-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`${hasEvent ? 'text-purple-600 font-medium' : 'text-gray-700'}`}>
                      {day}
                    </span>
                    {hasEvent && (
                      <span className="h-1 w-1 bg-purple-600 rounded-full mt-1"></span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;