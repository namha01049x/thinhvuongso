export interface QuickShortcut {
  id: string;
  tag: string;
  title: string;
  ctaText: string;
  href: string;
  isHighlight?: boolean;
}

export interface StatCounter {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface PillarItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  summary: string;
  details: string[];
  isRoot?: boolean;
}

export interface OrbitNode {
  id: string;
  label: string;
  category: string;
  description: string;
  programSuggest: string;
  angle: number; // degrees on the orbit
}

export interface RoleLens {
  id: 'lam-cong' | 'tu-doanh' | 'chu-doanh-nghiep' | 'nha-dau-tu';
  name: string;
  subtitle: string;
  valueFlow: string;
  commonTraps: string[];
  firstStep: string;
  recommendedProgramId: string;
  caseStudy: {
    person: string;
    roleDetail: string;
    before: string;
    shift: string;
    after: string;
  };
}

export interface RoadmapStation {
  tier: string;
  tag: string;
  name: string;
  headline: string;
  description: string;
  programs: string[];
  targetAudience: string;
  status: 'free' | 'core' | 'open' | 'conditional';
  ctaLabel: string;
  ctaTarget: string;
  cx: number;
  cy: number;
}

export interface ProgramStage {
  stageNumber: string;
  title: string;
  focus: string;
  outcomes: string[];
}

export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  tier: 'tang-0' | 'tang-1' | 'tang-2' | 'tang-3';
  tierLabel: string;
  status: 'open' | 'self-paced' | 'free' | 'completed';
  statusLabel: string;
  roles: ('lam-cong' | 'tu-doanh' | 'chu-doanh-nghiep' | 'nha-dau-tu')[];
  tagline: string;
  description: string;
  format: string;
  schedule?: string;
  priceInfo?: {
    earlyBird?: string;
    phase2?: string;
    standard: string;
    note?: string;
  };
  previewUrl?: string;
  externalUrl?: string;
  previewImage?: string;
  forWhom: string[];
  notForWhom?: string[];
  stages: ProgramStage[];
  deliverables: string[];
}

export interface AcademyScreen {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  lanExample: {
    label: string;
    detail: string;
    metric?: string;
  };
}

export interface ChuyenSanArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  keyTakeaway: string;
  url: string;
}

export interface CommunityPhoto {
  src: string;
  caption: string;
  tag: string;
}

export const QUICK_SHORTCUTS: QuickShortcut[] = [
  {
    id: 'bai-test',
    tag: 'Chưa rõ bắt đầu từ đâu',
    title: 'Làm bài test 3 câu',
    ctaText: '2 phút · Mở bài test',
    href: '#bai-test',
  },
  {
    id: 'binh-dan',
    tag: 'Muốn xây nền từ đầu',
    title: 'Bình Dân Học Vụ Tài Chính',
    ctaText: 'Xem chương trình nền',
    href: '#chuong-trinh',
  },
  {
    id: 'but-pha',
    tag: 'Đang mở đăng ký',
    title: 'Bứt Phá Tài Chính',
    ctaText: 'Chuyên đề thực chiến',
    href: '#chuong-trinh',
    isHighlight: true,
  },
  {
    id: 'tinh-hoa',
    tag: 'Đồng hành 12 tháng',
    title: 'Tinh Hoa Thịnh Vượng',
    ctaText: 'Đi sâu và có người giữ nhịp',
    href: '#chuong-trinh',
  },
  {
    id: 'live-ndd',
    tag: '20h30 thứ Năm · Zoom',
    title: 'LIVE Người Dẫn Đường',
    ctaText: 'Nghe thử miễn phí',
    href: '#cong-dong',
  },
  {
    id: 'dong-hanh',
    tag: 'Có bài toán riêng',
    title: 'Đồng hành 1-1',
    ctaText: 'Trao đổi trực tiếp',
    href: '#dong-hanh',
  },
];

export const TICKER_ITEMS: string[] = [
  'Phát triển bản thân',
  'Làm chủ tài chính cá nhân',
  'Bình Dân Học Vụ Tài Chính',
  'Bứt Phá Tài Chính',
  'Tinh Hoa Thịnh Vượng',
  'Tư duy kinh doanh bền vững',
  'Đầu tư có kỷ luật',
  'Đồng hành dài hạn',
  'Thực hành qua bài toán thật',
];

export const STATS_DATA: StatCounter[] = [
  {
    value: 4,
    suffix: ' Trụ cột',
    label: 'Phát triển bản thân là gốc',
    sublabel: 'Tài chính · Kinh doanh · Đầu tư',
  },
  {
    value: 5,
    suffix: ' Tầng học tập',
    label: 'Từ miễn phí đến chuyên sâu',
    sublabel: 'Đi từng nấc theo đúng năng lực',
  },
  {
    value: 8,
    suffix: '+ Chương trình',
    label: 'Hệ thống học liệu & thực chiến',
    sublabel: 'Bình Dân Học Vụ · Bứt Phá · Tinh Hoa',
  },
  {
    value: 12,
    suffix: ' Tháng',
    label: 'Chu kỳ rèn luyện Tinh Hoa',
    sublabel: 'Có người giữ nhịp Chủ nhật hàng tuần',
  },
  {
    value: 100,
    suffix: '% Thực hành',
    label: 'Làm trên con số thật của mình',
    sublabel: 'Tại Khu Học Tập Thịnh Vượng Số',
  },
];

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'phat-trien-ban-than',
    number: 'GỐC · 01',
    badge: 'Trụ cột gốc rễ',
    title: 'Phát triển bản thân',
    summary:
      'Mọi kết quả tài chính, công việc và đầu tư đều là hệ quả từ phẩm chất, nhận thức và năng lực ra quyết định của chính người đó.',
    details: [
      'Nhận diện hệ niềm tin và nỗi sợ vô thức đang chi phối cách kiếm tiền và giữ tiền',
      'Rèn luyện sự tĩnh tại, kỷ luật bản thân và năng lực nhìn thẳng vào sự thật',
      'Xây dựng nội lực bền bỉ để không bị cuốn theo đám đông hay sóng thị trường',
    ],
    isRoot: true,
  },
  {
    id: 'tai-chinh',
    number: 'TRỤ · 02',
    badge: 'Nền tảng an toàn',
    title: 'Tài chính cá nhân & gia đình',
    summary:
      'Làm rõ bức tranh thu - chi - tích lũy - nợ - dự phòng để thoát khỏi vòng xoáy kiếm được nhiều nhưng cuối năm vẫn không dư.',
    details: [
      'Đo lường sức khỏe tài chính qua bảng dòng tiền và bảng cân đối tài sản thật',
      'Thiết lập quỹ dự phòng, bảo vệ rủi ro và nguyên tắc phân bổ thu nhập',
      'Tách bạch hoàn toàn túi tiền cá nhân/gia đình khỏi túi tiền kinh doanh',
    ],
  },
  {
    id: 'kinh-doanh',
    number: 'TRỤ · 03',
    badge: 'Động cơ tạo dòng tiền',
    title: 'Tạo giá trị & Kinh doanh',
    summary:
      'Nâng trần thu nhập bằng cách gia tăng giá trị thực mang lại cho thị trường, chuẩn hóa mô hình tạo doanh thu và biên lợi nhuận.',
    details: [
      'Hiểu rõ mình đang đổi thời gian, kỹ năng, hệ thống hay vốn để lấy thu nhập',
      'Gỡ nút thắt doanh thu có nhưng không thấy tiền mặt thực dương cuối kỳ',
      'Xây dựng uy tín nghề nghiệp và hệ thống khách hàng tái mua bền vững',
    ],
  },
  {
    id: 'dau-tu',
    number: 'TRỤ · 04',
    badge: 'Nhân trưởng tài sản',
    title: 'Quản trị vốn & Đầu tư',
    summary:
      'Chuyển dịch từ tâm lý đầu cơ nghe tin đồn sang tư duy tích sản và phân bổ vốn có tiêu chí, khẩu vị rủi ro và kịch bản rõ ràng.',
    details: [
      'Xác lập tiêu chí chọn tài sản trước khi xuống tiền, không FOMO theo sóng ngắn',
      'Quản trị tỷ trọng danh mục và dòng tiền nhàn rỗi theo từng chu kỳ kinh tế',
      'Giữ kỷ luật bảo toàn vốn là ưu tiên số 1 trước khi nghĩ đến lợi nhuận cao',
    ],
  },
];

