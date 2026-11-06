import React, { useState } from 'react';
import {
  QUIZ_ROLES,
  QUIZ_NEEDS,
  QUIZ_PACES,
  getQuizRecommendation,
} from '../data/dtvData';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quizLeadSchema, QuizLeadFormValues } from '../schemas/leadSchema';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Send,
  ExternalLink,
} from 'lucide-react';

interface DiagnosticQuizProps {
  onOpenProgramModal: (programId: string) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({
  onOpenProgramModal,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedRole, setSelectedRole] = useState<string>('tu-doanh');
  const [selectedNeed, setSelectedNeed] = useState<string>('sap-xep-tai-chinh');
  const [selectedPace, setSelectedPace] = useState<string>('chuyen_de');
  const [leadSubmitted, setLeadSubmitted] = useState<QuizLeadFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuizLeadFormValues>({
    resolver: zodResolver(quizLeadSchema),
    defaultValues: {
      name: '',
      zalo: '',
      email: '',
      subscribeArticles: true,
    },
  });

  const recommendation = getQuizRecommendation(
    selectedRole,
    selectedNeed,
    selectedPace
  );

  const onSubmitQuizLead = async (data: QuizLeadFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setLeadSubmitted(data);
  };

  const handleResetQuiz = () => {
    setStep(1);
    setLeadSubmitted(null);
    reset();
  };

  return (
    <section
      id="bai-test"
      className="py-20 lg:py-28 border-b border-kem/10 relative bg-abyssal"
    >
      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-10">
            <div className="nhan justify-center">
              <span>Công cụ định vị lộ trình · 3 câu hỏi nhanh</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-kem">
              Chưa rõ nên bắt đầu từ đâu?{' '}
              <em className="font-serif italic text-cam font-semibold">
                Làm bài test 2 phút.
              </em>
            </h2>
            <p className="text-yen text-sm sm:text-base max-w-2xl mx-auto">
              Trả lời 3 câu hỏi sát với vai trò, nút thắt hiện tại và nhịp độ học tập bạn
              mong muốn. Hệ thống sẽ gợi ý ngay điểm bắt đầu phù hợp nhất và 1 việc nhỏ bạn
              có thể làm ngay trong tuần này.
            </p>
          </div>

          {/* Quiz Card Container */}
          <div className="the vien-chay p-6 sm:p-10 bg-nen-sau/95 shadow-2xl">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-yen mb-2.5">
                <span>
                  {step < 4
                    ? `CÂU HỎI 0${step} / 03`
                    : 'KẾT QUẢ ĐỊNH VỊ LỘ TRÌNH CÁ NHÂN'}
                </span>
                <span className="text-cam">
                  {step === 1 && 'Bước 1: Vai trò tạo thu nhập'}
                  {step === 2 && 'Bước 2: Nút thắt lớn nhất hiện tại'}
                  {step === 3 && 'Bước 3: Nhịp độ học tập mong muốn'}
                  {step === 4 && 'Hoàn tất 100%'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-colors duration-300 ${
                      step >= idx ? 'bg-cam' : 'bg-xanh'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* STEP 1: Role Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-kem">
                    Câu 1: Hiện tại nguồn thu nhập chính của bạn đến từ vai trò nào?
                  </h3>
                  <p className="text-xs sm:text-sm text-yen mt-1">
                    Chọn vai trò phản ánh sát nhất cấu trúc công việc hiện tại của bạn:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {QUIZ_ROLES.map((item) => {
                    const active = selectedRole === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSelectedRole(item.id);
                          setStep(2);
                        }}
                        className={`p-4 sm:p-5 rounded text-left border transition-all flex flex-col justify-between ${
                          active
                            ? 'bg-xanh border-cam shadow-lg'
                            : 'bg-abyssal/75 border-kem/10 hover:border-cam/50 hover:bg-xanh/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-sm sm:text-base text-kem">
                              {item.label}
                            </span>
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                active ? 'border-cam bg-cam text-abyssal' : 'border-kem/30'
                              }`}
                            >
                              {active && <span className="w-1.5 h-1.5 rounded-full bg-abyssal" />}
                            </span>
                          </div>
                          <p className="text-xs text-yen mt-2 leading-relaxed">
                            {item.sublabel}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-p !py-2.5 !px-5 text-xs sm:text-sm"
                  >
                    <span>Tiếp tục Câu 2</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Current Bottleneck / Need */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-kem">
                    Câu 2: Đâu là bài toán hoặc sự trăn trở lớn nhất của bạn lúc này?
                  </h3>
                  <p className="text-xs sm:text-sm text-yen mt-1">
                    Chọn 1 vấn đề bạn muốn ưu tiên giải quyết dứt điểm trước:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {QUIZ_NEEDS.map((item) => {
                    const active = selectedNeed === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSelectedNeed(item.id);
                          setStep(3);
                        }}
                        className={`p-4 rounded text-left border transition-all ${
                          active
                            ? 'bg-xanh border-cam shadow-lg'
                            : 'bg-abyssal/75 border-kem/10 hover:border-cam/50 hover:bg-xanh/40'
                        }`}
                      >
                        <p className="font-semibold text-sm text-kem">{item.label}</p>
                        <p className="text-xs text-yen mt-1.5 leading-relaxed">
                          {item.sublabel}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-o !py-2 !px-4 text-xs"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Quay lại Câu 1</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-p !py-2.5 !px-5 text-xs sm:text-sm"
                  >
                    <span>Tiếp tục Câu 3</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Learning Pace */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-kem">
                    Câu 3: Bạn mong muốn hình thức và nhịp độ đồng hành như thế nào?
                  </h3>
                  <p className="text-xs sm:text-sm text-yen mt-1">
                    Chọn cách học phù hợp nhất với quỹ thời gian và mức độ cam kết của bạn:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {QUIZ_PACES.map((item) => {
                    const active = selectedPace === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSelectedPace(item.id);
                          setStep(4);
                        }}
                        className={`p-4 sm:p-5 rounded text-left border transition-all ${
                          active
                            ? 'bg-xanh border-cam shadow-lg'
                            : 'bg-abyssal/75 border-kem/10 hover:border-cam/50 hover:bg-xanh/40'
                        }`}
                      >
                        <p className="font-semibold text-sm sm:text-base text-kem">
                          {item.label}
                        </p>
                        <p className="text-xs text-yen mt-1 leading-relaxed">
                          {item.sublabel}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-o !py-2 !px-4 text-xs"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Quay lại Câu 2</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="btn-p !py-2.5 !px-6 text-xs sm:text-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Xem kết quả định vị ngay</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Personalized Recommendation & Zalo Lead Capture */}
            {step === 4 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left 7 cols: Recommendation Details */}
                  <div className="lg:col-span-7 space-y-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cam text-abyssal font-mono text-xs font-bold uppercase tracking-wider">
                      <Compass className="w-3.5 h-3.5" />
                      {recommendation.badge}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold text-kem leading-snug">
                      {recommendation.headline}
                    </h3>

                    <p className="text-sm sm:text-base text-yen leading-relaxed">
                      {recommendation.summary}
                    </p>

                    <div className="space-y-3 pt-1">
                      <div className="p-4 rounded bg-abyssal/90 border border-cam/30">
                        <span className="font-mono text-xs uppercase tracking-wider text-cam block mb-1">
                          1. Điều bạn nên làm rõ trước tiên:
                        </span>
                        <p className="text-xs sm:text-sm text-kem leading-relaxed">
                          {recommendation.clarifyFirst}
                        </p>
                      </div>

                      <div className="p-4 rounded bg-abyssal/90 border border-kem/15">
                        <span className="font-mono text-xs uppercase tracking-wider text-cam block mb-1">
                          2. Một việc nhỏ làm được ngay trong tuần này:
                        </span>
                        <p className="text-xs sm:text-sm text-kem leading-relaxed">
                          {recommendation.actionThisWeek}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => onOpenProgramModal(recommendation.primaryProgramId)}
                        className="btn-p text-xs sm:text-sm"
                      >
                        <span>Xem chi tiết khung chương trình gợi ý</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleResetQuiz}
                        className="btn-o !py-2.5 !px-4 text-xs"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Làm lại bài test</span>
                      </button>
                    </div>
                  </div>

                  {/* Right 5 cols: Browser Preview + Zalo Lead Capture */}
                  <div className="lg:col-span-5 space-y-5">
                    {/* Browser Preview Frame */}
                    <div className="rounded overflow-hidden border border-kem/15 bg-abyssal shadow-lg">
                      <div className="px-3 py-2 bg-nen-chan border-b border-kem/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-nau/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-cam/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-xanh" />
                        </div>
                        <span className="font-mono text-[10px] text-yen truncate max-w-[180px]">
                          {recommendation.previewDomain}
                        </span>
                        <ExternalLink className="w-3 h-3 text-yen" />
                      </div>
                      <img
                        src={recommendation.previewImage}
                        alt={recommendation.headline}
                        className="w-full h-44 object-cover object-top"
                      />
                    </div>

                    {/* Zalo Capture Box (#form-luu-ket-qua) */}
                    <div className="p-5 rounded bg-abyssal border border-cam/35 space-y-4">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-cam">
                          Lưu kết quả & Nhận lộ trình chi tiết qua Zalo
                        </span>
                        <h4 className="text-base font-bold text-kem mt-0.5">
                          Gửi bản tóm tắt kết quả này về Zalo của bạn
                        </h4>
                      </div>

                      {leadSubmitted ? (
                        <div className="p-4 rounded bg-xanh/50 border border-cam/40 space-y-2">
                          <div className="flex items-center gap-2 text-cam font-semibold text-sm">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Đã ghi nhận thông tin của {leadSubmitted.name}!</span>
                          </div>
                          <p className="text-xs text-yen leading-relaxed">
                            Đội ngũ Đạo Thịnh Vượng sẽ gửi bản tóm tắt lộ trình{' '}
                            <strong className="text-kem">{recommendation.headline}</strong>{' '}
                            qua số Zalo <strong className="text-cam">{leadSubmitted.zalo}</strong>.
                          </p>
                        </div>
                      ) : (
                        <form
                          onSubmit={handleSubmit(onSubmitQuizLead)}
                          className="space-y-3"
                          noValidate
                        >
                          <div>
                            <input
                              type="text"
                              placeholder="Tên của bạn *"
                              {...register('name')}
                              className="w-full px-3.5 py-2.5 rounded bg-nen-sau border border-kem/15 text-sm text-kem placeholder-yen/50 focus:outline-none focus:border-cam"
                            />
                            {errors.name && (
                              <p className="text-[11px] text-cam mt-1">
                                {errors.name.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <input
                              type="tel"
                              placeholder="Số điện thoại sử dụng Zalo *"
                              {...register('zalo')}
                              className="w-full px-3.5 py-2.5 rounded bg-nen-sau border border-kem/15 text-sm text-kem placeholder-yen/50 focus:outline-none focus:border-cam"
                            />
                            {errors.zalo && (
                              <p className="text-[11px] text-cam mt-1">
                                {errors.zalo.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <input
                              type="email"
                              placeholder="Email nhận thêm bài viết chuyên san (tùy chọn)"
                              {...register('email')}
                              className="w-full px-3.5 py-2.5 rounded bg-nen-sau border border-kem/15 text-sm text-kem placeholder-yen/50 focus:outline-none focus:border-cam"
                            />
                            {errors.email && (
                              <p className="text-[11px] text-cam mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-p w-full justify-center !py-2.5 text-xs uppercase font-mono tracking-wider"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>
                              {isSubmitting ? 'Đang gửi...' : 'Nhận kết quả qua Zalo'}
                            </span>
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
