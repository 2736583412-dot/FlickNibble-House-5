import { createContext, useState, useEffect, ReactNode } from 'react';

// 定义支持的语言类型
export type Language = 'zh' | 'en' | 'ja';

// 定义翻译内容类型
export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

// 创建翻译字典
export const translations: Translations = {
  // 导航
  navHome: {
    zh: '首页',
    en: 'Home',
    ja: 'ホーム'
  },
  navAbout: {
    zh: '关于我们',
    en: 'About Us',
    ja: '会社概要'
  },
  navProducts: {
    zh: '产品服务',
    en: 'Products',
    ja: '製品・サービス'
  },
  navWhyUs: {
    zh: '为什么选择我们',
    en: 'Why Choose Us',
    ja: 'なぜ私たちを選ぶのか'
  },
  navContact: {
    zh: '联系我们',
    en: 'Contact',
    ja: 'お問い合わせ'
  },
  
  // 子导航
  subNavCompanyOverview: {
    zh: '公司概述',
    en: 'Company Overview',
    ja: '会社概要'
  },
  subNavLeadership: {
    zh: '领导层',
    en: 'Leadership',
    ja: '経営陣'
  },
  subNavJapanTour: {
    zh: '日本旅游套餐',
    en: 'Japan Tour Packages',
    ja: '日本ツアーパッケージ'
  },
  subNavPrograms: {
    zh: '节目活动',
    en: 'Programs & Events',
    ja: 'プログラム・イベント'
  },
  subNavValue: {
    zh: '价值主张',
    en: 'Value Proposition',
    ja: '価値提案'
  },
  subNavSustainability: {
    zh: '可持续性',
    en: 'Sustainability',
    ja: '持続可能性'
  },
  subNavPartnerships: {
    zh: '合作伙伴关系',
    en: 'Partnerships',
    ja: 'パートナーシップ'
  },
  // 可持续性页面新增翻译
  sustainabilityDescription: {
    zh: '我们致力于在提供优质旅行体验的同时，实现经济、环境和社会的可持续发展。',
    en: 'We are committed to achieving economic, environmental and social sustainability while providing quality travel experiences.',
    ja: '私たちは、質の高い旅行体験を提供しながら、経済的、環境的、社会的な持続可能性を実現することに取り組んでいます。'
  },
  sustainabilityCommitment: {
    zh: '可持续发展是我们业务的核心原则。我们认识到旅游业对环境和社会的影响，因此致力于采取负责任的做法，确保我们的运营对当地社区和环境产生积极影响。',
    en: 'Sustainability is a core principle of our business. We recognize the impact of tourism on the environment and society, and are therefore committed to adopting responsible practices that ensure our operations have a positive impact on local communities and the environment.',
    ja: '持続可能性は当社のビジネスの中核原則です。私たちは観光業が環境と社会に与える影響を認識しており、そのため、事業活動が地元コミュニティと環境にプラスの影響を与えるよう、責任ある慣行を採用することに取り組んでいます。'
  },
  sustainabilityPillars: {
    zh: '可持续发展支柱',
    en: 'Sustainability Pillars',
    ja: '持続可能性の柱'
  },
  economicSustainability: {
    zh: '经济可持续性',
    en: 'Economic Sustainability',
    ja: '経済的持続可能性'
  },
  economicSustainabilityDesc: {
    zh: '通过合理定价和资源配置，确保业务的长期稳定发展，为合作伙伴和员工创造价值。',
    en: 'Ensure long-term stable development of the business through reasonable pricing and resource allocation, creating value for partners and employees.',
    ja: '合理的な価格設定とリソース配分を通じて、事業の長期的な安定した発展を確保し、パートナーと従業員に価値を創造します。'
  },
  environmentalSustainability: {
    zh: '环境可持续性',
    en: 'Environmental Sustainability',
    ja: '環境的持続可能性'
  },
  environmentalSustainabilityDesc: {
    zh: '采取环保措施，减少碳足迹，推广可持续旅游实践，保护目的地的自然环境。',
    en: 'Adopt environmental protection measures, reduce carbon footprint, promote sustainable tourism practices, and protect the natural environment of destinations.',
    ja: '環境保護対策を採用し、炭素排出量を削減し、持続可能な観光の慣行を推進し、目的地の自然環境を保護します。'
  },
  socialSustainability: {
    zh: '社会可持续性',
    en: 'Social Sustainability',
    ja: '社会的持続可能性'
  },
  socialSustainabilityDesc: {
    zh: '尊重当地文化和社区，支持当地企业发展，创造就业机会，促进文化交流与理解。',
    en: 'Respect local cultures and communities, support local business development, create employment opportunities, and promote cultural exchange and understanding.',
    ja: '地元の文化とコミュニティを尊重し、地元のビジネスの発展を支援し、雇用機会を創出し、文化交流と理解を促進します。'
  },
  sustainabilityGoals: {
    zh: '可持续发展目标与进展',
    en: 'Sustainability Goals and Progress',
    ja: '持続可能性の目標と進捗状況'
  },
  reduceCarbonFootprint: {
    zh: '减少碳足迹 30%',
    en: 'Reduce carbon footprint by 30%',
    ja: '炭素排出量を30％削減'
  },
  increaseLocalPartnerships: {
    zh: '增加当地合作伙伴 50%',
    en: 'Increase local partnerships by 50%',
    ja: '地元のパートナーシップを50％増加'
  },
  implementGreenPractices: {
    zh: '在所有合作酒店实施绿色实践',
    en: 'Implement green practices in all partner hotels',
    ja: 'すべての提携ホテルでグリーンプラクティスを実施'
  },
  sustainabilityCaseStudies: {
    zh: '可持续发展案例',
    en: 'Sustainability Case Studies',
    ja: '持続可能性のケーススタディ'
  },
  ecoHotelCase: {
    zh: '环保酒店合作',
    en: 'Eco-Friendly Hotel Partnership',
    ja: '環境にやさしいホテルパートナーシップ'
  },
  ecoHotelDesc: {
    zh: '与日本多家环保认证酒店合作，推广节能减排措施，提供环保客房选项，减少一次性用品使用，并支持当地环保项目。',
    en: 'Partner with multiple eco-certified hotels in Japan to promote energy conservation and emission reduction measures, provide eco-friendly room options, reduce the use of disposable items, and support local environmental protection projects.',
    ja: '日本の複数の環境認証ホテルと提携し、省エネ・排出削減対策を推進し、環境にやさしい客室オプションを提供し、使い捨て用品の使用を減らし、地元の環境保護プロジェクトをサポートします。'
  },
  localFoodCase: {
    zh: '本地食材采购计划',
    en: 'Local Food Sourcing Program',
    ja: '地元食材調達プログラム'
  },
  localFoodDesc: {
    zh: '与当地农场和供应商合作，推广"从农场到餐桌"的理念，减少食物运输过程中的碳排放，支持当地农业发展，提供新鲜、正宗的本地美食体验。',
    en: 'Partner with local farms and suppliers to promote the "farm to table" concept, reduce carbon emissions during food transportation, support local agricultural development, and provide fresh, authentic local food experiences.',
    ja: '地元の農場やサプライヤーと提携し、「ファームからテーブルへ」のコンセプトを推進し、食品輸送中の炭素排出を削減し、地元の農業発展を支援し、新鮮で本格的な地元の美食体験を提供します。'
  },
  // 合作伙伴页面新增翻译
  partnershipsDescription: {
    zh: '我们与行业内的领先企业建立了强大的合作伙伴关系，共同为客户提供卓越的旅行体验。',
    en: 'We have established strong partnerships with leading companies in the industry to jointly provide customers with excellent travel experiences.',
    ja: '当社は業界をリードする企業と強力なパートナーシップを確立し、顧客に優れた旅行体験を共同で提供しています。'
  },
  partnershipBenefits: {
    zh: '合作伙伴优势',
    en: 'Partnership Benefits',
    ja: 'パートナーシップの利点'
  },
  resourceStability: {
    zh: '资源稳定性',
    en: 'Resource Stability',
    ja: 'リソースの安定性'
  },
  priceAdvantages: {
    zh: '价格优势',
    en: 'Price Advantages',
    ja: '価格優位性'
  },
  exclusiveExperiences: {
    zh: '独家体验',
    en: 'Exclusive Experiences',
    ja: '独占的な体験'
  },
  officialEndorsement: {
    zh: '官方背书',
    en: 'Official Endorsement',
    ja: '公式の承認'
  },
  partnershipApproach: {
    zh: '合作理念',
    en: 'Partnership Approach',
    ja: 'パートナーシップのアプローチ'
  },
  strategicAlignment: {
    zh: '战略协同',
    en: 'Strategic Alignment',
    ja: '戦略的な調整'
  },
  qualityStandards: {
    zh: '品质标准',
    en: 'Quality Standards',
    ja: '品質基準'
  },
  mutualBenefit: {
    zh: '互利共赢',
    en: 'Mutual Benefit',
    ja: '相互利益'
  },
  longTermRelationships: {
    zh: '长期合作关系',
    en: 'Long-Term Relationships',
    ja: '長期的な関係'
  },
  ourPartners: {
    zh: '我们的合作伙伴',
    en: 'Our Partners',
    ja: '私たちのパートナー'
  },
  otaPartners: {
    zh: 'OTA平台合作伙伴',
    en: 'OTA Platform Partners',
    ja: 'OTAプラットフォームパートナー'
  },
  hotelPartners: {
    zh: '酒店合作伙伴',
    en: 'Hotel Partners',
    ja: 'ホテルパートナー'
  },
  attractionPartners: {
    zh: '景点合作伙伴',
    en: 'Attraction Partners',
    ja: '観光スポットパートナー'
  },
  insurancePartners: {
    zh: '保险合作伙伴',
    en: 'Insurance Partners',
    ja: '保険パートナー'
  },
  ctrip: {
    zh: '携程',
    en: 'Ctrip',
    ja: '携程'
  },
  fliggy: {
    zh: '飞猪',
    en: 'Fliggy',
    ja: '飛猪'
  },
  anaHotels: {
    zh: 'ANA酒店集团',
    en: 'ANA Hotels',
    ja: 'ANAホテルグループ'
  },
  hyatt: {
    zh: '凯悦酒店',
    en: 'Hyatt',
    ja: 'ハイアット'
  },
  ritzCarlton: {
    zh: '丽思卡尔顿酒店',
    en: 'Ritz-Carlton',
    ja: 'リッツ・カールトン'
  },
  tokyoDisney: {
    zh: '东京迪士尼度假区',
    en: 'Tokyo Disneyland Resort',
    ja: '東京ディズニーランドリゾート'
  },
  usj: {
    zh: '日本环球影城',
    en: 'Universal Studios Japan',
    ja: 'ユニバーサル・スタジオ・ジャパン'
  },
  pingAn: {
    zh: '平安保险',
    en: 'Ping An Insurance',
    ja: '平安保険'
  },
  zhongAn: {
    zh: '众安保险',
    en: 'ZhongAn Insurance',
    ja: '衆安保険'
  },
  successStories: {
    zh: '合作成功案例',
    en: 'Success Stories',
    ja: '成功事例'
  },
  tokyoDisneyPartnership: {
    zh: '东京迪士尼度假区独家合作',
    en: 'Exclusive Partnership with Tokyo Disneyland Resort',
    ja: '東京ディズニーランドリゾートとの独占的なパートナーシップ'
  },
  tokyoDisneyDesc: {
    zh: '通过与东京迪士尼度假区建立深度合作，我们为客户提供专属VIP通道、优先预约热门游乐设施、独家观赏巡游位置以及定制化的餐饮体验，让每一位游客都能获得无与伦比的迪士尼魔法体验。',
    en: 'Through in-depth cooperation with Tokyo Disneyland Resort, we provide customers with exclusive VIP access, priority booking for popular attractions, exclusive parade viewing positions, and customized dining experiences, allowing every visitor to enjoy unparalleled Disney magic.',
    ja: '東京ディズニーランドリゾートとの深い協力を通じて、顧客に専用のVIPアクセス、人気アトラクションの優先予約、独占的なパレード観覧ポジション、カスタマイズされたダイニング体験を提供し、すべての訪問者に比類ないディズニーマジックを楽しんでもらっています。'
  },
  luxuryHotelPartnership: {
    zh: '高端酒店集群合作',
    en: 'Luxury Hotel Cluster Partnership',
    ja: '高級ホテルクラスターパートナーシップ'
  },
  luxuryHotelDesc: {
    zh: '与日本多家3★-5★高端酒店建立长期合作关系，确保为客户提供最优惠的价格、房型升级和专属礼遇，包括机场接送、早餐包含、延迟退房等增值服务，提升客户的旅行体验。',
    en: 'Establish long-term cooperative relationships with multiple 3★-5★ luxury hotels in Japan to ensure customers receive the most preferential prices, room upgrades, and exclusive benefits, including airport transfers, breakfast inclusion, late check-out and other value-added services to enhance customers\' travel experience.',
    ja: '日本の複数の3★-5★高級ホテルと長期的な協力関係を確立し、顧客が最も優遇された価格、部屋のアップグレード、専用の特典（空港送迎、朝食の含み、チェックアウト延長などの追加価値サービスを含む）を受けられるようにし、顧客の旅行体験を向上させます。'
  },
  subNavContactInfo: {
    zh: '联系信息',
    en: 'Contact Info',
    ja: 'お問い合わせ情報'
  },
  subNavInquiry: {
    zh: '查询表',
    en: 'Inquiry Form',
    ja: 'お問い合わせフォーム'
  },
  subNavSocialMedia: {
    zh: '社交媒体',
    en: 'Social Media',
    ja: 'ソーシャルメディア'
  },
  
  // 主页内容
  heroTitle: {
    zh: '光影与味蕾的双重疗愈',
    en: 'Double Healing of Light, Shadow and Taste Buds',
    ja: '光と影、味覚の二重癒し'
  },
  heroSubtitle: {
    zh: 'FlickNibble House 10天5城日本夏日限量游',
    en: 'FlickNibble House 10-Day 5-City Japan Summer Limited Tour',
    ja: 'FlickNibble House 10日5都市日本夏限定ツアー'
  },
  heroButton: {
    zh: '立即探索',
    en: 'Explore Now',
    ja: '今すぐ見る'
  },
  inquiryButton: {
    zh: '立即咨询',
    en: 'Inquire Now',
    ja: 'お問い合わせ'
  },
  featuresTitle: {
    zh: '我们的特色服务',
    en: 'Our Featured Services',
    ja: '当社の特色サービス'
  },
  tourHighlightsTitle: {
    zh: '行程亮点',
    en: 'Tour Highlights',
    ja: 'ツアーのハイライト'
  },
  viewDetailsButton: {
    zh: '查看详细行程',
    en: 'View Detailed Itinerary',
    ja: '詳細な旅程を見る'
  },
  bookNowButton: {
    zh: '立即预订',
    en: 'Book Now',
    ja: '今すぐ予約'
  },
  learnMoreButton: {
    zh: '了解更多',
    en: 'Learn More',
    ja: '詳細を見る'
  },
  testimonialsTitle: {
    zh: '顾客评价',
    en: 'Customer Reviews',
    ja: '顧客の評価'
  },
  testimonialsSubtitle: {
    zh: '听听我们的顾客怎么说',
    en: 'What Our Customers Say',
    ja: '顧客の声'
  },
  ctaTitle: {
    zh: '准备好开始您的浪漫之旅了吗？',
    en: 'Ready to Start Your Romantic Journey?',
    ja: 'ロマンチックな旅を始めましょうか？'
  },
  ctaDescription: {
    zh: '立即预订"10天5城日本夏日限量游"，享受光影与味蕾的双重疗愈体验',
    en: 'Book the "10-Day 5-City Japan Summer Limited Tour" now and enjoy the double healing experience of light, shadow and taste buds',
    ja: '「10日5都市日本夏限定ツアー」を今すぐ予約して、光と影、味覚の二重癒し体験をお楽しみください'
  },
  
  // 公司概述
  aboutTitle: {
    zh: '关于FlickNibble House',
    en: 'About FlickNibble House',
    ja: 'FlickNibble Houseについて'
  },
  aboutDescription: {
    zh: 'FlickNibble House是一个专注于"电影+餐饮"创新体验的品牌，其本身是一个可以提供餐饮服务的电影院，通过基于场景的订餐、不间断送餐等服务，打破观影与用餐的界限。我们致力于为每对情侣提供个性化的日本浪漫之旅。',
    en: 'FlickNibble House is a brand focusing on the innovative experience of "movie + dining". It is a cinema that can provide catering services, breaking the boundary between watching movies and dining through scene-based ordering and uninterrupted food delivery services.',
    ja: 'FlickNibble Houseは「映画＋ダイニング」という革新的な体験に特化したブランドで、それ自体が飲食サービスを提供できる映画館であり、シーンに基づく注文や中断のない配餐サービスなどを通じて、映画鑑賞と食事の境界を打破します。'
  },
  missionTitle: {
    zh: '我们的使命',
    en: 'Our Mission',
    ja: '私たちの使命'
  },
  missionDescription: {
    zh: '打破观影与用餐的界限。我们始终以新鲜品质和贴心服务为核心价值，让每位顾客不受干扰地欣赏精彩电影，同时品味便捷美味的食物。我们致力于成为场景融合行业的标杆品牌，让每一次观影体验都成为满足味觉和视觉双重享受的美好回忆。',
    en: 'To break the boundaries between movie-watching and dining. We always prioritize fresh quality and attentive service as our core values, allowing every customer to enjoy the wonderful film without distractions and savor convenient and delicious food. We strive to become a benchmark brand in the industry for scene integration, making every movie-watching experience a delightful memory that satisfies both the senses of taste and vision.',
    ja: '映画鑑賞と食事の境界を打破すること。私たちは常に新鮮な品質と思いやりのあるサービスを中核的価値として重視し、すべての顧客が邪魔されることなく素晴らしい映画を鑑賞しながら、便利で美味しい食べ物を味わえるようにします。私たちはシーン統合業界のベンチマークブランドになることを目指し、毎回の映画鑑賞体験を味覚と視覚の両方を満足させる美しい思い出にしていきます。'
  },
  visionTitle: {
    zh: '我们的愿景',
    en: 'Our Vision',
    ja: '私たちのビジョン'
  },
  visionDescription: {
    zh: '成为全球领先的"电影+餐饮"体验品牌，引领行业创新，让更多人享受这种独特的生活方式。',
    en: 'To become the world\'s leading "movie + dining" experience brand, leading industry innovation, and allowing more people to enjoy this unique lifestyle.',
    ja: '世界をリードする「映画＋ダイニング」体験ブランドになり、業界のイノベーションをリードし、より多くの人々にこの独特なライフスタイルを楽しんでもらいます。'
  },
  coreValuesTitle: {
    zh: '我们的核心价值',
    en: 'Our Core Values',
    ja: '私たちの中核的価値'
  },
  freshQuality: {
    zh: '新鲜品质',
    en: 'Fresh Quality',
    ja: '新鮮な品質'
  },
  freshQualityDesc: {
    zh: '我们始终以新鲜品质为核心价值，提供高品质的美食体验',
    en: 'We always prioritize fresh quality as our core value, providing high-quality dining experiences',
    ja: '私たちは常に新鮮な品質を中核的価値として、高品質な食体験を提供します'
  },
  attentiveService: {
    zh: '贴心服务',
    en: 'Attentive Service',
    ja: '思いやりのあるサービス'
  },
  attentiveServiceDesc: {
    zh: '以顾客为中心，提供周到细致的专属服务',
    en: 'Customer-centric, providing thoughtful and detailed exclusive services',
    ja: '顧客中心で、思いやりのある詳細な専用サービスを提供します'
  },
  winWinCooperation: {
    zh: '合作共赢',
    en: 'Win-Win Cooperation',
    ja: '互恵的な協力'
  },
  winWinCooperationDesc: {
    zh: '与合作伙伴建立长期稳定的合作关系，实现互利共赢',
    en: 'Establish long-term and stable cooperative relationships with partners to achieve mutual benefit and win-win results',
    ja: 'パートナーと長期的で安定した協力関係を構築し、相互利益とwin-winの結果を実現します'
  },
  continuousInnovation: {
    zh: '持续创新',
    en: 'Continuous Innovation',
    ja: '継続的なイノベーション'
  },
  continuousInnovationDesc: {
    zh: '不断创新服务和体验，引领行业发展潮流',
    en: 'Continuously innovate services and experiences to lead the industry development trend',
    ja: 'サービスと体験を継続的に革新し、業界の発展傾向をリードします'
  },
  mainBusinessesTitle: {
    zh: '我们的主要业务',
    en: 'Our Main Businesses',
    ja: '当社の主要事業'
  },
  scenarioCatering: {
    zh: '场景化餐饮服务',
    en: 'Scenario-based Catering Services',
    ja: 'シナリオベースのケータリングサービス'
  },
  scenarioCateringDesc: {
    zh: '针对不同类型的电影（剧情片、动作片、儿童动画等）提供定制化套餐，提供"无打扰送餐到座"服务，避免观影中途离席的不便。同时推出小分量、易拿取的餐品，满足观影场景需求。',
    en: 'Provide customized meal packages for different types of movies (dramas, action films, children\'s animations, etc.), and offer "no-disturb delivery to the seat" service to avoid the inconvenience of leaving the theater halfway through the movie. At the same time, introduce small-sized and easy-to-hold meals to meet the needs of the viewing scenario.',
    ja: 'さまざまなタイプの映画（ドラマ、アクション映画、子供向けアニメなど）に合わせたカスタマイズされた食事パッケージを提供し、映画の途中で劇場を離れる不便さを避けるために「邪魔のない席への配達」サービスを提供します。同時に、観賞シナリオのニーズに応えるために、小さなサイズで持ちやすい食事を導入します。'
  },
  ticketMealPackage: {
    zh: '"影票+餐饮"套餐营销',
    en: '"Movie Ticket + Catering" Package Marketing',
    ja: '「映画チケット＋ケータリング」パッケージマーケティング'
  },
  ticketMealPackageDesc: {
    zh: '设计"电影票+餐饮"组合套餐，提供会员专属折扣、生日观影餐饮礼包、节假日主题套餐（如情人节双人观影餐、春节家庭观影桶等）。',
    en: 'Design "movie ticket + catering" combination packages, offer exclusive discounts for members, birthday movie viewing catering gift packages, and holiday-themed packages, such as a double-person movie viewing meal on Valentine\'s Day and a family movie viewing bucket on the Spring Festival.',
    ja: '「映画チケット＋ケータリング」のコンビネーションパッケージをデザインし、会員専用割引、誕生日映画鑑賞ケータリングギフトパッケージ、休日テーマパッケージ（バレンタインデーの2人用映画鑑賞ミール、春節の家族用映画鑑賞バケットなど）を提供します。'
  },
  corporateCustomization: {
    zh: '企业团体定制服务',
    en: 'Corporate Group Customization Services',
    ja: '企業グループカスタマイズサービス'
  },
  corporateCustomizationDesc: {
    zh: '为企业团建、学校活动、社团聚会等团体客户提供专属观影定制服务。根据团体规模和需求调整餐食品类、分量和价格。',
    en: 'Provide exclusive movie viewing customization services for group customers such as corporate team building, school activities, and club gatherings. Adjust the meal categories, portions, and prices according to the group size and requirements.',
    ja: '企業のチームビルディング、学校のイベント、クラブの集会などのグループ顧客に専用の映画鑑賞カスタマイズサービスを提供します。グループの規模と要件に応じて、食事のカテゴリ、分量、価格を調整します。'
  },
  connectionWithEntertainment: {
    zh: '与娱乐行业的联系',
    en: 'Connection with the Entertainment Industry',
    ja: 'エンターテイメント業界とのつながり'
  },
  connectionWithEntertainmentDesc1: {
    zh: '娱乐休闲行业的核心需求是为消费者提供"放松、愉悦、多元"的体验。我们的定制化餐品、无缝衔接的服务和主题活动，不仅满足了用户对电影内容的娱乐需求，更通过美食提升了整体体验的丰富度与舒适度。',
    en: 'The core demand of the entertainment and leisure industry is to provide consumers with a "relaxing, enjoyable, and diverse" experience. Our customized meals, seamless services, and themed activities not only meet users\' entertainment needs for film content, but also enhance the richness and comfort of the overall experience through delicious food.',
    ja: 'エンターテイメント・レジャー業界の中核的な需要は、消費者に「リラックスした、楽しい、多様な」体験を提供することです。当社のカスタマイズされた食事、シームレスなサービス、テーマアクティビティは、映画コンテンツに対するユーザーのエンターテイメントニーズを満たすだけでなく、美味しい食べ物を通じて全体の体験の豊かさと快適さを高めます。'
  },
  connectionWithEntertainmentDesc2: {
    zh: '这种模式不仅提升了单一场景的消费价值，更为娱乐休闲行业的场景创新提供了新方向，推动行业从"单一内容消费"向"综合体验消费"升级。',
    en: 'This model not only increases the consumption value of a single scenario, but also provides a new direction for the scene innovation of the entertainment and leisure industry, promoting the industry to upgrade from "single content consumption" to "comprehensive experience consumption".',
    ja: 'このモデルは単一のシナリオの消費価値を高めるだけでなく、エンターテイメント・レジャー業界のシナリオイノベーションに新たな方向性を提供し、業界が「単一コンテンツ消費」から「総合体験消費」にアップグレードすることを促進します。'
  },
  developmentHistoryTitle: {
    zh: '发展历程',
    en: 'Development History',
    ja: '発展の歴史'
  },
  
  // 日本旅游套餐
  // 新的旅游套餐翻译键将直接在组件内部定义
  packageIntroduction: {
    zh: '套餐介绍',
    en: 'Package Introduction',
    ja: 'パッケージの紹介'
  },
  packageIntroductionDesc: {
    zh: '本次旅程由flicknibble House精心策划，结合了我们在"电影+餐饮"领域的专业经验，为情侣打造一场难忘的浪漫之旅。在10天的旅程中，您将体验日本的文化、美食、电影和浪漫氛围，留下美好的回忆。',
    en: 'This journey is carefully planned by FlickNibble House, combining our professional experience in the "movie + dining" field to create an unforgettable romantic journey for couples. During the 10-day journey, you will experience Japanese culture, cuisine, movies and romantic atmosphere, leaving beautiful memories.',
    ja: 'この旅は、FlickNibble Houseが「映画＋ダイニング」分野での専門的な経験を組み合わせて、カップルのための忘れられないロマンチックな旅を作るために細心の注意を払って計画されています。10日間の旅の間に、あなたは日本の文化、料理、映画、ロマンチックな雰囲気を体験し、美しい思い出を残します。'
  },
  pricingStrategy: {
    zh: '定价策略',
    en: 'Pricing Strategy',
    ja: '価格戦略'
  },
  pricingStrategyDesc: {
    zh: '本套餐采用高端、精致、浪漫导向的定价策略，针对追求极致体验的情侣群体。以3★-5★顶级住宿资源为核心升级，结合"核心景点全覆盖+专属VIP体验+高品质餐饮+专职导游服务"，提升行程的奢华感、私密性、情感价值和专属感。通过顶级住宿和定制化服务形成核心竞争力，精准吸引重视旅行品质、愿意为舒适和专属体验付费的情侣群体。',en: 'This package adopts a high-end, exquisite, and romantic-oriented pricing strategy, targeting couples who pursue the ultimate experience. With 3★-5★ top accommodation resources as the core upgrade, combined with "full coverage of core attractions + exclusive VIP experience + high-quality dining + full-time guide service", it enhances the luxury, privacy, emotional value and exclusivity of the trip. Through top accommodation and customized services, it forms core competitiveness and accurately attracts couples who value travel quality and are willing to pay for comfort and exclusive experience.',
    ja: 'このパッケージは、究極の体験を追求するカップルを対象とした、高級で洗練されたロマンチック指向の価格戦略を採用しています。3★-5★の最高級宿泊施設を中核としてアップグレードし、「主要観光スポットの完全カバレッジ＋専用VIP体験＋高品質ダイニング＋常勤ガイドサービス」を組み合わせることで、旅行の贅沢さ、プライバシー、感情的価値、独占感を高めます。トップクラスの宿泊施設とカスタマイズされたサービスを通じて、中核的な競争力を形成し、旅行の質を重視し、快適さと専用体験のために支払うことをいとわないカップルを的確に惹きつけます。'
  },
  itineraryDetailsTitle: {
    zh: '行程详情',
    en: 'Itinerary Details',
    ja: '旅程の詳細'
  },
  packageIncludes: {
    zh: '套餐包含',
    en: 'Package Includes',
    ja: 'パッケージに含まれるもの'
  },
  priceInformation: {
    zh: '价格信息',
    en: 'Price Information',
    ja: '価格情報'
  },
  costBreakdown: {
    zh: '成本明细',
    en: 'Cost Breakdown',
    ja: 'コスト明細'
  },
  limitedAvailability: {
    zh: '限量50组，预订从速！',
    en: 'Limited to 50 groups, book now!',
    ja: '限定50グループ、お早めにご予約ください！'
  },
  limitedTag: {
    zh: '限量50组',
    en: 'Limited to 50 groups',
    ja: '限定50グループ'
  },
  discountTag: {
    zh: '限时优惠',
    en: 'Limited time offer',
    ja: '期間限定特別価格'
  },
  
  // 领导团队
  leadershipTitle: {
    zh: '我们的领导团队',
    en: 'Our Leadership Team',
    ja: '当社の経営陣'
  },
  leadershipDescription: {
    zh: '由行业资深专业人士组成的团队，致力于为顾客创造独特的"电影+餐饮"体验',
    en: 'A team of industry veterans dedicated to creating unique "movie + dining" experiences for customers',
    ja: '業界の経験豊富な専門家で構成されたチームが、顧客に独特の「映画＋ダイニング」体験を提供することに取り組んでいます'
  },
  teamCultureTitle: {
    zh: '我们的团队文化',
    en: 'Our Team Culture',
    ja: '私たちのチーム文化'
  },
  innovativeThinking: {
    zh: '创新思维',
    en: 'Innovative Thinking',
    ja: '革新的な思考'
  },
  innovativeThinkingDesc: {
    zh: '鼓励团队成员提出新想法，不断创新服务和体验',
    en: 'Encourage team members to put forward new ideas and constantly innovate services and experiences',
    ja: 'チームメンバーが新しいアイデアを出し、サービスと体験を絶えず革新することを奨励します'
  },
  collaborativeSpirit: {
    zh: '协作精神',
    en: 'Collaborative Spirit',
    ja: '協力精神'
  },
  collaborativeSpiritDesc: {
    zh: '强调团队合作，共同创造卓越的顾客体验',
    en: 'Emphasize teamwork to jointly create excellent customer experiences',
    ja: 'チームワークを重視し、優れた顧客体験を共同で創造します'
  },
  pursuitOfExcellence: {
    zh: '追求卓越',
    en: 'Pursuit of Excellence',
    ja: '卓越性の追求'
  },
  pursuitOfExcellenceDesc: {
    zh: '不断提升服务质量，追求行业领先地位',
    en: 'Continuously improve service quality and pursue industry leadership',
    ja: 'サービスの質を絶えず向上させ、業界のリーダーシップを追求します'
  },
  passionForCulture: {
    zh: '热爱文化',
    en: 'Passion for Culture',
    ja: '文化への情熱'
  },
  passionForCultureDesc: {
    zh: '热爱电影和美食文化，传递美好体验',
    en: 'Love movies and food culture, and pass on wonderful experiences',
    ja: '映画と食文化を愛し、素晴らしい体験を伝えます'
  },
  
  // 节目活动
  programsTitle: {
    zh: '我们的节目与活动',
    en: 'Our Programs & Events',
    ja: '当社のプログラムとイベント'
  },
  programsDescription: {
    zh: 'flicknibble House提供多种独特的"电影+餐饮"体验，满足不同顾客的需求',
    en: 'FlickNibble House provides a variety of unique "movie + dining" experiences to meet the needs of different customers',
    ja: 'FlickNibble Houseは、さまざまな顧客のニーズに応えるために、さまざまな独特の「映画＋ダイニング」体験を提供します'
  },
  comingSoonEvents: {
    zh: '即将推出的活动',
    en: 'Upcoming Events',
    ja: '近日公開予定のイベント'
  },
  eventsCalendar: {
    zh: '活动日历',
    en: 'Events Calendar',
    ja: 'イベントカレンダー'
  },
  eventDetailsButton: {
    zh: '了解详情',
    en: 'Learn More',
    ja: '詳細を見る'
  },
  
  // 价值主张
  valuePropositionTitle: {
    zh: '我们的价值主张',
    en: 'Our Value Proposition',
    ja: '私たちの価値提案'
  },
  valuePropositionDescription: {
    zh: '了解flicknibble House为什么是您"电影+餐饮"体验的最佳选择',
    en: 'Find out why FlickNibble House is your best choice for "movie + dining" experience',
    ja: 'FlickNibble Houseが「映画＋ダイニング」体験の最適な選択である理由をご覧ください'
  },
  competitiveAdvantagesTitle: {
    zh: '我们的竞争优势',
    en: 'Our Competitive Advantages',
    ja: '当社の競争上の優位性'
  },
  industryPioneer: {
    zh: '行业先驱',
    en: 'Industry Pioneer',
    ja: '業界のパイオニア'
   },
  contributionTitle: {
    zh: '贡献：',
    en: 'Contribution:',
    ja: '貢献：'
  },
  industryPioneerDesc: {
    zh: 'flicknibble House是"电影+餐饮"行业的先驱，拥有丰富的经验和专业的团队',
    en: 'FlickNibble House is a pioneer in the "movie + dining" industry with rich experience and professional team',
    ja: 'FlickNibble Houseは「映画＋ダイニング」業界のパイオニアであり、豊富な経験と専門的なチームを持っています'
  },
  customizedService: {
    zh: '定制化服务',
    en: 'Customized Service',
    ja: 'カスタマイズされたサービス'
  },
  customizedServiceDesc: {
    zh: '我们提供个性化的定制服务，满足不同顾客的需求和偏好',
    en: 'We provide personalized customized services to meet the needs and preferences of different customers',
    ja: '私たちは、さまざまな顧客のニーズと好みに応えるために、パーソナライズされたカスタマイズサービスを提供します'
  },
  strategicPartnerships: {
    zh: '战略合作伙伴',
    en: 'Strategic Partnerships',
    ja: '戦略的パートナーシップ'
  },
  strategicPartnershipsDesc: {
    zh: '我们与多家知名电影公司和餐厅建立了战略合作关系，确保为顾客提供优质的内容和服务',
    en: 'We have established strategic cooperative relationships with many well-known film companies and restaurants to ensure high-quality content and services for customers',
    ja: '当社は多くの有名な映画会社やレストランと戦略的提携関係を構築し、顧客に高品質なコンテンツとサービスを提供することを確保しています'
  },
  continuousInnovationAdvantage: {
    zh: '持续创新',
    en: 'Continuous Innovation',
    ja: '継続的なイノベーション'
  },
  continuousInnovationAdvantageDesc: {
    zh: '我们不断创新服务和体验，保持行业领先地位',
    en: 'We constantly innovate services and experiences to maintain industry leadership',
    ja: '私たちは絶えずサービスと体験を革新し、業界のリーダーシップを維持します'
  },
  targetMarketTitle: {
    zh: '我们的目标市场',
    en: 'Our Target Market',
    ja: '当社のターゲット市場'
  },
  mainAudience: {
    zh: '主要受众',
    en: 'Main Audience',
    ja: '主要な聴衆'
  },
  mainAudience1: {
    zh: '18-35岁的年轻情侣',
    en: 'Young couples aged 18-35',
    ja: '18-35歳の若いカップル'
  },
  mainAudience2: {
    zh: '注重生活品质的都市白领',
    en: 'Urban white-collar workers who value quality of life',
    ja: '生活の質を重視する都市のホワイトカラー'
  },
  mainAudience3: {
    zh: '电影和美食爱好者',
    en: 'Movie and food enthusiasts',
    ja: '映画と食の愛好家'
  },
  customerNeeds: {
    zh: '客户需求',
    en: 'Customer Needs',
    ja: '顧客のニーズ'
  },
  customerNeeds1: {
    zh: '独特的约会体验',
    en: 'Unique dating experience',
    ja: '独特なデート体験'
  },
  customerNeeds2: {
    zh: '高品质的娱乐和餐饮服务',
    en: 'High-quality entertainment and dining services',
    ja: '高品質のエンターテイメントとダイニングサービス'
  },
  customerNeeds3: {
    zh: '创新的消费体验',
    en: 'Innovative consumption experience',
    ja: '革新的な消費体験'
  },
  marketPositioning: {
    zh: '市场定位',
    en: 'Market Positioning',
    ja: '市場ポジショニング'
  },
  marketPositioning1: {
    zh: '高端"电影+餐饮"体验品牌',
    en: 'High-end "movie + dining" experience brand',
    ja: 'ハイエンド「映画＋ダイニング」体験ブランド'
  },
  marketPositioning2: {
    zh: '创新的生活方式提供者',
    en: 'Innovative lifestyle provider',
    ja: '革新的なライフスタイルプロバイダー'
  },
  marketPositioning3: {
    zh: '浪漫约会的首选场所',
    en: 'First choice for romantic dates',
    ja: 'ロマンチックなデートの第一選択肢'
  },
  customerFeedbackTitle: {
    zh: '客户反馈',
    en: 'Customer Feedback',
    ja: '顧客のフィードバック'
  },
  
  // 联系我们
  contactInfoTitle: {
    zh: '联系信息',
    en: 'Contact Information',
    ja: '連絡先情報'
  },
  inquiryFormTitle: {
    zh: '查询表单',
    en: 'Inquiry Form',
    ja: 'お問い合わせフォーム'
  },
  followUs: {
    zh: '关注我们',
    en: 'Follow Us',
    ja: 'フォローしてください'
  },
  address: {
    zh: '地址',
    en: 'Address',
    ja: '住所'
  },
  addressDetail: {
    zh: '海口市海南大学观澜湖校区',
    en: 'Hainan University Mission Hills Campus, Haikou',
    ja: '海口市海南大学観瀾湖キャンパス'
  },
  phone: {
    zh: '电话',
    en: 'Phone',
    ja: '電話'
  },
  phoneNumber: {
    zh: '+86 18037199926',
    en: '+86 18037199926',
    ja: '+86 18037199926'
  },
  email: {
    zh: '邮箱',
    en: 'Email',
    ja: 'メール'
  },
  emailAddress: {
    zh: 'info@flicknibblehouse.com',
    en: 'info@flicknibblehouse.com',
    ja: 'info@flicknibblehouse.com'
  },
  businessHours: {
    zh: '营业时间',
    en: 'Business Hours',
    ja: '営業時間'
  },
  businessHoursDetail: {
    zh: '周一至周日 10:00 - 22:00',
    en: 'Monday to Sunday 10:00 - 22:00',
    ja: '月曜日から日曜日まで 10:00 - 22:00'
  },
  subscribeNewsletter: {
    zh: '订阅通讯',
    en: 'Subscribe to Newsletter',
    ja: 'ニュースレター購読'
  },
  subscribeNewsletterDesc: {
    zh: '订阅我们的通讯，获取最新的活动和优惠信息。',
    en: 'Subscribe to our newsletter to get the latest events and offers.',
    ja: '最新のイベントとオファーを入手するには、ニュースレターを購読してください。'
  },
  privacyPolicy: {
    zh: '隐私政策',
    en: 'Privacy Policy',
    ja: 'プライバシーポリシー'
  },
  termsOfService: {
    zh: '服务条款',
    en: 'Terms of Service',
    ja: '利用規約'
  },
  cookiePolicy: {
    zh: 'Cookie政策',
    en: 'Cookie Policy',
    ja: 'クッキーポリシー'
  },
  copyright: {
    zh: '© 2025 FlickNibble House. 保留所有权利。',
    en: '© 2025 FlickNibble House. All rights reserved.',
    ja: '© 2025 FlickNibble House. 全著作権所有。'
  },
  formName: {
    zh: '姓名',
    en: 'Name',
    ja: '名前'
  },
  formEmail: {
    zh: '邮箱',
    en: 'Email',
    ja: 'メール'
  },
  formPhone: {
    zh: '电话',
    en: 'Phone',
    ja: '電話'
  },
  formInquiryType: {
    zh: '查询类型',
    en: 'Inquiry Type',
    ja: 'お問い合わせの種類'
  },
  formMessage: {
    zh: '留言内容',
    en: 'Message',
    ja: 'メッセージ'
  },
  formAgreement: {
    zh: '我同意flicknibble House根据隐私政策处理我的个人信息',
    en: 'I agree that FlickNibble House processes my personal information according to the Privacy Policy',
    ja: 'FlickNibble Houseがプライバシーポリシーに従って私の個人情報を処理することに同意します'
  },
  formSubmit: {
    zh: '提交',
    en: 'Submit',
    ja: '送信'
  },
  formSubmitLoading: {
    zh: '提交中...',
    en: 'Submitting...',
    ja: '送信中...'
  },
  emailPlaceholder: {
    zh: '您的邮箱地址',
    en: 'Your email address',
    ja: 'あなたのメールアドレス'
  },
  namePlaceholder: {
    zh: '请输入您的姓名',
    en: 'Please enter your name',
    ja: 'お名前を入力してください'
  },
  emailPlaceholderForm: {
    zh: '请输入您的邮箱地址',
    en: 'Please enter your email address',
    ja: 'メールアドレスを入力してください'
  },
  phonePlaceholder: {
    zh: '请输入您的电话号码',
    en: 'Please enter your phone number',
    ja: '電話番号を入力してください'
  },
  messagePlaceholder: {
    zh: '请输入您的留言内容',
    en: 'Please enter your message',
    ja: 'メッセージを入力してください'
  },
  generalInquiry: {
    zh: '一般咨询',
    en: 'General Inquiry',
    ja: '一般的なお問い合わせ'
  },
  bookingInquiry: {
    zh: '预订咨询',
    en: 'Booking Inquiry',
    ja: '予約に関するお問い合わせ'
  },
  feedback: {
    zh: '意见反馈',
    en: 'Feedback',
    ja: 'フィードバック'
  },
  cooperation: {
    zh: '合作洽谈',
    en: 'Cooperation',
    ja: '協力のお話し'
  },
  otherInquiry: {
    zh: '其他',
    en: 'Other',
    ja: 'その他'
  },
  requiredField: {
    zh: '*',
    en: '*',
    ja: '*'
  },
  
   // 新增的翻译键 - 通用内容
  mapLoading: {
    zh: '地图加载中...',
    en: 'Map loading...',
    ja: '地図を読み込んでいます...'
  },
  
  // 新增的翻译键 - 联系我们页面
   specialRequestsPlaceholder: {
    zh: '如：迪士尼VIP、和服体验、餐饮定制等',
    en: 'E.g.: Disneyland VIP, kimono experience, dining customization, etc.',
    ja: '例：ディズニーランドVIP、着物体験、食事のカスタマイズなど'
  },
  
  contactPageTitle: {
    zh: '联系我们 | 专属旅行顾问 为您定制浪漫之旅',
    en: 'Contact Us | Exclusive Travel Consultants Customize Your Romantic Journey',
    ja: 'お問い合わせ | 専属旅行コンサルタントがあなたのロマンチックな旅をカスタマイズ'
  },
  contactPageIntro: {
    zh: '我们致力于为每对情侣提供个性化的日本浪漫之旅。如有任何疑问、定制需求或合作意向，请随时通过以下方式与我们联系。',
    en: 'We are committed to providing personalized Japanese romantic journeys for every couple. If you have any questions, customization needs or cooperation intentions, please feel free to contact us through the following methods.',
    ja: '私たちはすべてのカップルに個別の日本のロマンチックな旅を提供することに取り組んでいます。ご質問、カスタマイズのご要望、または提携のご意向がございましたら、以下の方法でお気軽にお問い合わせください。'
  },
  contactInfoCard: {
    zh: '联系信息',
    en: 'Contact Information',
    ja: '連絡先情報'
  },
  contactInfoCardDesc: {
    zh: '公司地址、电话、邮箱、办公时间',
    en: 'Company address, phone, email, business hours',
    ja: '会社住所、電話、メール、営業時間'
  },
  inquiryFormCard: {
    zh: '查询表',
    en: 'Inquiry Form',
    ja: 'お問い合わせフォーム'
  },
  inquiryFormCardDesc: {
    zh: '快速填写需求，获取专属行程建议',
    en: 'Quickly fill in your needs to get exclusive travel suggestions',
    ja: '必要事項をすばやく入力して、専属の旅行提案を取得'
  },
  socialMediaCard: {
    zh: '社交媒体',
    en: 'Social Media',
    ja: 'ソーシャルメディア'
  },
  socialMediaCardDesc: {
    zh: '关注我们，获取最新旅行灵感与优惠',
    en: 'Follow us to get the latest travel inspiration and offers',
    ja: 'フォローして、最新の旅行インスピレーションとオファーを取得'
  },
  companyName: {
    zh: 'FlickNibble House',
    en: 'FlickNibble House',
    ja: 'FlickNibble House'
  },
  companyAddress: {
    zh: '海口市海南大学观澜湖校区',
    en: 'Hainan University Mission Hills Campus, Haikou',
    ja: '海口市海南大学観瀾湖キャンパス'
  },
  freeHotline: {
    zh: '+86 18037199926（国内免费热线）',
    en: '+86 18037199926 (Domestic toll-free hotline)',
    ja: '+86 18037199926（国内無料ホットライン）'
  },
  serviceEmail: {
    zh: 'service@romanticjapan.com',
    en: 'service@romanticjapan.com',
    ja: 'service@romanticjapan.com'
  },
  businessHoursNew: {
    zh: '周一至周五 9:00-18:00（节假日除外）',
    en: 'Monday to Friday 9:00-18:00 (excluding holidays)',
    ja: '月曜日から金曜日まで 9:00-18:00（祝日を除く）'
  },
  emergencyContact: {
    zh: '+81-123-4567-8900（日本当地支持热线）',
    en: '+81-123-4567-8900 (Japan local support hotline)',
    ja: '+81-123-4567-8900（日本現地サポートホットライン）'
  },
  partnershipEmail: {
    zh: 'partner@romanticjapan.com',
    en: 'partner@romanticjapan.com',
    ja: 'partner@romanticjapan.com'
  },
  inquiryFormTitleNew: {
    zh: '定制您的浪漫日本之旅',
    en: 'Customize Your Romantic Japan Journey',
    ja: 'あなたのロマンチックな日本の旅をカスタマイズ'
  },
  inquiryFormIntro: {
    zh: '请填写以下信息，我们的旅行顾问将在24小时内与您联系。',
    en: 'Please fill in the following information, and our travel consultant will contact you within 24 hours.',
    ja: '以下の情報を入力してください。旅行コンサルタントが24時間以内にご連絡いたします。'
  },
  inquiryType: {
    zh: '咨询类型',
    en: 'Inquiry Type',
    ja: 'お問い合わせの種類'
  },
  entertainmentExperience: {
    zh: '娱乐体验',
    en: 'Entertainment Experience',
    ja: 'エンターテイメント体験'
  },
  japanCoupleTour: {
    zh: '日本情侣游',
    en: 'Japan Couple Tour',
    ja: '日本カップルツアー'
  },
  cooperationProject: {
    zh: '合作/合作项目',
    en: 'Cooperation/Partnership',
    ja: '協力/提携プロジェクト'
  },
  otherInquiryNew: {
    zh: '其他咨询',
    en: 'Other Inquiry',
    ja: 'その他のお問い合わせ'
  },
  travelPartySize: {
    zh: '出行人数',
    en: 'Travel Party Size',
    ja: '旅行人数'
  },
  travelDate: {
    zh: '计划出行时间',
    en: 'Planned Travel Time',
    ja: '予定旅行時間'
  },
  interestedDestinations: {
    zh: '感兴趣的目的地',
    en: 'Interested Destinations',
    ja: '興味のある目的地'
  },
  specialRequests: {
    zh: '特别需求/备注',
    en: 'Special Requests/Notes',
    ja: '特別な要望/メモ'
  },
  referralSource: {
    zh: '您是从哪个渠道了解到我们的？',
    en: 'How did you hear about us?',
    ja: 'どのチャネルから私たちを知りましたか？'
  },
  xiaohongshu: {
    zh: '小红书',
    en: 'Xiaohongshu',
    ja: '小紅書'
  },
  douyin: {
    zh: '抖音',
    en: 'Douyin',
    ja: '抖音'
  },
  sourceCtrip: {
    zh: '携程',
    en: 'Ctrip',
    ja: '携程'
  },
  friendReferral: {
    zh: '朋友推荐',
    en: 'Friend Referral',
    ja: '友人紹介'
  },
  privacyStatement: {
    zh: '我们承诺保护您的个人信息，仅用于行程咨询与定制服务。',
    en: 'We promise to protect your personal information and only use it for travel consultation and customization services.',
    ja: '個人情報を保護することを約束し、旅行相談とカスタマイズサービスのみに使用します。'
  },
  submitInquiry: {
    zh: '提交查询',
    en: 'Submit Inquiry',
    ja: '問い合わせを送信'
  },
  socialMediaTitle: {
    zh: '关注我们，探索更多浪漫旅行灵感',
    en: 'Follow us to explore more romantic travel inspiration',
    ja: 'フォローして、より多くのロマンチックな旅行のインスピレーションを探りましょう'
  },
  socialMediaIntro: {
    zh: '在我们的社交平台上，您可以查看真实客户分享、获取旅行小贴士、参与互动活动，甚至赢取专属优惠。',
    en: 'On our social platforms, you can view real customer sharing, get travel tips, participate in interactive activities, and even win exclusive offers.',
    ja: '私たちのソーシャルプラットフォームでは、実際の顧客の共有を見たり、旅行のヒントを得たり、インタラクティブなアクティビティに参加したり、専用のオファーを獲得したりできます。'
  },
  wechatOfficial: {
    zh: '微信公众号',
    en: 'WeChat Official Account',
    ja: 'WeChat公式アカウント'
  },
  wechatDesc: {
    zh: '推送旅行故事、季节限定套餐',
    en: 'Push travel stories, seasonal limited packages',
    ja: '旅行ストーリー、季節限定パッケージをプッシュ'
  },
  xiaohongshuDesc: {
    zh: '情侣打卡实拍、美食探店笔记',
    en: 'Couple check-in photos, food exploration notes',
    ja: 'カップルのチェックイン写真、美食探検ノート'
  },
  douyinDesc: {
    zh: '短视频行程预览、用户互动挑战',
    en: 'Short video itinerary preview, user interaction challenges',
    ja: 'ショート動画行程プレビュー、ユーザーインタラクティブチャレンジ'
  },
  weibo: {
    zh: '微博',
    en: 'Weibo',
    ja: '微博'
  },
  weiboDesc: {
    zh: '旅行资讯、合作活动发布',
    en: 'Travel information, cooperation event release',
    ja: '旅行情報、協力イベントのリリース'
  },
  ctripFliggy: {
    zh: '携程/飞猪',
    en: 'Ctrip/Fliggy',
    ja: '携程/飛猪'
  },
  ctripFliggyDesc: {
    zh: '直接预订套餐、查看用户评价',
    en: 'Direct booking packages, view user reviews',
    ja: 'パッケージを直接予約、ユーザーレビューを表示'
  },
  
  // 新增的翻译键 - 为什么选择我们
  coreValueProposition: {
    zh: '核心价值主张',
    en: 'Core Value Proposition',
    ja: 'コアバリュープロポジション'
  },
  coreValuePropositionDesc: {
    zh: '为追求浪漫体验与品质感的年轻情侣，针对日本跨城旅行打造高端定制体验，覆盖出行全场景，让情侣在舒适旅程中收获更深厚的情感共鸣。让每一段行程都成为可分享、高记忆点的浪漫叙事。',
    en: 'For young couples seeking romantic experiences and quality, we create high-end customized experiences for intercity travel in Japan, covering all travel scenarios, allowing couples to gain deeper emotional resonance during comfortable journeys. Every journey becomes a shareable, high-memory romantic narrative.',
    ja: 'ロマンチックな体験と質を求める若いカップルのために、日本の都市間旅行のための高級カスタマイズ体験を作成し、すべての旅行シナリオをカバーし、カップルが快適な旅の中でより深い感情的共鳴を得られるようにします。すべての旅が共有可能で、記憶に残るロマンチックな物語になります。'
  },
  keyCompetitiveAdvantages: {
    zh: '关键竞争优势（与普通日本游产品明确区分）',
    en: 'Key Competitive Advantages (Clearly differentiated from ordinary Japan tour products)',
    ja: '主要な競争上の優位性（一般的な日本ツアー製品と明確に区別）'
  },
  competitiveDimension: {
    zh: '竞争维度',
    en: 'Competitive Dimension',
    ja: '競争の次元'
  },
  ourAdvantages: {
    zh: '本产品优势',
    en: 'Our Product Advantages',
    ja: '当社製品の優位性'
  },
  commonShortcomings: {
    zh: '市场同类产品常见短板',
    en: 'Common Shortcomings of Similar Products in the Market',
    ja: '市場の同様の製品の一般的な短所'
  },
  accommodationExperience: {
    zh: '住宿体验',
    en: 'Accommodation Experience',
    ja: '宿泊体験'
  },
  accommodationAdvantage: {
    zh: '精选 3★-5★高端酒店 / 特色度假村，覆盖核心商圈 / 景观位，含主题房、私汤、专属服务等增值权益',
    en: 'Selected 3★-5★ high-end hotels / featured resorts, covering core business districts / scenic locations, including theme rooms, private hot springs, exclusive services and other value-added benefits',
    ja: '厳選された3★-5★の高級ホテル/特色あるリゾート、中心商業地区/景色の良い場所をカバーし、テーマルーム、プライベート温泉、専属サービスなどの追加価値を含む'
  },
  accommodationShortcoming: {
    zh: '多为标准化经济型酒店，位置偏远，缺乏定制化体验',
    en: 'Most are standardized economy hotels, remote location, lack of customized experience',
    ja: 'ほとんどが標準化されたエコノミーホテルで、場所が離れていて、カスタマイズされた体験が不足'
  },
  itineraryDesign: {
    zh: '行程设计',
    en: 'Itinerary Design',
    ja: '行程設計'
  },
  itineraryAdvantage: {
    zh: '"核心景点全覆盖 + VIP 专属权益"，含迪士尼快速通道、专属摄影、水上运动等差异化项目',
    en: '"Full coverage of core attractions + VIP exclusive benefits", including Disneyland express lanes, exclusive photography, water sports and other differentiated projects',
    ja: '「主要観光スポットの完全カバレッジ＋VIP専属特典」、ディズニーランドの快速レーン、専属写真撮影、水上スポーツなどの差別化されたプロジェクトを含む'
  },
  itineraryShortcoming: {
    zh: '常规景点串联，无专属体验，需自行排队 / 预约',
    en: 'Regular attractions in series, no exclusive experience, need to queue / book by yourself',
    ja: '通常の観光スポットが直列になっており、専属体験はなく、自分で行列 / 予約が必要'
  },
  diningService: {
    zh: '餐饮服务',
    en: 'Dining Service',
    ja: '飲食サービス'
  },
  diningAdvantage: {
    zh: '全程特色餐饮，含 VIP 免排队餐厅、定制主题餐、景餐融合体验，覆盖日西融合菜系',
    en: 'Whole journey featured dining, including VIP no-queue restaurants, customized theme meals, scenery-dining integration experience, covering Japanese-Western fusion cuisine',
    ja: '旅程全体の特色ある食事、VIP待ち時間不要レストラン、カスタマイズされたテーマミール、景色と食事の融合体験を含み、日西融合料理をカバー'
  },
  diningShortcoming: {
    zh: '普通团餐或自理，缺乏特色与场景化设计',
    en: 'Ordinary group meals or self-catering, lack of features and scene-based design',
    ja: '通常の団体食または自炊、特色とシーンベースのデザインが不足'
  },
  serviceGuarantee: {
    zh: '服务保障',
    en: 'Service Guarantee',
    ja: 'サービス保証'
  },
  serviceAdvantage: {
    zh: '专属导游全程陪同，含行程协调、摄影指导、应急处理，搭配全方位旅行保险',
    en: 'Exclusive guide accompanies the whole journey, including itinerary coordination, photography guidance, emergency handling, with comprehensive travel insurance',
    ja: '専属ガイドが全程同行し、行程調整、写真撮影ガイダンス、緊急対応を含み、包括的な旅行保険を付ける'
  },
  serviceShortcoming: {
    zh: '多为大巴团拼团导游，服务同质化，保障范围有限',
    en: 'Most are coach group tour guides, service homogenization, limited coverage',
    ja: 'ほとんどがバス団体ツアーガイドで、サービスが同質化され、カバレッジが限られている'
  },
  flexibility: {
    zh: '灵活性',
    en: 'Flexibility',
    ja: '柔軟性'
  },
  flexibilityAdvantage: {
    zh: '支持个性化行程调整，结合季节推出限定体验（樱花季 / 红叶季专属安排）',
    en: 'Support personalized itinerary adjustments, launching limited experiences according to seasons (special arrangements for cherry blossom season / autumn leaves season)',
    ja: 'パーソナライズされた行程の調整をサポートし、季節に応じて限定体験を提供（桜の季節/紅葉の季節の特別な手配）'
  },
  flexibilityShortcoming: {
    zh: '固定行程不可调整，季节适配性差',
    en: 'Fixed itinerary cannot be adjusted, poor seasonal adaptability',
    ja: '固定された行程は調整できず、季節の適応性が悪い'
  },
  coreAudienceProfile: {
    zh: '核心受众画像',
    en: 'Core Audience Profile',
    ja: 'コアオーディエンスプロフィール'
  },
  basicAttributes: {
    zh: '基础属性：18-35 岁中国年轻情侣，月均可支配收入 3000-10000 元，属于中高消费能力群体',
    en: 'Basic attributes: 18-35 year-old Chinese young couples, monthly disposable income of 3000-10000 yuan, belonging to middle and high consumption capacity groups',
    ja: '基本属性：18-35歳の中国人若いカップル、月収入3000-10000元、中高消費層'
  },
  behavioralCharacteristics: {
    zh: '行为特征：年度观影≥8 次、乐于尝试异国美食、日均社交媒体使用≥3 小时，习惯通过 OTA 平台 / 社交软件获取旅行信息并完成预订',
    en: 'Behavioral characteristics: Annual movie viewing ≥8 times, willing to try exotic food, daily social media use ≥3 hours, accustomed to obtaining travel information and completing bookings through OTA platforms / social software',
    ja: '行動特性：年間映画鑑賞回数≥8回、異国の美食を試すことが好き、1日平均ソーシャルメディア使用時間≥3時間、OTAプラットフォーム/ソーシャルソフトウェアを通じて旅行情報を取得し、予約を完了する習慣がある'
  },
  painPoints: {
    zh: '需求痛点：拒绝走马观花的跟团游，追求深度体验和情感共鸣，重视行程独特性、便利性与社交分享价值',
    en: 'Pain points: Rejecting superficial group tours, pursuing in-depth experiences and emotional resonance, valuing itinerary uniqueness, convenience and social sharing value',
    ja: 'ペインポイント：表面的な団体ツアーを拒否し、深い体験と感情的共鳴を追求し、行程の独自性、利便性、ソーシャルシェアリングの価値を重視'
  },
  decisionLogic: {
    zh: '决策逻辑：优先考虑住宿品质、专属体验与服务细节，愿意为舒适感、私密性和 exclusivity 支付溢价',
    en: 'Decision logic: Priority is given to accommodation quality, exclusive experience and service details, willing to pay a premium for comfort, privacy and exclusivity',
    ja: '意思決定ロジック：宿泊の質、専属体験、サービスの詳細を優先し、快適さ、プライバシー、排他性のためにプレミアムを支払う意思がある'
  },
  sustainabilityAndPartnerships: {
    zh: '可持续性与伙伴关系',
    en: 'Sustainability and Partnerships',
    ja: '持続可能性とパートナーシップ'
  },
  partnershipAdvantages: {
    zh: '伙伴关系优势：与 OTA 头部平台（携程、飞猪）、日本 3★-5★酒店集群、核心景点（东京迪士尼等）、知名保险公司（平安、众安）建立深度合作，保障资源稳定性与价格优势，同时获得日本旅游局政策支持与官方背书',
    en: 'Partnership advantages: Established in-depth cooperation with leading OTA platforms (Ctrip, Fliggy), Japanese 3★-5★ hotel clusters, core attractions (Tokyo Disneyland, etc.), well-known insurance companies (Ping An, Zhong An), ensuring resource stability and price advantages, while obtaining policy support and official endorsement from the Japan Tourism Agency',
    ja: 'パートナーシップの利点：主要なOTAプラットフォーム（携程、飛猪）、日本の3★-5★ホテルクラスター、主要観光スポット（東京ディズニーランドなど）、有名な保険会社（平安、衆安）と深い協力関係を確立し、リソースの安定性と価格の優位性を確保しながら、日本観光庁の政策支援と公式の承認を取得'
  },
  sustainableOperation: {
    zh: '可持续运营：通过季节差异化定价与资源调配，平衡淡旺季供需（旺季提价覆盖成本、淡季折扣激活需求），维持 15%-20% 稳定利润率',
    en: 'Sustainable operation: Through seasonal differential pricing and resource allocation, balance supply and demand during peak and off-peak seasons (price increases during peak seasons to cover costs, discounts during off-peak seasons to activate demand), maintaining a stable profit margin of 15%-20%',
    ja: '持続可能な運営：季節別の差別的な価格設定とリソース配分を通じて、ピークシーズンとオフピークシーズンの需給のバランスを取り（ピークシーズンの価格上昇でコストをカバー、オフピークシーズンの割引で需要を活性化）、15-20%の安定した利益率を維持'
  },
  sustainability: {
    zh: '可持续性',
    en: 'Sustainability',
    ja: '持続可能性'
  },
  partnerships: {
    zh: '合作伙伴关系',
    en: 'Partnerships',
    ja: 'パートナーシップ'
  },
  callToAction: {
    zh: '行动号召（Call to Action）',
    en: 'Call to Action',
    ja: '行動の呼びかけ（Call to Action）'
  },
  bookNowCall: {
    zh: '立即预订：锁定早鸟优惠，立省 2500 元 / 人（仅限前 50 组情侣）',
    en: 'Book now: Lock in early bird discounts, save 2500 yuan / person (limited to the first 50 couples)',
    ja: '今すぐ予約：早期割引をロックし、2500元/人を節約（最初の50組のカップル限定）'
  },
  consultNowCall: {
    zh: '一键咨询：添加客服微信，获取专属行程规划方案与情侣专属福利',
    en: 'One-click consultation: Add customer service WeChat, get exclusive travel planning plan and couple-exclusive benefits',
    ja: 'ワンクリック相談：カスタマーサービスのWeChatを追加し、専属の旅行計画とカップル専用の特典を取得'
  },
  shareAndEarnCall: {
    zh: '分享有礼：发布行程体验 UGC 内容，@官方账号即有机会获得下次旅行 500 元优惠券',
    en: 'Share and earn: Post travel experience UGC content, @official account to have the opportunity to get a 500 yuan discount coupon for the next trip',
    ja: 'シェアして獲得：旅行体験のUGCコンテンツを投稿し、公式アカウントを@すると、次の旅行の500元割引クーポンを獲得するチャンス',
  },
  limitedBenefitsCall: {
    zh: '限时权益：旺季预订赠送迪士尼烟花专属观赏位 + 京都和服摄影升级服务',
    en: 'Limited-time benefits: Booking during peak season gives exclusive viewing seats for Disneyland fireworks + Kyoto kimono photography upgrade service',
    ja: '期間限定特典：ピークシーズンに予約すると、ディズニーランド花火の専用観覧席＋京都着物写真撮影アップグレードサービスをプレゼント'
  }
};

// 定义LanguageContext类型
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// 创建LanguageContext
export const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  t: (key) => key
});

// 创建LanguageProvider组件
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // 初始化语言状态，从localStorage获取或使用默认值
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'zh';
  });

  // 保存语言偏好到localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // 翻译函数
  const t = (key: string) => {
    const translation = translations[key];
    if (translation) {
      return translation[language] || key;
    }
    return key;
  };

  // 提供Context值
  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};