export const ORBIT_NODES: OrbitNode[] = [
  {
    id: 'nhan-thuc',
    label: 'Tư duy & Nội lực',
    category: 'Phát triển bản thân',
    description: 'Nhìn rõ thói quen phản xạ với tiền bạc, áp lực công việc và những giới hạn tự đặt ra cho bản thân.',
    programSuggest: 'Tâm Thức Thịnh Vượng / Tinh Hoa Thịnh Vượng',
    angle: 0,
  },
  {
    id: 'dong-tien',
    label: 'Cấu trúc Dòng tiền',
    category: 'Tài chính',
    description: 'Nắm chính xác tiền vào từ đâu, rò rỉ ở đâu và tỷ lệ giữ lại thực tế mỗi tháng là bao nhiêu phần trăm.',
    programSuggest: 'Bình Dân Học Vụ Tài Chính',
    angle: 45,
  },
  {
    id: 'du-phong',
    label: 'Lá chắn Rủi ro',
    category: 'Tài chính',
    description: 'Xây dựng quỹ an toàn 6-12 tháng sinh hoạt phí để gia đình luôn vững vàng trước biến cố công việc hay sức khỏe.',
    programSuggest: 'Bình Dân Học Vụ Tài Chính',
    angle: 90,
  },
  {
    id: 'nang-tran',
    label: 'Nâng trần Thu nhập',
    category: 'Tạo giá trị',
    description: 'Thiết kế lại cơ cấu tạo giá trị để vượt qua ngưỡng thu nhập đi ngang suốt nhiều năm.',
    programSuggest: 'Bứt Phá Tài Chính',
    angle: 135,
  },
  {
    id: 'tach-dong-tien',
    label: 'Tách bạch Công - Tư',
    category: 'Kinh doanh',
    description: 'Chấm dứt tình trạng lấy tiền hàng trả tiền nhà, lấy tiền cá nhân bù lỗ vận hành khiến không biết lãi thật hay lỗ.',
    programSuggest: 'Bứt Phá Tài Chính / Đồng hành 1-1',
    angle: 180,
  },
  {
    id: 'tich-san',
    label: 'Kỷ luật Tích sản',
    category: 'Đầu tư',
    description: 'Biến thu nhập chủ động thành tài sản tích lũy đều đặn hàng tháng với quy trình 4 bước rõ ràng.',
    programSuggest: 'Cẩm nang Tích sản / Bứt Phá Tài Chính',
    angle: 225,
  },
  {
    id: 'phan-bo-von',
    label: 'Khung 5 lớp Quyết định Vốn',
    category: 'Đầu tư',
    description: 'Đánh giá mọi cơ hội đầu tư hay mở rộng kinh doanh qua 5 tầng lọc khắt khe trước khi giải ngân.',
    programSuggest: 'Tinh Hoa Thịnh Vượng',
    angle: 270,
  },
  {
    id: 'giu-nhip',
    label: 'Môi trường Giữ nhịp',
    category: 'Hệ sinh thái',
    description: 'Đi cùng người dẫn đường và cộng đồng học thật - làm thật để không bỏ cuộc giữa chừng.',
    programSuggest: 'LIVE Người Dẫn Đường & Tinh Hoa',
    angle: 315,
  },
];

export const ROLE_LENSES: RoleLens[] = [
  {
    id: 'lam-cong',
    name: 'Người làm chuyên môn / Làm công',
    subtitle: 'Đổi thời gian, chuyên môn và trách nhiệm lấy thu nhập định kỳ',
    valueFlow: 'Chuyên môn & Thời gian → Lương / Thưởng → Giữ lại tỷ lệ tích lũy → Tích sản tạo dòng tiền thứ 2',
    commonTraps: [
      'Thu nhập tăng theo thâm niên nhưng chi phí sinh hoạt cũng trượt theo tương ứng, cuối năm tài sản ròng dậm chân tại chỗ',
      'Chỉ phụ thuộc vào duy nhất một nguồn lương; khi ngành nghề biến động lập tức rơi vào thế bị động',
      'Có khoản tiết kiệm nhưng gửi ngân hàng thì sốt ruột, mang đi đầu tư theo lời rủ rê lại kẹt vốn vì thiếu kiến thức nền',
    ],
    firstStep: 'Soát lại tỷ lệ giữ tiền thực tế trong 6 tháng gần nhất và thiết lập hệ thống tự động tách phần tích sản ngay khi nhận lương.',
    recommendedProgramId: 'binh-dan-hoc-vu-tai-chinh',
    caseStudy: {
      person: 'Anh Minh (32 tuổi · Kỹ sư phần mềm tại Hà Nội)',
      roleDetail: 'Thu nhập 38 triệu/tháng nhưng sau 7 năm đi làm chỉ để dành được chưa tới 150 triệu',
      before: 'Chi tiêu cảm tính theo tâm trạng, đầu tư chứng khoán ngắn hạn theo hội nhóm và mất 40% vốn tích lũy.',
      shift: 'Hoàn thành 6 chặng Bình Dân Học Vụ Tài Chính, lập lại bảng phân bổ 3 tầng và quy tắc tích sản định kỳ.',
      after: 'Giữ lại đều đặn 35% thu nhập mỗi tháng, hoàn tất quỹ dự phòng 180 triệu sau 11 tháng và ngủ ngon trước biến động thị trường.',
    },
  },
  {
    id: 'tu-doanh',
    name: 'Người tự doanh / Freelancer / Chuyên gia độc lập',
    subtitle: 'Trực tiếp bán kỹ năng, uy tín cá nhân hoặc vận hành cửa hàng/dịch vụ nhỏ',
    valueFlow: 'Năng lực nghề & Uy tín → Doanh thu theo mùa vụ → Trừ chi phí trực tiếp → Thu nhập thực ròng → Quỹ bình ổn & Tích sản',
    commonTraps: [
      'Tháng kiếm 60-80 triệu tiêu xài rộng tay, tháng vắng khách còn 15 triệu lại phải rút tiết kiệm ra bù đắp',
      'Trộn lẫn toàn bộ tiền doanh thu của khách với tiền sinh hoạt gia đình trong cùng một tài khoản cá nhân',
      'Làm việc 12-14 tiếng/ngày, ráo mồ hôi là hết tiền vì chưa đóng gói được quy trình hoặc nâng đơn giá dịch vụ',
    ],
    firstStep: 'Mở ngay tài khoản tách biệt dòng tiền nghề nghiệp, tự trả cho mình một mức "lương cứng cố định" hàng tháng và lập quỹ bình ổn thu nhập.',
    recommendedProgramId: 'but-pha-tai-chinh',
    caseStudy: {
      person: 'Chị Lan (34 tuổi · Chủ tiệm dịch vụ chăm sóc sắc đẹp)',
      roleDetail: 'Doanh thu tiệm đều đặn 95–120 triệu/tháng nhưng luôn cảm thấy thiếu tiền mặt',
      before: 'Tiền khách chuyển khoản vào tài khoản cá nhân rồi rút ra đi chợ, đóng học phí cho con và nhập mỹ phẩm lẫn lộn.',
      shift: 'Thực hành bài tập tách dòng tiền tại Bứt Phá Tài Chính: định giá lại chi phí cốt lõi, khấu hao và lương chủ tiệm.',
      after: 'Phát hiện 3 nhóm chi phí rò rỉ 14 triệu/tháng, tách rõ quỹ vận hành tiệm và tích lũy ròng 22 triệu/tháng cho gia đình.',
    },
  },
  {
    id: 'chu-doanh-nghiep',
    name: 'Chủ doanh nghiệp nhỏ & vừa (SME)',
    subtitle: 'Tổ chức con người, hệ thống và nguồn vốn để tạo giá trị quy mô lớn hơn',
    valueFlow: 'Mô hình kinh doanh & Đội ngũ → Doanh thu → Biên lợi nhuận gộp → Dòng tiền hoạt động thuần (OCF) → Tái đầu tư / Cổ tức chủ DN',
    commonTraps: [
      'Báo cáo kế toán có lãi trên giấy nhưng tiền mặt luôn căng thẳng vì tồn kho và công nợ phải thu kéo dài',
      'Mở rộng chi nhánh hoặc nhập thêm hàng theo cảm hứng khi thấy thị trường đang ấm mà không tính điểm hòa vốn biên',
      'Toàn bộ tài sản gia đình bị đem đi thế chấp bảo lãnh cho khoản vay ngắn hạn của công ty, không có tường lửa bảo vệ gia đình',
    ],
    firstStep: 'Rà soát lại vòng quay tiền mặt (Cash Conversion Cycle), thiết lập tường lửa tài sản gia đình và áp dụng Khung 5 lớp trước mọi quyết định mở rộng.',
    recommendedProgramId: 'tinh-hoa-thinh-vuong',
    caseStudy: {
      person: 'Anh Hoàng (39 tuổi · Giám đốc công ty phân phối thiết bị)',
      roleDetail: 'Doanh thu 18 tỷ/năm, đội ngũ 22 nhân sự nhưng chủ doanh nghiệp mất ngủ mỗi kỳ đáo hạn ngân hàng',
      before: 'Dồn toàn bộ lợi nhuận giữ lại vào việc mở thêm kho mới và cho đại lý nợ gối đầu quá hạn mức.',
      shift: 'Đồng hành trong Tinh Hoa Thịnh Vượng, cắt giảm 2 dòng sản phẩm biên lợi nhuận âm và thiết lập quỹ dự trữ thanh khoản công ty.',
      after: 'Giảm 35% dư nợ vay ngắn hạn sau 2 quý, dòng tiền hoạt động dương đều đặn và trích lập quỹ tài sản riêng cho gia đình.',
    },
  },
  {
    id: 'nha-dau-tu',
    name: 'Người tích sản & Nhà đầu tư cá nhân',
    subtitle: 'Sử dụng vốn tích lũy để phân bổ vào các lớp tài sản sinh lời dài hạn',
    valueFlow: 'Dòng tiền thặng dư bền vững → Khung tiêu chí chọn tài sản → Phân bổ tỷ trọng & Quản trị rủi ro → Lãi kép qua các chu kỳ',
    commonTraps: [
      'Dùng tiền nóng hoặc tiền vay mượn ngắn hạn để mua tài sản dài hạn, dẫn đến phải bán cắt lỗ đúng đáy khi cần tiền gấp',
      'Mua cổ phiếu, bất động sản hay vàng dựa trên tin đồn mà không trả lời được: tạo dòng tiền không, thanh khoản thế nào, kịch bản xấu nhất chịu được bao lâu',
      'Danh mục lệch hẳn về một loại tài sản kém thanh khoản, khi có cơ hội tốt không còn tiền mặt để giải ngân',
    ],
    firstStep: 'Chấm điểm lại toàn bộ danh mục tài sản hiện có theo 3 trục: Thanh khoản – Dòng tiền – Tăng trưởng gốc, và viết ra bộ nguyên tắc mua/bán bằng văn bản.',
    recommendedProgramId: 'tinh-hoa-thinh-vuong',
    caseStudy: {
      person: 'Anh Tuấn & Chị Mai (Gia đình có 3,5 tỷ vốn tích lũy)',
      roleDetail: 'Từng kẹt vốn 2 năm ở đất nền vùng ven và danh mục cổ phiếu phân tán 14 mã',
      before: 'Ra quyết định dựa theo cảm xúc sợ bỏ lỡ (FOMO) và lời khuyên từ môi giới mà không gắn với kế hoạch tài chính 5-10 năm của gia đình.',
      shift: 'Làm việc qua Khung 5 lớp ra quyết định vốn tại Thịnh Vượng Số để tái cơ cấu danh mục theo mục tiêu đời sống thực.',
      after: 'Rút gọn về 3 lớp tài sản cốt lõi có dòng tiền nuôi nhau, tỷ suất sinh lời ổn định và hoàn toàn chủ động tâm thế.',
    },
  },
];

