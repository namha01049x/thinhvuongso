import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  consultationSchema,
  ConsultationFormValues,
  handbookSchema,
  HandbookFormValues,
} from '../schemas/leadSchema';
import {
  Send,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  BookOpen,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

const WORKING_PROCESS = [
  {
    step: '01',
    title: 'Gửi thông tin & Bài toán hiện tại',
    desc: 'Bạn điền ngắn gọn vai trò và tình huống đang vướng vào biểu mẫu bên cạnh.',
  },
  {
    step: '02',
    title: 'Đội ngũ ĐTV liên hệ qua Zalo trong 24h',
    desc: 'Xác nhận lịch hẹn trao đổi và gửi trước bộ câu hỏi chuẩn bị số liệu cơ bản.',
  },
  {
    step: '03',
    title: 'Phiên làm việc 1-1 bóc tách gốc vấn đề',
    desc: 'Đi thẳng vào cấu trúc dòng tiền, công việc hoặc danh mục vốn của bạn.',
  },
  {
    step: '04',
    title: 'Đề xuất lộ trình hành động rõ ràng',
    desc: 'Chỉ tham gia chương trình hoặc đồng hành dài hạn khi thực sự phù hợp.',
  },
];

export const ConsultationForm: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<ConsultationFormValues | null>(
    null
  );
  const [handbookSuccess, setHandbookSuccess] = useState<HandbookFormValues | null>(
    null
  );

  // Main Consultation & 1-1 Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      contactChannel: 'Zalo',
      role: 'tu-doanh',
      inquiryType: 'lo-trinh',
      problemStatement: '',
    },
  });

  // Free Handbook Lead Magnet Form
  const {
    register: registerHandbook,
    handleSubmit: handleSubmitHandbook,
    formState: { errors: handbookErrors, isSubmitting: isSubmittingHandbook },
    reset: resetHandbook,
  } = useForm<HandbookFormValues>({
    resolver: zodResolver(handbookSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
    },
  });

  const currentInquiryType = watch('inquiryType');

  const onSubmitConsultation = async (data: ConsultationFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmittedData(data);
  };

  const onSubmitHandbook = async (data: HandbookFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setHandbookSuccess(data);
  };

  return (
    <section
      id="dong-hanh"
      className="py-20 lg:py-28 bg-abyssal border-b border-kem/10 relative"
    >
      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 cols: Context, Process & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="nhan">
                <span>Đăng ký tư vấn lộ trình & Đồng hành 1-1</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-kem leading-tight">
                Có bài toán riêng cần tháo gỡ?{' '}
                <em className="font-serif italic text-cam font-semibold">
                  Hãy trò chuyện trực tiếp.
                </em>
              </h2>
              <p className="text-yen text-sm sm:text-base leading-relaxed">
                Dù bạn muốn tìm hiểu xem chương trình nào phù hợp nhất với mình, đăng ký
                sớm khóa <strong className="text-kem">Bứt Phá Tài Chính</strong>, ứng tuyển{' '}
                <strong className="text-kem">Tinh Hoa Thịnh Vượng 12 tháng</strong> hay đặt
                lịch <strong className="text-kem">Đồng hành 1-1</strong> giải quyết bài toán
                doanh nghiệp/tài sản riêng · hãy để lại thông tin tại đây.
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-cam block">
                Quy trình tiếp nhận & làm việc 4 bước:
              </span>
              <div className="space-y-3">
                {WORKING_PROCESS.map((item) => (
                  <div
                    key={item.step}
                    className="p-4 rounded bg-nen-sau/90 border border-kem/10 flex items-start gap-3.5"
                  >
                    <span className="font-mono text-xs font-bold text-abyssal bg-cam px-2 py-0.5 rounded shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-kem">{item.title}</h3>
                      <p className="text-xs text-yen mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Zalo / Hotline Box */}
            <div className="p-5 rounded bg-xanh/40 border border-cam/35 space-y-3">
              <div className="flex items-center gap-2 text-cam font-mono text-xs uppercase">
                <PhoneCall className="w-4 h-4" />
                <span>Kênh hỗ trợ trực tiếp nhanh nhất</span>
              </div>
              <p className="text-xs sm:text-sm text-kem leading-relaxed">
                Nếu bạn cần trao đổi gấp về lịch học hoặc thủ tục đăng ký, có thể nhắn trực
                tiếp qua Zalo chính thức của Thịnh Vượng Số:
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://zalo.me/84985878672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-o !py-2 !px-4 text-xs border-cam/50 text-cam"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Nhắn Zalo: 0985.878.672</span>
                </a>
                <a
                  href="mailto:support@thinhvuongso.vn"
                  className="text-xs font-mono text-yen hover:text-kem underline"
                >
                  support@thinhvuongso.vn
                </a>
              </div>
            </div>
          </div>

          {/* Right 7 cols: Interactive React Hook Form + Zod Validation */}
          <div className="lg:col-span-7">
            <div className="the vien-chay p-6 sm:p-10 bg-nen-sau/95 shadow-2xl">
              {submittedData ? (
                <div className="py-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-cam/20 border border-cam text-cam flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-lg mx-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-cam">
                      Đăng ký thành công
                    </span>
                    <h3 className="text-2xl font-bold text-kem">
                      Cảm ơn {submittedData.fullName}, Thịnh Vượng Số đã nhận được yêu cầu!
                    </h3>
                    <p className="text-sm text-yen leading-relaxed">
                      Người phụ trách chuyên môn sẽ liên hệ với bạn qua{' '}
                      <strong className="text-kem">{submittedData.contactChannel}</strong>{' '}
                      theo số <strong className="text-cam">{submittedData.phone}</strong>{' '}
                      trong vòng 24 giờ làm việc để trao đổi chi tiết.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-abyssal border border-kem/10 text-left max-w-md mx-auto space-y-1.5 text-xs text-yen">
                    <p>
                      <strong className="text-kem">Nội dung quan tâm:</strong>{' '}
                      {submittedData.inquiryType === 'lo-trinh' &&
                        'Tư vấn chọn lộ trình học phù hợp'}
                      {submittedData.inquiryType === 'bai-toan-rieng' &&
                        'Đồng hành 1-1 tháo gỡ bài toán riêng'}
                      {submittedData.inquiryType === 'but-pha-tai-chinh' &&
                        'Đăng ký khóa Bứt Phá Tài Chính (06/12/2026)'}
                      {submittedData.inquiryType === 'tinh-hoa-thinh-vuong' &&
                        'Tìm hiểu & xét duyệt Tinh Hoa Thịnh Vượng (12 tháng)'}
                    </p>
                    <p>
                      <strong className="text-kem">Tình huống đã chia sẻ:</strong> “
                      {submittedData.problemStatement}”
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedData(null);
                      reset();
                    }}
                    className="btn-o !py-2.5 !px-5 text-xs mx-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Gửi một yêu cầu khác</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmitConsultation)}
                  className="space-y-6"
                  noValidate
                >
                  <div className="border-b border-kem/10 pb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-cam">
                      Biểu mẫu kết nối trực tiếp
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-kem mt-1">
                      Đặt lịch trao đổi lộ trình hoặc đăng ký chương trình
                    </h3>
                  </div>

                  {/* Inquiry Type Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-yen">
                      1. Bạn muốn trao đổi về nội dung nào? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        {
                          val: 'lo-trinh',
                          title: 'Tư vấn lộ trình học phù hợp',
                          sub: 'Chưa rõ nên học Bình Dân, Bứt Phá hay Tinh Hoa',
                        },
                        {
                          val: 'but-pha-tai-chinh',
                          title: 'Đăng ký Bứt Phá Tài Chính',
                          sub: 'Khóa 6 tuần (06/12/2026 – 10/01/2027)',
                        },
                        {
                          val: 'tinh-hoa-thinh-vuong',
                          title: 'Ứng tuyển Tinh Hoa Thịnh Vượng',
                          sub: 'Đồng hành huấn luyện chuyên sâu 12 tháng',
                        },
                        {
                          val: 'bai-toan-rieng',
                          title: 'Đồng hành 1-1 bài toán riêng',
                          sub: 'Gỡ nút thắt tài chính / kinh doanh / vốn cá nhân',
                        },
                      ].map((opt) => {
                        const selected = currentInquiryType === opt.val;
                        return (
                          <label
                            key={opt.val}
                            className={`p-3.5 rounded border cursor-pointer transition-all flex items-start gap-2.5 ${
                              selected
                                ? 'bg-xanh border-cam shadow-md'
                                : 'bg-abyssal/70 border-kem/15 hover:border-kem/35'
                            }`}
                          >
                            <input
                              type="radio"
                              value={opt.val}
                              {...register('inquiryType')}
                              className="mt-1 accent-[#FFB162]"
                            />
                            <div>
                              <span className="text-xs sm:text-sm font-semibold text-kem block">
                                {opt.title}
                              </span>
                              <span className="text-[11px] text-yen">{opt.sub}</span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Personal Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-mono uppercase tracking-wider text-yen mb-1.5"
                      >
                        Họ và tên của bạn *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Ví dụ: Nguyễn Văn An"
                        {...register('fullName')}
                        className="w-full px-3.5 py-2.5 rounded bg-abyssal border border-kem/15 text-sm text-kem placeholder-yen/40 focus:outline-none focus:border-cam"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-cam mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono uppercase tracking-wider text-yen mb-1.5"
                      >
                        Số điện thoại / Zalo liên hệ *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Ví dụ: 0985878672"
                        {...register('phone')}
                        className="w-full px-3.5 py-2.5 rounded bg-abyssal border border-kem/15 text-sm text-kem placeholder-yen/40 focus:outline-none focus:border-cam"
                      />
                      {errors.phone && (
                        <p className="text-xs text-cam mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="contactChannel"
                        className="block text-xs font-mono uppercase tracking-wider text-yen mb-1.5"
                      >
                        Kênh ưu tiên
                      </label>
                      <select
                        id="contactChannel"
                        {...register('contactChannel')}
                        className="w-full px-3.5 py-2.5 rounded bg-abyssal border border-kem/15 text-sm text-kem focus:outline-none focus:border-cam"
                      >
                        <option value="Zalo">Nhắn qua Zalo</option>
                        <option value="Điện thoại">Gọi điện trực tiếp</option>
                        <option value="Email">Gửi qua Email</option>
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="role"
                        className="block text-xs font-mono uppercase tracking-wider text-yen mb-1.5"
                      >
                        Vai trò hiện tại *
                      </label>
                      <select
                        id="role"
                        {...register('role')}
                        className="w-full px-3.5 py-2.5 rounded bg-abyssal border border-kem/15 text-sm text-kem focus:outline-none focus:border-cam"
                      >
                        <option value="lam-cong">Đi làm hưởng lương</option>
                        <option value="tu-doanh">Tự doanh / Freelancer</option>
                        <option value="chu-doanh-nghiep">Chủ doanh nghiệp SME</option>
                        <option value="nha-dau-tu">Nhà đầu tư cá nhân</option>
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-yen mb-1.5"
                      >
                        Địa chỉ Email (Tùy chọn)
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="ban@email.com"
                        {...register('email')}
                        className="w-full px-3.5 py-2.5 rounded bg-abyssal border border-kem/15 text-sm text-kem placeholder-yen/40 focus:outline-none focus:border-cam"
                      />
                      {errors.email && (
                        <p className="text-xs text-cam mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <label
                      htmlFor="problemStatement"
                      className="block text-xs font-mono uppercase tracking-wider text-yen mb-1.5"
                    >
                      Chia sẻ ngắn gọn bài toán hoặc mong muốn hiện tại của bạn *
                    </label>
                    <textarea
                      id="problemStatement"
                      rows={4}
                      placeholder="Ví dụ: Mình đang tự kinh doanh cửa hàng doanh thu khoảng 100tr/tháng nhưng dòng tiền công - tư đang lẫn lộn, muốn tìm hiểu khóa Bứt Phá Tài Chính..."
                      {...register('problemStatement')}
                      className="w-full px-3.5 py-2.5 rounded bg-abyssal border border-kem/15 text-sm text-kem placeholder-yen/40 focus:outline-none focus:border-cam"
                    />
                    {errors.problemStatement && (
                      <p className="text-xs text-cam mt-1">
                        {errors.problemStatement.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs text-yen">
                      <ShieldCheck className="w-4 h-4 text-cam shrink-0" />
                      <span>
                        Mọi thông tin tài chính & cá nhân của bạn được bảo mật tuyệt đối.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-p text-sm shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi thông tin đăng ký'}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Inline Free Handbook Lead Magnet Banner (#cam-nang) */}
        <div
          id="cam-nang"
          className="the p-6 sm:p-8 lg:p-10 bg-nen-sau border border-cam/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <div className="inline-flex items-center gap-2 text-cam font-mono text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Tài liệu nền tảng miễn phí · Thịnh Vượng Số</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-kem">
                Nhận Cẩm nang: “Tích sản từ đâu? · 4 quy trình chuẩn bị trước khi xuống tiền”
              </h3>
              <p className="text-xs sm:text-sm text-yen leading-relaxed">
                Dành cho những ai muốn bắt đầu xây dựng danh mục tài sản tích lũy an toàn,
                hiểu rõ thứ tự ưu tiên giữa quỹ dự phòng, dòng tiền sinh hoạt và vốn nhàn rỗi.
              </p>
            </div>

            <div className="lg:col-span-6">
              {handbookSuccess ? (
                <div className="p-4 rounded bg-xanh/50 border border-cam/40 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-cam flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Đã gửi Cẩm nang tới {handbookSuccess.email}!
                    </p>
                    <p className="text-xs text-yen">
                      Chúc {handbookSuccess.fullName} có những bước đi vững chắc đầu tiên
                      trên hành trình tích sản.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setHandbookSuccess(null);
                      resetHandbook();
                    }}
                    className="text-xs font-mono text-kem underline shrink-0"
                  >
                    Đổi email
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmitHandbook(onSubmitHandbook)}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-3"
                  noValidate
                >
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      placeholder="Tên của bạn *"
                      {...registerHandbook('fullName')}
                      className="w-full px-3.5 py-2.5 rounded bg-abyssal border border-kem/15 text-xs sm:text-sm text-kem placeholder-yen/50 focus:outline-none focus:border-cam"
                    />
                    {handbookErrors.fullName && (
                      <p className="text-[11px] text-cam mt-1">
                        {handbookErrors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-5">
                    <input
                      type="email"
                      placeholder="Email nhận PDF Cẩm nang *"
                      {...registerHandbook('email')}
                      className="w-full px-3.5 py-2.5 rounded bg-abyssal border border-kem/15 text-xs sm:text-sm text-kem placeholder-yen/50 focus:outline-none focus:border-cam"
                    />
                    {handbookErrors.email && (
                      <p className="text-[11px] text-cam mt-1">
                        {handbookErrors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      disabled={isSubmittingHandbook}
                      className="btn-p w-full justify-center !py-2.5 !px-3 text-xs"
                    >
                      <span>{isSubmittingHandbook ? 'Đang gửi...' : 'Nhận Cẩm nang'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
