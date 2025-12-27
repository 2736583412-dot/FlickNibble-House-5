import { useContext } from 'react';
import { LanguageContext } from '../../contexts/languageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// 领导团队成员数据
const leadershipTeam = [
  {
    id: 1,
    name: {
      zh: "Junhao Zhang",
      en: "Junhao Zhang",
      ja: "ジュンハオ・チャン"
    },
    position: {
      zh: "首席执行官 (CEO)",
      en: "Chief Executive Officer (CEO)",
      ja: "最高執行責任者（CEO）"
    },
    description: {
      zh: "作为FlickNibble House的战略核心，CEO负责制定公司\"电影观影+餐饮\"场景融合的长期发展方向。领导影院合作资源和核心供应链伙伴的对接，确保业务模式的可持续性。协调各部门平衡观影体验和用餐服务的质量标准，推动品牌从区域试点向全国连锁扩张。同时，把握行业趋势，就IP主题店、线上线下一体化服务等关键战略做出决策。",
      en: "As the strategic core of FlickNibble House, the CEO is responsible for formulating the long-term development direction of the company's \"movie viewing + catering\" scenario integration. They lead the connection between cinema cooperation resources and core supply chain partners to ensure the sustainability of the business model. They coordinate various departments to balance the quality standards of the movie viewing experience and dining services, and promote the brand from regional pilot projects to national chain expansion. At the same time, they grasp industry trends and make decisions on key strategies such as IP-themed stores and integrated online and offline services.",
      ja: "FlickNibble Houseの戦略的中核として、CEOは同社の「映画鑑賞＋ケータリング」シナリオ統合の長期的な発展方向性を策定する責任があります。彼らは映画館の提携リソースと中核サプライチェーンパートナーとの接続を主導し、ビジネスモデルの持続可能性を確保します。彼らは各部門を調整して映画鑑賞体験とダイニングサービスの質の基準のバランスを取り、ブランドを地域パイロットから全国チェーンへの拡大を推進します。同時に、業界動向を把握し、IPテーマストアやオンライン・オフライン統合サービスなどの重要な戦略について決定を下します。"
    },
    contribution: {
      zh: "保持业务聚焦核心业务领域，解决关键资源问题，带领公司突破地域限制。同时凭借精准决策把握行业机遇，既能保证服务质量又能使公司在竞争中建立自身特色。",
      en: "Keep the business focused on the core business area, solve the key resource issues, and lead the company to break through geographical limitations. At the same time, rely on precise decision-making to seize industry opportunities, which can not only ensure service quality but also enable the company to establish its own characteristics in the competition.",
      ja: "事業を中核事業分野に焦点を絞り、主要なリソースの問題を解決し、会社が地理的制限を突破するよう導きます。同時に、精確な意思決定によって業界の機会を捉え、サービスの質を確保するだけでなく、競争の中で会社独自の特色を確立することができます。"
    },
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20CEO%2C%20Asian%20man%2C%20confident%20smile%2C%20professional%20attire&sign=5720e9e017bae5ef3e3431f63104d923"
  },
  {
    id: 2,
    name: {
      zh: "Xin Chen",
      en: "Xin Chen",
      ja: "シン・チェン"
    },
    position: {
      zh: "首席财务官 (CFO)",
      en: "Chief Financial Officer (CFO)",
      ja: "最高財務責任者（CFO）"
    },
    description: {
      zh: "CFO负责FlickNibble House的财务规划和资金管理，重点控制餐饮供应链成本、核算影院场地合作费用、分配营销预算。建立动态财务监控体系，追踪核心业务的收入和利润数据，及时优化成本结构。此外，协调融资规划和财务风险评估，为新店扩张、设备升级等投资决策提供精准财务分析支持，确保公司健康现金流和利润目标的实现。",
      en: "The CFO is in charge of the financial planning and fund management of FlickNibble House, with a primary focus on controlling the costs of the catering supply chain, calculating the cooperation expenses for cinema venues, and allocating marketing budgets. A dynamic financial monitoring system is established to track the revenue and profit data of core business, and to promptly optimize the cost structure. Additionally, the CFO coordinates the financing planning and financial risk assessment, providing precise financial analysis support for investment decisions such as the expansion of new stores and equipment upgrades, to ensure the company's healthy cash flow and the achievement of profit targets.",
      ja: "CFOはFlickNibble Houseの財務計画と資金管理を担当し、主にケータリングサプライチェーンのコスト管理、映画館会場の提携費用の計算、マーケティング予算の配分に焦点を当てています。動的な財務モニタリングシステムを確立し、中核事業の収益と利益データを追跡し、コスト構造を適時に最適化します。さらに、融資計画と財務リスク評価を調整し、新店舗の拡大や設備のアップグレードなどの投資決定に対して正確な財務分析サポートを提供し、会社の健全なキャッシュフローと利益目標の達成を確保します。"
    },
    contribution: {
      zh: "是公司的财务领导者和利润保障者。通过严格控制供应链、场地等核心成本，动态监控收入和利润，夯实现金流和利润基础；同时为新店扩张、设备升级等投资提供精准财务分析，规避风险、支持决策，助力\"电影观影+餐饮\"模式实现稳定盈利与发展。",
      en: "It is the company's financial leader and profit guarantor. By strictly controlling core costs such as supply chain and venue, and dynamically monitoring revenue and profit, it consolidates the foundation of cash flow and profit; at the same time, it provides precise financial analysis for new store expansion, equipment upgrade and other investments, avoiding risks and supporting decision-making, helping the \"movie viewing + catering\" model achieve stable profit and development.",
      ja: "同社の財務リーダーであり利益の保証者です。サプライチェーンや会場などの中核コストを厳格に管理し、収益と利益を動的に監視することで、キャッシュフローと利益の基盤を強化します。同時に、新店舗の拡大や設備のアップグレードなどの投資に対して正確な財務分析を提供し、リスクを回避し、意思決定をサポートし、「映画鑑賞＋ケータリング」モデルが安定した利益と発展を達成できるよう支援します。"
    },
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20CFO%2C%20Asian%20woman%2C%20professional%20attire%2C%20financial%20expert&sign=9dbc006593f52eefddad643f7f800e47"
  },
  {
    id: 3,
    name: {
      zh: "Kaixin Wang",
      en: "Kaixin Wang",
      ja: "カイシン・ワン"
    },
    position: {
      zh: "首席数据分析师 (CDO)",
      en: "Chief Data Analyst (CDO)",
      ja: "最高データ分析官（CDO）"
    },
    description: {
      zh: "CDO负责建立FlickNibble House的数据收集体系，整合线上购票平台、餐饮消费记录、会员行为等多维度数据。通过分析不同影片类型对应的餐品偏好、会员复购周期等关键指标，为营销团队提供数据洞察，进行精准餐品推荐和会员分层运营。同时，定期出具数据报告，辅助CEO和DoM调整业务策略，例如根据数据反馈优化家庭电影套餐的餐品组合，提升用户满意度。",
      en: "CDO is responsible for establishing the data collection system for FlickNibble House, integrating various dimensions of data such as online ticket purchasing platforms, dining consumption records, and member behaviors. By analyzing key indicators such as meal preferences corresponding to different film types and member repeat purchase cycles, it provides data insights for the marketing team to offer precise meal recommendations and conduct member stratified operations. At the same time, data reports are regularly produced to assist the CEO and DoM in adjusting business strategies, for example, optimizing the meal combinations of family movie packages based on data feedback to enhance user satisfaction.",
      ja: "CDOはFlickNibble Houseのデータ収集システムの確立を担当し、オンラインチケット購入プラットフォーム、ダイニング消費記録、会員行動などの多次元データを統合します。さまざまな映画の種類に対応する食事の好み、会員の再購入サイクルなどの重要な指標を分析することで、マーケティングチームにデータに基づく洞察を提供し、正確な食事の推奨と会員の層別運用を行います。同時に、定期的にデータレポートを作成し、CEOやDoMがビジネス戦略を調整するのを支援します。たとえば、データフィードバックに基づいてファミリー映画パッケージの食事の組み合わせを最適化し、ユーザー満足度を向上させます。"
    },
    contribution: {
      zh: "通过整合多维度信息，提取关键指标，为业务提供科学决策依据，避免营销和运营的盲目性。同时推动策略的动态优化，使服务更符合用户需求，既增强消费体验的粘性，又为\"电影观影+餐饮\"模式的高效运营和持续迭代提供支持。",
      en: "By integrating multi-dimensional information and extracting key indicators, we provide scientific decision-making basis for the business, avoiding the blindness of marketing and operation. At the same time, we promote dynamic optimization of strategies, making the services more in line with user needs, which not only enhances the stickiness of the consumption experience but also provides support for the efficient operation and continuous iteration of the \"movie viewing + catering\" model.",
      ja: "多次元情報を統合し、重要な指標を抽出することで、ビジネスに科学的な意思決定の根拠を提供し、マーケティングと運用の盲目性を回避します。同時に、戦略の動的最適化を推進し、サービスをユーザーのニーズにより合致させます。これにより、消費体験の粘着性を高めるだけでなく、「映画鑑賞＋ケータリング」モデルの効率的な運用と継続的な反復にもサポートを提供します。"
    },
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Data%20scientist%2C%20Asian%20man%2C%20analyzing%20data%2C%20professional%20attire&sign=9292762f608524de1091bc076ba1e167"
  },
  {
    id: 4,
    name: {
      zh: "Yixuan Yan",
      en: "Yixuan Yan",
      ja: "イーシュアン・イェン"
    },
    position: {
      zh: "营销总监 (DoM)",
      en: "Director of Marketing (DoM)",
      ja: "マーケティングディレクター（DoM）"
    },
    description: {
      zh: "营销部（DoM）牵头制定整体营销战略，围绕\"影片档期+节日节点\"策划主题营销活动，如暑期亲子观影美食节、春节团圆观影桶等。协调线上线下营销渠道，领导社交媒体内容运营，包括抖音美食测评、小红书打卡活动、线下影院推广及会员体系建立等，提升品牌曝光度和用户获取转化。同时，协同首席数字官（CDO）和市场研究部（DMR），将数据洞察和市场需求融入营销战略，确保营销效果最大化。",
      en: "The Department of Marketing (DoM) takes the lead in formulating the overall marketing strategy, and plans thematic marketing campaigns centered around \"film release schedules + festival nodes\", such as the Summer Parent-Child Movie Viewing Food Festival and the Lunar New Year Festival Reunion Movie Viewing Bucket. It coordinates online and offline marketing channels, and leads the content operation of social media, including Douyin food reviews, Xiaohongshu check-in activities, offline cinema promotions, and the establishment of a membership system, so as to enhance brand exposure and user acquisition and conversion. At the same time, it collaborates with the Chief Digital Officer (CDO) and the Department of Market Research (DMR) to integrate data insights and market demands into the marketing strategy, ensuring the maximization of marketing effects.",
      ja: "マーケティング部門（DoM）は全体的なマーケティング戦略の策定を主導し、「映画の公開スケジュール＋祝日の節目」を中心に、夏休みの親子映画鑑賞美食祭や春節の団欒映画鑑賞バケツなどのテーママーケティングキャンペーンを企画します。オンライン・オフラインのマーケティングチャネルを調整し、抖音の美食レビュー、小紅書のチェックインアクティビティ、オフライン映画館のプロモーション、会員制度の確立など、ソーシャルメディアのコンテンツ運用をリードし、ブランドの露出度とユーザーの獲得・転換を向上させます。同時に、最高デジタル責任者（CDO）と市場調査部門（DMR）と協力し、データに基づく洞察と市場ニーズをマーケティング戦略に統合し、マーケティング効果の最大化を確保します。"
    },
    contribution: {
      zh: "通过结合影片档期和节日节点打造特色活动，实现目标客群精准触达。协调全渠道营销和会员体系有效扩大品牌影响力并带动用户转化；同时协同数据和研究团队优化策略，使营销举措更贴合市场需求。这种方式不仅能带动短期营收增长，还能为\"电影观影+餐饮\"模式积累长期用户粘性。",
      en: "Creating featured activities by combining film releases and festival nodes enables precise targeting of the intended customer groups. Coordinating omni-channel marketing and the membership system effectively expands brand influence and drives user conversion; meanwhile, collaborating with the data and research teams to optimize strategies makes marketing initiatives more aligned with market demands. This approach not only boosts short-term revenue growth but also accumulates long-term user stickiness for the \"movie viewing + catering\" model.",
      ja: "映画の公開と祝日の節目を組み合わせて特色あるアクティビティを作成することで、ターゲットとなる顧客グループに的確に到達することができます。オムニチャネルマーケティングと会員制度を調整することで、効果的にブランドの影響力を拡大し、ユーザーの転換を促進します。また、データチームと研究チームと協力して戦略を最適化することで、マーケティングイニシアチブが市場ニーズにより合致するようになります。このアプローチは短期的な収益成長を促進するだけでなく、「映画鑑賞＋ケータリング」モデルの長期的なユーザー粘着性を蓄積することもできます。"
    },
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Marketing%20director%2C%20Asian%20woman%2C%20marketing%20professional%2C%20creative%20thinking&sign=f66b1eeb29794c4cdc916fa1f408a9b5"
  },
  {
    id: 5,
    name: {
      zh: "Ruoqi Sun",
      en: "Ruoqi Sun",
      ja: "ルオチー・スン"
    },
    position: {
      zh: "市场研究总监 (DMR)",
      en: "Director of Marketing Research (DMR)",
      ja: "市場調査ディレクター（DMR）"
    },
    description: {
      zh: "市场研究部（DMR）负责开展市场调研工作。通过用户问卷、焦点小组、竞品分析等方式，识别年轻情侣、家庭用户、学生群体等目标客群的观影和餐饮需求。追踪行业趋势，分析竞品的产品策略和营销模式，为公司的食品创新（如低糖健康观影餐、地方特色小吃适配）和服务优化（如提升配送效率）提供依据。定期出具市场研究报告，为CEO的战略决策和DoM的活动策划提供前瞻性市场参考。",
      en: "The Department of Market Research (DMR) is responsible for conducting market research. Through user questionnaires, focus groups, competitor analysis and other methods, it identifies the movie viewing and catering needs of target customer segments, such as young couples, family users and student groups. It tracks industry trends, analyzes competitors' product strategies and marketing models, and provides a basis for the company's food innovation (e.g., low-sugar healthy movie viewing meals and adaptation of local specialty snacks) and service optimization (e.g., improvement of delivery efficiency). It regularly issues market research reports to provide forward-looking market references for the CEO's strategic decision-making and the DoM's campaign planning.",
      ja: "市場調査部門（DMR）は市場調査を実施する責任があります。ユーザーアンケート、フォーカスグループ、競合分析などの方法を通じて、若いカップル、家族ユーザー、学生グループなどのターゲット顧客セグメントの映画鑑賞とケータリングのニーズを特定します。業界動向を追跡し、競合他社の製品戦略とマーケティングモデルを分析し、同社の食品イノベーション（低糖質健康映画鑑賞食、地域特色の軽食の適応など）とサービスの最適化（配送効率の向上など）の基礎を提供します。定期的に市場調査レポートを発行し、CEOの戦略的意思決定とDoMのキャンペーン企画に前向きな市場参考を提供します。"
    },
    contribution: {
      zh: "通过多种方法识别不同客群需求，追踪行业趋势和竞品动态，为食品创新和服务优化提供精准方向，避免产品与市场脱节。出具的前瞻性报告能支撑CEO战略规划和DoM营销活动，让业务决策更贴合市场趋势。这不仅有助于\"电影观影+餐饮\"模式发展差异化竞争力，还为其长期发展奠定坚实的市场适配基础。",
      en: "By identifying the needs of different customer segments through multiple methods, tracking industry trends and competitors' dynamics, precise directions are provided for food innovation and service optimization, thus preventing products from being disconnected from the market. The released forward-looking reports can support the CEO's strategic planning and the DoM's marketing initiatives, making business decisions more in line with market trends. This not only helps the \"movie viewing + catering\" model develop differentiated competitiveness, but also lays a solid market adaptation foundation for its long-term development.",
      ja: "複数の方法を通じてさまざまな顧客グループのニーズを特定し、業界動向と競合他社の動向を追跡することで、食品のイノベーションとサービスの最適化に正確な方向性を提供し、製品が市場から切り離されるのを防ぎます。発表された前向きなレポートは、CEOの戦略的計画とDoMのマーケティングイニシアチブをサポートし、ビジネス決定を市場動向により合致させることができます。これは「映画鑑賞＋ケータリング」モデルが差別化された競争力を発展させるのを助けるだけでなく、その長期的な発展のための確固たる市場適応の基盤を築くこともできます。"
    },
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Market%20research%20director%2C%20Asian%20woman%2C%20analyzing%20market%20data%2C%20professional%20attire&sign=40e89b92c56eaae74a22f2fb942dd649"
  }
];