export const ROADMAP_STATIONS: RoadmapStation[] = [
  {
    tier: 'TẦNG 0',
    tag: 'Miễn phí · Làm quen',
    name: 'Cộng Đồng & LIVE Người Dẫn Đường',
    headline: 'Nghe đúng ngôn ngữ, soi chiếu lại thực trạng của chính mình',
    description:
      'Tham gia các buổi Zoom LIVE tối thứ Năm hàng tuần (20h30), đọc Chuyên san chuyên sâu và nhận Cẩm nang Tích sản để bắt đầu tháo gỡ những ngộ nhận phổ biến về tiền bạc.',
    programs: ['LIVE Người Dẫn Đường (20h30 Thứ 5)', 'Cẩm nang Tích sản từ đâu?', 'Chuyên san Thịnh Vượng Số'],
    targetAudience: 'Người mới biết đến ĐTV, muốn kiểm chứng triết lý và cách tiếp cận trước khi học sâu.',
    status: 'free',
    ctaLabel: 'Tham gia Cộng đồng & LIVE',
    ctaTarget: '#cong-dong',
    cx: 110,
    cy: 165,
  },
  {
    tier: 'TẦNG 1',
    tag: 'Xây nền · Cốt lõi',
    name: 'Bình Dân Học Vụ Tài Chính',
    headline: 'Xóa mù tài chính thực chất qua 6 chặng chuẩn hóa nền móng',
    description:
      'Chương trình nền tảng giúp bạn tự tay lập bức tranh thu – chi – nợ – tài sản, thiết lập lá chắn rủi ro và xây dựng kế hoạch tài chính cá nhân có thể vận hành suốt đời.',
    programs: ['Bình Dân Học Vụ Tài Chính (6 chặng thực hành)'],
    targetAudience: 'Mọi cá nhân và gia đình muốn làm rõ con số thật, chấm dứt cảnh kiếm được tiền nhưng không giữ được tiền.',
    status: 'core',
    ctaLabel: 'Xem khung 6 chặng nền tảng',
    ctaTarget: 'program:binh-dan-hoc-vu-tai-chinh',
    cx: 330,
    cy: 85,
  },
  {
    tier: 'TẦNG 2',
    tag: 'Chuyên đề · Đang mở đăng ký',
    name: 'Bứt Phá Tài Chính & Các Khóa Chuyên Đề',
    headline: 'Giải quyết dứt điểm từng nút thắt về thu nhập, dòng tiền và tâm thức',
    description:
      'Đi sâu vào bài toán cụ thể: thiết lập lại hệ tài chính thực chiến, nâng trần thu nhập và gỡ nút thắt dòng tiền trong 6 tuần học và làm bài tập trực tiếp qua Zoom.',
    programs: [
      'Bứt Phá Tài Chính (6 buổi CN · 06/12/2026 – 10/01/2027)',
      'Tâm Thức Thịnh Vượng',
      'Kiến Tạo Thịnh Vượng',
      'Mật Mã Thịnh Vượng',
      'Dòng Chảy Thịnh Vượng',
    ],
    targetAudience: 'Người đã có thu nhập hoặc đang tự doanh/kinh doanh nhưng bị kẹt trần thu nhập và rối dòng tiền.',
    status: 'open',
    ctaLabel: 'Xem chi tiết Bứt Phá Tài Chính',
    ctaTarget: 'program:but-pha-tai-chinh',
    cx: 600,
    cy: 155,
  },
  {
    tier: 'TẦNG 3',
    tag: 'Đồng hành 12 tháng · Chuyên sâu',
    name: 'Tinh Hoa Thịnh Vượng & Đồng Hành 1-1',
    headline: 'Rèn luyện năng lực làm chủ 4 hệ trong 12 tháng có người giữ nhịp',
    description:
      'Hành trình huấn luyện dài hạn mỗi tối Chủ nhật và Hội Quán Tinh Hoa offline, đi trọn 4 hệ: Hệ Chính mình, Hệ Tài chính, Hệ Tạo giá trị và Hệ Vốn & Tài sản.',
    programs: ['Tinh Hoa Thịnh Vượng (12 tháng)', 'Đồng hành 1-1 giải bài toán riêng'],
    targetAudience: 'Người làm chủ chuyên môn, tự doanh, chủ doanh nghiệp và nhà đầu tư cần môi trường rèn luyện kỷ luật dài hạn.',
    status: 'open',
    ctaLabel: 'Khám phá Tinh Hoa Thịnh Vượng',
    ctaTarget: 'program:tinh-hoa-thinh-vuong',
    cx: 870,
    cy: 75,
  },
  {
    tier: 'TẦNG 4',
    tag: 'Mở rộng · Có điều kiện',
    name: 'Liên Đoàn Thịnh Vượng',
    headline: 'Nhánh hợp tác kinh doanh & đầu tư dành cho thành viên đủ chuẩn',
    description:
      'Không gian kết nối nguồn lực, đồng kiến tạo dự án và hợp tác sâu giữa những học viên đã đi qua lộ trình nền tảng, chung hệ giá trị minh bạch và kỷ luật thực thi.',
    programs: ['Liên Đoàn Thịnh Vượng (Xét duyệt theo tiêu chí nội lực & uy tín)'],
    targetAudience: 'Học viên Tinh Hoa đã chuẩn hóa hệ thống tài chính và năng lực vận hành thực tế.',
    status: 'conditional',
    ctaLabel: 'Tìm hiểu tiêu chí Liên Đoàn',
    ctaTarget: '#dong-hanh',
    cx: 1090,
    cy: 135,
  },
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'but-pha-tai-chinh',
    slug: 'but-pha-tai-chinh',
    title: 'Bứt Phá Tài Chính',
    tier: 'tang-2',
    tierLabel: 'Tầng 2 · Học theo bài toán',
    status: 'open',
    statusLabel: 'Đang mở đăng ký',
    roles: ['lam-cong', 'tu-doanh', 'chu-doanh-nghiep', 'nha-dau-tu'],
    tagline: 'Nhìn đúng gốc – Thiết lập đúng hệ tài chính – Bứt phá có căn cứ trong 6 tuần.',
    description:
      'Chương trình huấn luyện thực chiến 6 buổi tối Chủ nhật trực tiếp qua Zoom cùng Mentor Trần Nam Hà. Không dạy mẹo làm giàu nhanh, mà giúp bạn mổ xẻ chính bức tranh thu nhập – dòng tiền hiện tại, vá các lỗ hổng rò rỉ và thiết kế lộ trình nâng trần thu nhập có căn cứ.',
    format: '6 buổi trực tuyến qua Zoom (20:00 – 22:30 Chủ nhật) + Thực hành trên Học viện số',
    schedule: 'Khai giảng: 06/12/2026 – 10/01/2027 (6 tuần liên tục)',
    priceInfo: {
      earlyBird: '4.800.000đ (Ưu đãi GĐ1)',
      phase2: '5.800.000đ (GĐ2)',
      standard: '6.800.000đ',
      note: 'Bao gồm toàn bộ biểu mẫu thực hành, bản ghi Zoom và tài khoản tại Khu Học Tập Thịnh Vượng Số (khuhoctap)',
    },
    previewUrl: 'https://butphataichinh.vn',
    externalUrl: 'https://butphataichinh.vn',
    previewImage: 'https://thinhvuongso.vn/anh/trang-ban-but-pha.webp',
    forWhom: [
      'Người đi làm nhiều năm có thu nhập khá nhưng cuối năm nhìn lại không thấy tài sản tích lũy tương xứng',
      'Người tự doanh, kinh doanh nhỏ có doanh thu nhưng tiền mặt luôn căng thẳng, lẫn lộn tiền công và tiền tư',
      'Người muốn nâng trần thu nhập và bắt đầu tích sản nhưng chưa có khung phân bổ và tiêu chí giữ tiền an toàn',
    ],
    notForWhom: [
      'Người đang tìm kiếm "kèo" phím hàng, mẹo lướt sóng hay công thức làm giàu nhanh không cần làm bài tập',
      'Người không sẵn sàng nhìn thẳng vào con số thu - chi - nợ thật của chính mình',
    ],
    stages: [
      {
        stageNumber: 'CHẶNG 1 · BUỔI 1–2',
        title: 'Nhìn đúng gốc vấn đề tài chính & thu nhập',
        focus: 'Bóc tách sự thật trên con số thực tế của từng học viên',
        outcomes: [
          'Kiểm toán toàn diện dòng tiền vào – ra và cấu trúc tài sản – nợ hiện tại',
          'Nhận diện 4 điểm nghẽn tâm thức và thói quen khiến tiền kiếm được cứ tự động trôi đi',
          'Tách bạch rạch ròi chi phí sinh hoạt cốt lõi, chi phí cảm xúc và dòng tiền công việc',
        ],
      },
      {
        stageNumber: 'CHẶNG 2 · BUỔI 3–4',
        title: 'Thiết lập đúng hệ tài chính & cơ chế giữ tiền',
        focus: 'Xây dựng hệ thống phân bổ tự động và tường lửa bảo vệ gia đình',
        outcomes: [
          'Thiết kế cấu trúc các quỹ tài chính phù hợp riêng với nhịp thu nhập cố định hoặc theo mùa vụ',
          'Xác lập lá chắn dự phòng rủi ro và nguyên tắc quản trị nợ lành mạnh',
          'Đóng gói quy trình kiểm soát dòng tiền chỉ mất 15 phút mỗi tuần',
        ],
      },
      {
        stageNumber: 'CHẶNG 3 · BUỔI 5–6',
        title: 'Bứt phá có căn cứ: Nâng trần thu nhập & Tích sản',
        focus: 'Mở rộng năng lực tạo giá trị và chuyển hóa dòng tiền dương thành tài sản',
        outcomes: [
          'Phân tích đòn bẩy nâng trần thu nhập theo đúng vai trò (Làm công, Tự doanh, Chủ DN)',
          'Áp dụng quy trình 4 bước Tích sản an toàn, tránh bẫy FOMO thị trường',
          'Hoàn thiện Bản kế hoạch hành động tài chính 12 tháng tiếp theo của cá nhân/gia đình',
        ],
      },
    ],
    deliverables: [
      '6 buổi học trực tiếp (2.5 giờ/buổi) & hỏi đáp tình huống thật qua Zoom',
      'Bộ công cụ & biểu mẫu kiểm toán tài chính cá nhân trên Học viện Thực hành',
      'Quyền truy cập bản ghi video và tài liệu ôn tập trọn khóa',
      'Phản hồi bài tập thực hành để đảm bảo làm ra bảng số thật của mình',
    ],
  },
  {
    id: 'tinh-hoa-thinh-vuong',
    slug: 'tinh-hoa-thinh-vuong',
    title: 'Tinh Hoa Thịnh Vượng',
    tier: 'tang-3',
    tierLabel: 'Tầng 3 · Đồng hành chuyên sâu 12 tháng',
    status: 'open',
    statusLabel: 'Đang mở đăng ký',
    roles: ['tu-doanh', 'chu-doanh-nghiep', 'nha-dau-tu', 'lam-cong'],
    tagline: 'Hệ huấn luyện và đồng hành 12 tháng: Rèn nội lực, chuẩn hóa 4 hệ và ra quyết định vốn có kỷ luật.',
    description:
      'Không phải một khóa học ngắn hạn nghe xong rồi quên. Tinh Hoa Thịnh Vượng là môi trường rèn luyện và giữ nhịp xuyên suốt 52 tuần dành cho những người muốn xây dựng sự thịnh vượng toàn diện và bền vững trên cả 4 hệ: Hệ Chính mình – Hệ Tài chính – Hệ Tạo giá trị – Hệ Vốn & Tài sản.',
    format: 'Huấn luyện trực tuyến 20:00 Chủ nhật hàng tuần + Hội Quán Tinh Hoa (Offline định kỳ) + Học viện Thực hành',
    schedule: 'Lộ trình đồng hành liên tục 12 tháng',
    priceInfo: {
      standard: 'Trao đổi trực tiếp để xét duyệt mức độ phù hợp trước khi tham gia',
      note: 'Cam kết đồng hành sâu, ưu tiên chất lượng chuyển hóa thực tế của từng thành viên',
    },
    previewUrl: 'https://tinhhoathinhvuong.vn',
    externalUrl: 'https://tinhhoathinhvuong.vn',
    previewImage: 'https://thinhvuongso.vn/anh/trang-ban-tinh-hoa.webp',
    forWhom: [
      'Người tự doanh, chủ doanh nghiệp nhỏ, quản lý cấp cao hoặc nhà đầu tư cá nhân cần một hệ quy chiếu chuẩn để ra quyết định',
      'Người đã học nhiều nơi nhưng thiếu môi trường kỷ luật và người dẫn đường giữ nhịp hàng tuần để làm tới cùng',
      'Người đứng trước các quyết định lớn về chuyển dịch nghề nghiệp, mở rộng kinh doanh hoặc cơ cấu lại danh mục vốn',
    ],
    stages: [
      {
        stageNumber: 'HỆ 01 · NỀN TẢNG',
        title: 'Hệ Chính mình (Tư duy, Phẩm chất & Nội lực)',
        focus: 'Làm chủ tâm thế trước áp lực, lòng tham và nỗi sợ',
        outcomes: [
          'Nhận diện mô thức ra quyết định cá nhân và tháo gỡ các xung đột nội tâm về tiền bạc – sự nghiệp',
          'Thiết lập kỷ luật sinh hoạt, học tập và phản tư định kỳ hàng tuần',
          'Xây dựng sự tĩnh tại để nhìn đúng bản chất vấn đề thay vì chạy theo ngọn',
        ],
      },
      {
        stageNumber: 'HỆ 02 · QUẢN TRỊ',
        title: 'Hệ Tài chính (Dòng tiền, Tường lửa & Cấu trúc)',
        focus: 'Kiểm soát tuyệt đối sức khỏe tài chính cá nhân, gia đình và công việc',
        outcomes: [
          'Vận hành hệ thống báo cáo dòng tiền và bảng cân đối tài sản ròng chuẩn mực theo quý',
          'Thiết lập tường lửa bảo vệ tài sản gia đình tách biệt khỏi rủi ro kinh doanh/đầu tư',
          'Tối ưu hóa tỷ lệ giữ tiền và dòng tiền tự do trước khi phân bổ vốn',
        ],
      },
      {
        stageNumber: 'HỆ 03 · TĂNG TRƯỞNG',
        title: 'Hệ Tạo giá trị (Chuyên môn, Mô hình kinh doanh & Hiệu suất)',
        focus: 'Tạo dòng tiền chủ động mạnh mẽ và bền vững từ giá trị thực',
        outcomes: [
          'Chuẩn hóa mô hình tạo doanh thu, định giá sản phẩm/dịch vụ và tối ưu biên lợi nhuận thực',
          'Giải bài toán vận hành, nhân sự và dòng tiền hoạt động cho người tự doanh / chủ DN',
          'Nâng cấp vị thế chuyên môn để tăng thu nhập trên mỗi đơn vị thời gian',
        ],
      },
      {
        stageNumber: 'HỆ 04 · NHÂN TRƯỞNG',
        title: 'Hệ Vốn & Tài sản (Khung 5 lớp ra quyết định vốn)',
        focus: 'Phân bổ vốn và tích sản dài hạn qua các chu kỳ kinh tế',
        outcomes: [
          'Ứng dụng Khung 5 lớp để thẩm định mọi cơ hội đầu tư hoặc mở rộng kinh doanh',
          'Xây dựng danh mục tài sản cân bằng giữa Thanh khoản – Dòng tiền – Tăng trưởng lãi kép',
          'Thực hành phân tích bối cảnh vĩ mô và chu kỳ tài sản cùng Mentor và cộng đồng Tinh Hoa',
        ],
      },
    ],
    deliverables: [
      'Các buổi huấn luyện chuyên sâu 20:00 Chủ nhật hàng tuần qua Zoom',
      'Đặc quyền tham dự các kỳ sinh hoạt offline tại Hội Quán Tinh Hoa',
      'Toàn quyền truy cập kho học liệu, bản ghi, bài tập và theo dõi tiến độ tại Học viện Thực hành',
      'Cơ hội xét duyệt tham gia Liên Đoàn Thịnh Vượng (Tầng 4)',
    ],
  },
  {
    id: 'binh-dan-hoc-vu-tai-chinh',
    slug: 'binh-dan-hoc-vu-tai-chinh',
    title: 'Bình Dân Học Vụ Tài Chính',
    tier: 'tang-1',
    tierLabel: 'Tầng 1 · Chương trình xây nền',
    status: 'self-paced',
    statusLabel: 'Học theo lộ trình 6 chặng',
    roles: ['lam-cong', 'tu-doanh', 'chu-doanh-nghiep', 'nha-dau-tu'],
    tagline: 'Lộ trình 6 chặng xóa mù tài chính thực chất: Nhìn rõ – Lập kế hoạch – Phòng rủi ro – Chọn hướng.',
    description:
      'Lấy cảm hứng từ tinh thần "Bình dân học vụ" · phổ cập năng lực căn bản nhất nhưng thiết yếu nhất cho mọi người Việt trưởng thành. Chương trình dẫn dắt bạn đi từng bước từ chỗ mơ hồ, ngại nhìn số liệu đến khi tự tay lập được bức tranh tài chính rõ ràng và kế hoạch tích lũy khả thi.',
    format: 'Học liệu cấu trúc 6 chặng + Bài tập thực hành trên con số thật',
    schedule: 'Bắt đầu ngay theo nhịp độ cá nhân kết hợp hỗ trợ từ ĐTV',
    priceInfo: {
      standard: 'Chương trình nền tảng cốt lõi của hệ sinh thái Thịnh Vượng Số',
      note: 'Bước khởi đầu bắt buộc cho người muốn xây móng tài chính vững chắc',
    },
    previewUrl: 'https://thinhvuongso.vn/chuong-trinh/binh-dan-hoc-vu-tai-chinh',
    externalUrl: 'https://thinhvuongso.vn/chuong-trinh/binh-dan-hoc-vu-tai-chinh',
    previewImage: 'https://thinhvuongso.vn/anh/trang-ban-binh-dan.webp',
    forWhom: [
      'Người chưa từng ghi chép hoặc từng ghi chép chi tiêu nhiều lần nhưng bỏ cuộc vì không biết đọc số để làm gì',
      'Gia đình trẻ muốn thống nhất cách quản lý thu nhập chung – riêng và chuẩn bị quỹ tương lai cho con cái',
      'Người đang có nợ tiêu dùng hoặc áp lực chi phí hàng tháng cần một lộ trình tháo gỡ từng bước',
    ],
    stages: [
      {
        stageNumber: 'CHẶNG 01',
        title: 'Nhìn rõ thực trạng tài chính hiện tại',
        focus: 'Đưa toàn bộ thu – chi – tài sản – nợ ra ánh sáng',
        outcomes: ['Hoàn thành bức tranh kiểm kê tài chính cá nhân đầu tiên trung thực 100%'],
      },
      {
        stageNumber: 'CHẶNG 02',
        title: 'Lập kế hoạch thu – chi thực tế',
        focus: 'Phân loại chi phí cốt lõi, chi phí linh hoạt và tỷ lệ giữ tiền',
        outcomes: ['Thiết lập ngân sách tháng sống thoải mái mà vẫn giữ được tiền đều đặn'],
      },
      {
        stageNumber: 'CHẶNG 03',
        title: 'Phòng ngừa rủi ro & Quỹ dự phòng',
        focus: 'Xây dựng lớp đệm an toàn trước biến cố',
        outcomes: ['Xác định đúng con số quỹ dự phòng 6–12 tháng và lộ trình lấp đầy quỹ'],
      },
      {
        stageNumber: 'CHẶNG 04',
        title: 'Chọn hướng tạo thu nhập & Tích lũy',
        focus: 'Hiểu đúng các kênh tích sản căn bản',
        outcomes: ['Phân biệt rõ tiết kiệm, bảo toàn, tích sản và đầu cơ rủi ro cao'],
      },
      {
        stageNumber: 'CHẶNG 05',
        title: 'Đặt mục tiêu tài chính có lộ trình',
        focus: 'Quy đổi ước mơ thành con số và thời hạn cụ thể',
        outcomes: ['Lập bảng kế hoạch 1 năm – 3 năm – 5 năm khả thi với thu nhập thật'],
      },
      {
        stageNumber: 'CHẶNG 06',
        title: 'Duy trì nhịp độ & Điều chỉnh định kỳ',
        focus: 'Biến quản lý tài chính thành thói quen nhẹ nhàng hàng tháng',
        outcomes: ['Thiết lập lịch rà soát 30 phút cuối mỗi tháng để không bao giờ trượt lại lối cũ'],
      },
    ],
    deliverables: [
      'Hệ thống bài giảng 6 chặng ngắn gọn, đi thẳng vào thực hành',
      'Bộ biểu mẫu kiểm kê và lập kế hoạch tài chính chuẩn ĐTV',
      'Hướng dẫn tự đánh giá và điều chỉnh định kỳ hàng tháng',
    ],
  },
  {
    id: 'live-nguoi-dan-duong',
    slug: 'live-nguoi-dan-duong',
    title: 'LIVE Người Dẫn Đường',
    tier: 'tang-0',
    tierLabel: 'Tầng 0 · Cộng đồng mở',
    status: 'free',
    statusLabel: 'Miễn phí · 20h30 Thứ Năm',
    roles: ['lam-cong', 'tu-doanh', 'chu-doanh-nghiep', 'nha-dau-tu'],
    tagline: 'Buổi trò chuyện và gỡ bài toán thực tế tối thứ Năm hàng tuần qua Zoom.',
    description:
      'Điểm chạm mở hàng tuần để bạn lắng nghe cách tiếp cận của Thịnh Vượng Số trước các chủ đề đời sống, công việc, quản lý tiền bạc và kinh doanh. Không bán hàng ồn ào, tập trung vào việc nhìn thẳng bản chất và trả lời câu hỏi thật của người tham dự.',
    format: 'Trực tuyến qua Zoom · 20h30 tối thứ Năm hàng tuần',
    schedule: 'Định kỳ tối thứ Năm hàng tuần',
    priceInfo: {
      standard: 'Miễn phí tham dự cho thành viên đăng ký trước',
    },
    forWhom: [
      'Người muốn tìm hiểu phong cách giảng dạy và triết lý của Mentor Trần Nam Hà trước khi đăng ký khóa học',
      'Học viên cũ muốn duy trì nhịp suy ngẫm và cập nhật góc nhìn mới mỗi tuần',
    ],
    stages: [
      {
        stageNumber: 'PHẦN 1',
        title: 'Chuyên đề trọng tâm trong tuần',
        focus: 'Mổ xẻ một góc nhìn sâu về Phát triển bản thân, Tài chính, Kinh doanh hoặc Đầu tư',
        outcomes: ['Nhận diện nguyên nhân gốc rễ của các vấn đề thường gặp trong tuần'],
      },
      {
        stageNumber: 'PHẦN 2',
        title: 'Hỏi đáp & Tháo gỡ tình huống thực tế',
        focus: 'Trực tiếp phân tích câu hỏi từ người tham dự trong phòng Zoom',
        outcomes: ['Có ngay gợi ý bước tiếp theo cụ thể cho tình huống của mình'],
      },
    ],
    deliverables: ['Link phòng Zoom tối thứ Năm hàng tuần', 'Bản tóm tắt ý chính sau buổi LIVE'],
  },
  {
    id: 'tam-thuc-thinh-vuong',
    slug: 'tam-thuc-thinh-vuong',
    title: 'Tâm Thức Thịnh Vượng',
    tier: 'tang-2',
    tierLabel: 'Tầng 2 · Chuyên đề gốc rễ',
    status: 'completed',
    statusLabel: 'Đã tổ chức · Học liệu trong Học viện',
    roles: ['lam-cong', 'tu-doanh', 'chu-doanh-nghiep', 'nha-dau-tu'],
    tagline: 'Chuyển hóa mối quan hệ nội tâm với tiền bạc, giá trị bản thân và sự đủ đầy.',
    description:
      'Khóa chuyên đề giúp người học soi chiếu lại những niềm tin giới hạn được hình thành từ gia đình và trải nghiệm quá khứ đang âm thầm kìm hãm năng lực đón nhận và giữ gìn sự thịnh vượng.',
    format: 'Chuyên đề huấn luyện & Bài tập phản tư sâu',
    stages: [
      {
        stageNumber: 'TRỌNG TÂM',
        title: 'Tháo gỡ xung đột nội tâm về tiền và thành công',
        focus: 'Làm lành và thiết lập lại hệ niềm tin đúng đắn, lành mạnh về sự thịnh vượng',
        outcomes: ['Bình an hơn khi ra quyết định tài chính, không còn tự phá hủy thành quả khi vừa kiếm được tiền'],
      },
    ],
    forWhom: ['Người nhận thấy mình lặp đi lặp lại một kịch bản mất tiền hoặc kiệt sức dù đã đổi nhiều công việc'],
    deliverables: ['Bản ghi chuyên đề & bộ câu hỏi phản tư tại Học viện Thực hành'],
  },
  {
    id: 'kien-tao-thinh-vuong',
    slug: 'kien-tao-thinh-vuong',
    title: 'Kiến Tạo Thịnh Vượng (K1 & K2)',
    tier: 'tang-2',
    tierLabel: 'Tầng 2 · Chuyên đề nền tảng',
    status: 'completed',
    statusLabel: 'Đã tổ chức (2 khóa)',
    roles: ['lam-cong', 'tu-doanh', 'chu-doanh-nghiep'],
    tagline: 'Thiết kế lộ trình xây dựng cuộc sống và sự nghiệp thịnh vượng có cấu trúc.',
    description:
      'Chương trình tiền đề đã tổ chức thành công qua 2 khóa K1 và K2, đặt nền móng cho phương pháp tiếp cận kết hợp giữa phát triển con người và quản trị tài chính thực tế.',
    format: 'Khóa học trực tuyến qua Zoom & Bài tập ứng dụng',
    stages: [
      {
        stageNumber: 'TRỌNG TÂM',
        title: 'Xác lập la bàn đời sống và cấu trúc tài chính căn bản',
        focus: 'Kết nối mục tiêu cuộc đời với các con số tài chính cụ thể',
        outcomes: ['Có bản đồ tổng thể để không đi lạc hướng giữa việc kiếm tiền và chất lượng sống'],
      },
    ],
    forWhom: ['Học viên các khóa nền tảng muốn ôn tập hệ thống tại Cổng Học Viên'],
    deliverables: ['Tài liệu lưu trữ dành cho học viên hệ sinh thái ĐTV'],
  },
  {
    id: 'mat-ma-thinh-vuong',
    slug: 'mat-ma-thinh-vuong',
    title: 'Mật Mã Thịnh Vượng',
    tier: 'tang-2',
    tierLabel: 'Tầng 2 · Chuyên đề giải mã',
    status: 'completed',
    statusLabel: 'Đã tổ chức',
    roles: ['lam-cong', 'tu-doanh', 'nha-dau-tu'],
    tagline: 'Giải mã các quy luật vận hành của giá trị, sự trao đổi và tích lũy tài sản.',
    description:
      'Chuyên đề bóc tách quy luật nguyên nhân – kết quả đằng sau việc tạo ra thu nhập bền vững và giữ được thành quả qua thời gian.',
    format: 'Chuyên đề chuyên sâu',
    stages: [
      {
        stageNumber: 'TRỌNG TÂM',
        title: 'Hiểu đúng quy luật Giá trị – Thu nhập – Tài sản',
        focus: 'Tránh các cái bẫy kiếm tiền ngắn hạn làm tổn hại uy tín và vốn gốc',
        outcomes: ['Nắm vững nguyên tắc tạo giá trị thực trước khi kỳ vọng phần thưởng tài chính'],
      },
    ],
    forWhom: ['Người muốn hiểu sâu bản chất vận hành của tiền bạc dưới góc nhìn triết lý và thực tiễn'],
    deliverables: ['Bản ghi & tài liệu tổng hợp trên hệ thống Học viện'],
  },
  {
    id: 'dong-chay-thinh-vuong',
    slug: 'dong-chay-thinh-vuong',
    title: 'Dòng Chảy Thịnh Vượng',
    tier: 'tang-2',
    tierLabel: 'Tầng 2 · Chuyên đề dòng tiền',
    status: 'completed',
    statusLabel: 'Đã tổ chức',
    roles: ['tu-doanh', 'chu-doanh-nghiep', 'nha-dau-tu'],
    tagline: 'Khơi thông các điểm tắc nghẽn trong dòng chảy thu nhập, chi tiêu và luân chuyển vốn.',
    description:
      'Chuyên đề tập trung vào tính thanh khoản, nhịp điệu luân chuyển của tiền trong công việc kinh doanh và đời sống gia đình.',
    format: 'Chuyên đề thực hành',
    stages: [
      {
        stageNumber: 'TRỌNG TÂM',
        title: 'Quản trị nhịp điệu và tốc độ luân chuyển dòng tiền',
        focus: 'Giữ cho dòng tiền luôn thông suốt, không bị đọng vốn chết',
        outcomes: ['Biết cách cân đối giữa dòng tiền ngắn hạn nuôi sống và dòng vốn dài hạn sinh lời'],
      },
    ],
    forWhom: ['Người tự doanh và nhà đầu tư cần tối ưu hiệu suất luân chuyển vốn'],
    deliverables: ['Học liệu và bài tập tình huống tại Học viện Thực hành'],
  },
];

export const ACADEMY_SCREENS: AcademyScreen[] = [
  {
    id: 'ban-ghi-zoom',
    step: '01 · Xem lại bất cứ lúc nào',
    title: 'Thư viện Bản ghi Zoom phân mục rõ ràng',
    subtitle: 'Không sợ bỏ lỡ buổi học hay quên kiến thức quan trọng',
    description:
      'Toàn bộ các buổi học trực tiếp đều được biên tập, chia theo từng chặng và chủ đề cụ thể trên Khu Học Tập Thịnh Vượng Số để học viên dễ dàng nghe lại đúng phần mình đang vướng.',
    image: 'https://thinhvuongso.vn/anh/hv-ban-ghi-zoom.webp',
    highlights: ['Phân loại theo từng buổi & từng chặng', 'Tốc độ phát mượt mà trên cả điện thoại và máy tính', 'Kèm tóm tắt nội dung trọng tâm của từng buổi'],
  },
  {
    id: 'tai-nguyen',
    step: '02 · Hệ thống hóa công cụ',
    title: 'Kho Tài nguyên & Biểu mẫu chuẩn hóa',
    subtitle: 'Sẵn sàng áp dụng ngay vào con số của cá nhân và gia đình',
    description:
      'Cung cấp đầy đủ các bảng tính dòng tiền, khung kiểm kê tài sản, mẫu lập kế hoạch 6 chặng và tài liệu đọc thêm được thiết kế tối giản, dễ điền và dễ theo dõi.',
    image: 'https://thinhvuongso.vn/anh/hv-tai-nguyen.webp',
    highlights: ['Biểu mẫu thu - chi - nợ - tài sản thực tế', 'Tài liệu hướng dẫn từng bước rõ ràng', 'Cập nhật liên tục theo các chương trình mới'],
  },
  {
    id: 'bai-thuc-hanh',
    step: '03 · Học đi đôi với làm thật',
    title: 'Bài thực hành gắn với bài toán cá nhân',
    subtitle: 'Không kiểm tra lý thuyết suông · làm trực tiếp trên tình huống thật',
    description:
      'Sau mỗi chặng học, bạn thực hiện bài tập ứng dụng ngay trên dữ liệu thu nhập, chi phí và mục tiêu của chính mình để tạo ra kết quả hữu hình ngay trong khóa học.',
    image: 'https://thinhvuongso.vn/anh/hv-bai-thuc-hanh.webp',
    highlights: ['Câu hỏi gợi mở giúp nhìn thẳng vào điểm nghẽn', 'Lưu trữ lịch sử bài làm qua từng giai đoạn', 'Nhận phản hồi để hiệu chỉnh kịp thời'],
  },
  {
    id: 'tong-quan-tien-do',
    step: '04 · Giữ nhịp rèn luyện dài hạn',
    title: 'Bảng theo dõi Tiến độ học tập trực quan',
    subtitle: 'Biết rõ mình đã đi tới đâu và việc tiếp theo cần hoàn thành là gì',
    description:
      'Hệ thống theo dõi tỷ lệ hoàn thành bài học, số buổi đã tham gia và các mốc thực hành giúp bạn duy trì kỷ luật cá nhân xuyên suốt nhiều tháng.',
    image: 'https://thinhvuongso.vn/anh/hv-tong-quan-tien-do.webp',
    highlights: ['Hiển thị rõ tỷ lệ hoàn thành từng học phần', 'Nhắc việc thông minh cho chặng tiếp theo', 'Đồng bộ xuyên suốt lộ trình từ Tầng 1 đến Tầng 3'],
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: 'BƯỚC 01',
    title: 'Nhìn rõ (Đưa sự thật ra ánh sáng)',
    subtitle: 'Không phán xét, không tô hồng · đặt toàn bộ con số thật lên bàn',
    description:
      'Hầu hết mọi người bất an về tài chính không phải vì bài toán không có lời giải, mà vì họ ngại nhìn thẳng vào con số thực tế. Bước đầu tiên tại ĐTV luôn là kiểm kê trung thực dòng tiền vào – ra, tài sản thực và các khoản nghĩa vụ.',
    lanExample: {
      label: 'Tình huống thật · Chị Lan (Chủ tiệm dịch vụ)',
      detail: 'Tiệm thu 105 triệu/tháng nhưng cuối tháng tài khoản cá nhân chỉ còn dưới 4 triệu vì toàn bộ tiền thu của khách và tiền đi chợ gia đình nằm chung một chỗ.',
      metric: '105tr doanh thu → 0đ tích lũy rõ ràng',
    },
  },
  {
    number: 'BƯỚC 02',
    title: 'Hiểu gốc (Bóc tách nguyên nhân cốt lõi)',
    subtitle: 'Phân biệt triệu chứng bề mặt và nguyên nhân gốc rễ bên dưới',
    description:
      'Thiếu tiền mặt chỉ là triệu chứng. Nguyên nhân gốc có thể nằm ở việc định giá sai dịch vụ, chi tiêu bù đắp cảm xúc sau giờ làm căng thẳng, hoặc dùng nguồn vốn ngắn hạn tài trợ cho tài sản dài hạn.',
    lanExample: {
      label: 'Phát hiện nút thắt gốc của Chị Lan',
      detail: 'Khi bóc tách 90 ngày sao kê, chị Lan nhận ra 3 khoản chi "vô hình" ngốn 14,5 triệu/tháng và 2 gói dịch vụ đang làm lỗ công vì chưa tính khấu hao mặt bằng, thiết bị.',
      metric: 'Phát hiện 14,5tr/tháng rò rỉ vô hình',
    },
  },
  {
    number: 'BƯỚC 03',
    title: 'Làm thật (Thiết lập hệ thống & hành động nhỏ)',
    subtitle: 'Thay đổi cấu trúc vận hành ngay trong tuần, bắt đầu từ việc làm được ngay',
    description:
      'Không lập những bản kế hoạch phức tạp để cất vào ngăn kéo. Bạn bắt tay vào việc tách tài khoản, thiết lập tỷ lệ trích lập tự động, điều chỉnh bảng giá hoặc đóng lại các khoản chi không tạo giá trị.',
    lanExample: {
      label: 'Hành động thực thi ngay trong tuần thứ 3',
      detail: 'Mở riêng tài khoản vận hành tiệm, cố định mức lương chủ tiệm 25 triệu/tháng chuyển về gia đình vào ngày mùng 5, và trích tự động 20% vào quỹ tích sản.',
      metric: 'Tách 2 tài khoản · Giữ ròng 22tr/tháng',
    },
  },
  {
    number: 'BƯỚC 04',
    title: 'Quay lại (Soi chiếu, giữ nhịp & nâng tầng)',
    subtitle: 'Định kỳ rà soát kết quả thực tế để tinh chỉnh và tiến lên nấc cao hơn',
    description:
      'Đời sống và công việc luôn biến động. Mỗi tháng và mỗi quý, học viên quay lại đối chiếu bảng số thực tế tại Học viện Thực hành và các buổi giữ nhịp Chủ nhật để không trượt về thói quen cũ.',
    lanExample: {
      label: 'Kết quả sau 2 quý giữ nhịp đều đặn',
      detail: 'Hoàn tất quỹ dự phòng 150 triệu cho gia đình, biết chính xác biên lợi nhuận ròng của tiệm mỗi tháng đạt 24% và bắt đầu tích sản có kỷ luật.',
      metric: 'Quỹ dự phòng 150tr · Biên lãi ròng 24%',
    },
  },
];