const Leadership = () => {
  const { t, language } = useContext(LanguageContext);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* 页面头部 */}
      <header className="bg-gray-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('aboutTitle')}</h1>
          <p className="text-xl text-gray-300">{t('subNavLeadership')}</p>
        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('leadershipTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('leadershipDescription')}
            </p>
          </div>
          
          {/* 领导团队成员 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{member.name[language]}</h3>
                      <p className="text-gray-200">{member.position[language]}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name[language]}</h3>
                  <p className="text-purple-600 font-medium mb-4">{member.position[language]}</p>
                  <p className="text-gray-700 mb-4">{member.description[language]}</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                   <h4 className="font-medium text-gray-900 mb-2">{t('contributionTitle')}</h4>
                    <p className="text-gray-700 text-sm">{member.contribution[language]}</p>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <i className="fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 团队文化 */}
          <div className="mt-20 bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">{t('teamCultureTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 mx-auto">
                  <i className="fa fa-lightbulb text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-center">创新思维</h3>
                <p className="text-gray-600 text-sm text-center">鼓励团队成员提出新想法，不断创新服务和体验</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 mx-auto">
                  <i className="fa fa-users text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-center">协作精神</h3>
                <p className="text-gray-600 text-sm text-center">强调团队合作，共同创造卓越的顾客体验</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 mx-auto">
                  <i className="fa fa-trophy text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-center">追求卓越</h3>
                <p className="text-gray-600 text-sm text-center">不断提升服务质量，追求行业领先地位</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600 mx-auto">
                  <i className="fa fa-heart text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-center">热爱文化</h3>
                <p className="text-gray-600 text-sm text-center">热爱电影和美食文化，传递美好体验</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leadership;