export const FIVE_DECISION_LAYERS = [
  {
    layer: 'Lớp 1 · Mục tiêu & Vai trò của khoản tiền',
    question: 'Khoản tiền này là tiền dự phòng thanh khoản, tiền nuôi sống gia đình hay tiền nhàn rỗi dài hạn 3–5 năm?',
  },
  {
    layer: 'Lớp 2 · Năng lực hiểu biết thực chất',
    question: 'Mình có thực sự hiểu cơ chế tạo ra tiền của kênh/dự án này không, hay chỉ nghe người khác kể lại?',
  },
  {
    layer: 'Lớp 3 · Dòng tiền & Tính thanh khoản',
    question: 'Tài sản này có tự tạo ra dòng tiền không? Khi cần rút vốn trong 30 ngày thì bán cho ai, chiết khấu bao nhiêu?',
  },
  {
    layer: 'Lớp 4 · Kịch bản xấu nhất (Stress Test)',
    question: 'Nếu doanh thu giảm 50% hoặc tài sản đóng băng 24 tháng, cuộc sống gia đình có bị ảnh hưởng không?',
  },
  {
    layer: 'Lớp 5 · Tỷ trọng phân bổ & Điểm dừng',
    question: 'Khoản này chiếm tối đa bao nhiêu % tổng tài sản ròng? Khi nào thì gia tăng, khi nào thì buộc phải dừng?',
  },
];

export const CHUYEN_SAN_ARTICLES: ChuyenSanArticle[] = [
  {
    id: 'vi-sao-kiem-duoc-tien-van-lo',
    category: 'Tài chính cá nhân · Góc nhìn gốc',
    readTime: '7 phút đọc',
    title: 'Vì sao nhiều người thu nhập tăng gấp đôi nhưng nỗi bất an tài chính vẫn giữ nguyên?',
    excerpt:
      'Khi thu nhập tăng từ 15 triệu lên 40-50 triệu/tháng mà không có một cấu trúc giữ tiền và phân tầng tài sản, mức sống sẽ tự động nở ra lấp đầy phần chênh lệch đó.',
    keyTakeaway: 'Năng lực giữ tiền và phân bổ dòng tiền quan trọng không kém năng lực kiếm tiền.',
    url: 'chuyensan',
  },
  {
    id: 'tach-dong-tien-tu-doanh',
    category: 'Kinh doanh & Tự doanh',
    readTime: '9 phút đọc',
    title: 'Sai lầm lớn nhất của người tự doanh: Coi toàn bộ tiền trong két là tiền của mình',
    excerpt:
      'Trộn lẫn doanh thu bán hàng với chi tiêu gia đình khiến người làm chủ vừa ảo tưởng khi tiền về nhiều, vừa hoảng loạn khi đến kỳ nhập hàng và trả lương nhân sự.',
    keyTakeaway: 'Hãy trả lương cố định cho chính mình trước khi tính lợi nhuận của cửa hàng hay doanh nghiệp.',
    url: 'chuyensan',
  },
  {
    id: 'tich-san-khac-dau-co',
    category: 'Quản trị vốn & Đầu tư',
    readTime: '8 phút đọc',
    title: 'Tích sản từ đâu khi số vốn ban đầu chưa lớn và bạn không có thời gian bám bảng điện?',
    excerpt:
      'Tích sản không bắt đầu từ lúc bạn có hàng tỷ đồng, mà bắt đầu từ thói quen chuyển hóa đều đặn một phần thu nhập chủ động thành tài sản thực có giá trị tích lũy.',
    keyTakeaway: 'Kỷ luật đều đặn và bảo toàn vốn gốc luôn thắng sự nôn nóng tìm kiếm lợi nhuận đột biến.',
    url: 'chuyensan',
  },
];

export const COMMUNITY_PHOTOS_ROW_1: CommunityPhoto[] = [
  {
    src: 'https://thinhvuongso.vn/anh/c04-hoi-truong.webp',
    caption: 'Không gian học tập và đối thoại sâu tại hội trường Thịnh Vượng Số',
    tag: 'Hội trường ĐTV',
  },
  {
    src: 'https://thinhvuongso.vn/anh/c10-gio-tay.webp',
    caption: 'Học viên trực tiếp đặt câu hỏi và mổ xẻ bài toán thực tế',
    tag: 'Thảo luận trực tiếp',
  },
  {
    src: 'https://thinhvuongso.vn/anh/c01-ban-dai.webp',
    caption: 'Bàn tròn thảo luận chuyên sâu tại Hội Quán Tinh Hoa',
    tag: 'Hội Quán Tinh Hoa',
  },
  {
    src: 'https://thinhvuongso.vn/anh/c05-nam-mic.webp',
    caption: 'Mentor Trần Nam Hà phân tích từng tình huống tài chính & kinh doanh',
    tag: 'Mentor Trần Nam Hà',
  },
];

export const COMMUNITY_PHOTOS_ROW_2: CommunityPhoto[] = [
  {
    src: 'https://thinhvuongso.vn/anh/c06-ket-noi.webp',
    caption: 'Kết nối chân thành giữa những người cùng chung hệ giá trị học thật – làm thật',
    tag: 'Kết nối học viên',
  },
  {
    src: 'https://thinhvuongso.vn/anh/c08-cau-hoi.webp',
    caption: 'Mỗi câu hỏi của một người là bài học soi chiếu cho cả cộng đồng',
    tag: 'Gỡ nút thắt thật',
  },
  {
    src: 'https://thinhvuongso.vn/anh/c09-vong-tron.webp',
    caption: 'Vòng tròn chia sẻ và giữ nhịp rèn luyện xuyên suốt 12 tháng',
    tag: 'Giữ nhịp dài hạn',
  },
  {
    src: 'https://thinhvuongso.vn/anh/c02-hoc-vien-cafe.webp',
    caption: 'Những buổi gặp gỡ ấm cúng tháo gỡ từng bảng số cá nhân và doanh nghiệp',
    tag: 'Đồng hành sâu',
  },
];

// Authentic 3-Question Quiz Data & Recommendation Engine (matching #du-lieu-test & trang-chu.js)
export interface QuizOption {
  id: string;
  label: string;
  sublabel: string;
}

export const QUIZ_ROLES: QuizOption[] = [
  {
    id: 'lam-cong',
    label: 'Đi làm hưởng lương / Chuyên môn',
    sublabel: 'Thu nhập chính từ lương, thưởng hoặc phụ cấp theo tháng',
  },
  {
    id: 'tu-doanh',
    label: 'Tự doanh / Freelancer / Cửa hàng nhỏ',
    sublabel: 'Tự làm chủ công việc, doanh thu theo khách hàng hoặc mùa vụ',
  },
  {
    id: 'chu-doanh-nghiep',
    label: 'Chủ doanh nghiệp nhỏ & vừa',
    sublabel: 'Vận hành đội ngũ, quản lý doanh thu – chi phí – dòng vốn công ty',
  },
  {
    id: 'nha-dau-tu',
    label: 'Đang có vốn tích lũy / Nhà đầu tư cá nhân',
    sublabel: 'Quan tâm đến việc bảo toàn và phân bổ vốn vào các lớp tài sản',
  },
];

export const QUIZ_NEEDS: QuizOption[] = [
  {
    id: 'bat-dau-nguon-thu',
    label: 'Chưa giữ được tiền, cuối tháng thường hết sạch',
    sublabel: 'Muốn xây nền móng quản lý thu – chi và lập quỹ dự phòng từ đầu',
  },
  {
    id: 'sap-xep-tai-chinh',
    label: 'Tiền bạc đang rối, công – tư lẫn lộn',
    sublabel: 'Có thu nhập nhưng không rõ dòng tiền đi đâu, chưa có hệ thống phân bổ',
  },
  {
    id: 'phat-trien-thu-nhap',
    label: 'Đang chạm trần thu nhập, muốn bứt phá',
    sublabel: 'Thu nhập đi ngang nhiều năm, muốn nâng trần tạo giá trị và tích sản',
  },
  {
    id: 'van-hanh-kinh-doanh',
    label: 'Có doanh thu nhưng thiếu tiền mặt thực dương',
    sublabel: 'Đau đầu vì chi phí vận hành, tồn kho, công nợ và biên lợi nhuận mỏng',
  },
  {
    id: 'quyet-dinh-von',
    label: 'Đang giữ khoản vốn nhưng sợ phân bổ sai chỗ',
    sublabel: 'Cần khung tiêu chí rõ ràng trước khi đầu tư hoặc mở rộng kinh doanh',
  },
  {
    id: 'can-dong-hanh',
    label: 'Biết lý thuyết nhưng hay bỏ dở, cần người giữ nhịp',
    sublabel: 'Muốn có lộ trình dài hạn và môi trường rèn luyện kỷ luật hàng tuần',
  },
];

export const QUIZ_PACES: QuizOption[] = [
  {
    id: 'tu_hoc',
    label: 'Bắt đầu từng bước, tự học có hướng dẫn',
    sublabel: 'Ưu tiên xây nền tảng căn bản, nhẹ nhàng và dễ áp dụng ngay',
  },
  {
    id: 'chuyen_de',
    label: 'Học tập trung 6 tuần để giải quyết dứt điểm nút thắt',
    sublabel: 'Sẵn sàng học trực tiếp tối Chủ nhật và làm bài tập trên số thật',
  },
  {
    id: 'dai_han',
    label: 'Đồng hành sâu 12 tháng hoặc trao đổi 1-1',
    sublabel: 'Muốn đi đường dài, chuẩn hóa toàn diện cả 4 hệ cùng Mentor',
  },
];

export interface QuizRecommendation {
  primaryProgramId: string;
  secondaryProgramId: string;
  badge: string;
  headline: string;
  summary: string;
  clarifyFirst: string;
  actionThisWeek: string;
  previewDomain: string;
  previewImage: string;
}

export function getQuizRecommendation(
  role: string,
  need: string,
  pace: string
): QuizRecommendation {
  // Exact mapping logic inspired by trang-chu.js ketQua()
  if (
    pace === 'dai_han' ||
    need === 'can-dong-hanh' ||
    need === 'quyet-dinh-von' ||
    (role === 'chu-doanh-nghiep' && need === 'van-hanh-kinh-doanh')
  ) {
    return {
      primaryProgramId: 'tinh-hoa-thinh-vuong',
      secondaryProgramId: 'but-pha-tai-chinh',
      badge: 'Gợi ý phù hợp nhất · Tầng 3 Chuyên sâu',
      headline: 'Tinh Hoa Thịnh Vượng (Đồng hành 12 tháng) & Trao đổi 1-1',
      summary:
        'Bài toán của bạn không nằm ở thiếu kiến thức lẻ tẻ, mà cần một hệ quy chiếu chuẩn mực (Khung 5 lớp ra quyết định) và một môi trường giữ nhịp hàng tuần để chuẩn hóa đồng bộ từ Chính mình, Tài chính, Tạo giá trị đến Quản trị vốn.',
      clarifyFirst:
        'Bóc tách bức tranh tổng thể giữa tài sản gia đình (tường lửa an toàn) và dòng vốn đang vận hành trong công việc/đầu tư để xác định đúng điểm nghẽn ưu tiên.',
      actionThisWeek:
        'Liệt kê toàn bộ các tài sản, khoản đầu tư và nguồn thu hiện có ra một trang giấy; đánh dấu rõ khoản nào đang tạo dòng tiền dương, khoản nào đang ngốn thêm tiền mặt.',
      previewDomain: 'tinhhoathinhvuong.vn',
      previewImage: 'https://thinhvuongso.vn/anh/trang-ban-tinh-hoa.webp',
    };
  }

  if (
    pace === 'chuyen_de' ||
    need === 'phat-trien-thu-nhap' ||
    need === 'sap-xep-tai-chinh' ||
    need === 'van-hanh-kinh-doanh'
  ) {
    return {
      primaryProgramId: 'but-pha-tai-chinh',
      secondaryProgramId: 'binh-dan-hoc-vu-tai-chinh',
      badge: 'Đang mở đăng ký · Tầng 2 Thực chiến',
      headline: 'Bứt Phá Tài Chính (Lộ trình 6 tuần trực tiếp qua Zoom)',
      summary:
        'Bạn đã có dòng thu nhập nhưng đang gặp nút thắt ở khâu cấu trúc hệ thống giữ tiền, tách bạch dòng tiền công – tư và tìm đòn bẩy nâng trần thu nhập. 6 tuần làm việc trực tiếp trên con số thật sẽ giúp bạn xoay chuyển cục diện nhanh nhất.',
      clarifyFirst:
        'Làm rõ tỷ lệ giữ tiền ròng thực tế sau khi trừ toàn bộ chi phí ẩn, đồng thời tách hoàn toàn túi tiền cá nhân khỏi túi tiền công việc.',
      actionThisWeek:
        'Xuất sao kê 90 ngày gần nhất, phân vào 3 nhóm: (1) Chi phí sống thiết yếu, (2) Chi phí tạo ra thu nhập, và (3) Chi phí cảm xúc có thể cắt giảm ngay 20%.',
      previewDomain: 'butphataichinh.vn',
      previewImage: 'https://thinhvuongso.vn/anh/trang-ban-but-pha.webp',
    };
  }

  return {
    primaryProgramId: 'binh-dan-hoc-vu-tai-chinh',
    secondaryProgramId: 'live-nguoi-dan-duong',
    badge: 'Khởi đầu vững chắc · Tầng 1 Xây nền',
    headline: 'Bình Dân Học Vụ Tài Chính (6 chặng chuẩn hóa nền tảng)',
    summary:
      'Trước khi nghĩ đến các công cụ đầu tư hay mở rộng phức tạp, bước đi khôn ngoan nhất lúc này là xây dựng một nền móng tài chính cá nhân rõ ràng: nắm chắc thu – chi, lập quỹ dự phòng rủi ro và rèn thói quen giữ tiền kỷ luật.',
    clarifyFirst:
        'Nhìn rõ bức tranh thu – chi – nợ hiện tại không né tránh, và xác định con số chi phí sinh hoạt tối thiểu 1 tháng của bản thân/gia đình.',
    actionThisWeek:
      'Mở một tài khoản hoặc hũ tích lũy riêng biệt mang tên "Quỹ Dự Phòng An Toàn" và chuyển ngay 10% khoản thu gần nhất vào đó trước khi chi tiêu bất cứ việc gì.',
    previewDomain: 'thinhvuongso.vn/chuong-trinh/binh-dan-hoc-vu-tai-chinh',
    previewImage: 'https://thinhvuongso.vn/anh/trang-ban-binh-dan.webp',
  };
}
