import React, { useState } from 'react';
import {
  PILLARS_DATA,
  ORBIT_NODES,
  ROLE_LENSES,
  OrbitNode,
  RoleLens,
} from '../data/dtvData';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Compass,
  UserCheck,
} from 'lucide-react';

interface EcosystemSectionProps {
  onOpenProgramModal: (programId: string) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onOpenProgramModal,
}) => {
  const [selectedNode, setSelectedNode] = useState<OrbitNode>(ORBIT_NODES[0]);
  const [selectedRole, setSelectedRole] = useState<RoleLens>(ROLE_LENSES[0]);

  return (
    <section id="ve-dtv" className="py-20 lg:py-28 border-b border-kem/10 relative">
      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Part 1: 4 Pillars ("Một hệ sinh thái. Một gốc.") */}
        <div>
          <div className="max-w-3xl space-y-4">
            <div className="nhan">
              <span>Về Thịnh Vượng Số · Cấu trúc 4 trụ cột</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-kem leading-tight">
              Một hệ sinh thái.{' '}
              <em className="font-serif italic text-cam font-semibold">Một gốc rễ.</em>
            </h2>
            <p className="text-yen text-base sm:text-lg leading-relaxed">
              Tại Thịnh Vượng Số, chúng tôi không tách rời chuyện tiền bạc khỏi con người.
              Mọi nút thắt về thu nhập, dòng tiền kinh doanh hay quyết định đầu tư đều bắt
              nguồn từ nhận thức, phẩm chất và năng lực tự làm chủ của chính người đó.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS_DATA.map((pillar) => (
              <div
                key={pillar.id}
                className={`the p-6 flex flex-col justify-between ${
                  pillar.isRoot ? 'vien-chay bg-xanh/45' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs text-cam font-semibold tracking-wider">
                      {pillar.number}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded ${
                        pillar.isRoot
                          ? 'bg-cam text-abyssal font-semibold'
                          : 'bg-xanh text-yen border border-kem/10'
                      }`}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-kem mb-2.5">{pillar.title}</h3>
                  <p className="text-sm text-yen leading-relaxed mb-5">
                    {pillar.summary}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-kem/10">
                  {pillar.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-kem/90 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cam mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Interactive 8-Node Ecosystem Orbit */}
        <div className="bg-nen-sau/90 border border-kem/10 rounded-lg p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="nhan">
                <span>Bản đồ 8 mắt xích năng lực</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-kem leading-snug">
                Chạm vào từng mắt xích để xem cách ĐTV tháo gỡ bài toán
              </h3>
              <p className="text-sm sm:text-base text-yen leading-relaxed">
                8 mảnh ghép vận hành xoay quanh tâm điểm{' '}
                <strong className="text-kem">Con người & Nội lực</strong>. Khi một mắt xích
                bị hổng (ví dụ: không tách dòng tiền công – tư, hoặc thiếu quỹ dự phòng),
                toàn bộ guồng quay tài chính sẽ lập tức chao đảo.
              </p>

              {/* Selected Node Detail Card */}
              <div className="the p-5 vien-chay bg-abyssal/90 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-cam">
                    {selectedNode.category}
                  </span>
                  <span className="font-mono text-[11px] text-yen">
                    Mắt xích đang chọn
                  </span>
                </div>
                <h4 className="text-lg font-bold text-kem">{selectedNode.label}</h4>
                <p className="text-sm text-yen leading-relaxed">
                  {selectedNode.description}
                </p>
                <div className="pt-2 border-t border-kem/10 flex items-center justify-between text-xs">
                  <span className="text-yen">
                    Chương trình gợi ý:{' '}
                    <strong className="text-kem">{selectedNode.programSuggest}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Node Selector Grid / Orbit */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ORBIT_NODES.map((node, index) => {
                  const isActive = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNode(node)}
                      className={`text-left p-4 rounded border transition-all ${
                        isActive
                          ? 'bg-xanh/80 border-cam shadow-lg shadow-black/30'
                          : 'bg-abyssal/60 border-kem/10 hover:border-kem/30 hover:bg-xanh/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[11px] text-cam">
                          0{index + 1} · {node.category}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-cam animate-ping" />
                        )}
                      </div>
                      <p className="font-semibold text-sm text-kem">{node.label}</p>
                      <p className="text-xs text-yen line-clamp-2 mt-1">
                        {node.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Part 3: 4 Role Lenses ("Ai thường tìm đến Thịnh Vượng Số?") */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="nhan">
                <span>4 lăng kính vai trò · Thực tế đời sống</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-kem">
                Bạn đang tạo ra thu nhập ở{' '}
                <em className="font-serif italic text-cam font-semibold">vai trò nào?</em>
              </h2>
              <p className="text-yen text-sm sm:text-base">
                Mỗi vai trò có một cấu trúc dòng tiền và những cái bẫy tài chính hoàn toàn
                khác nhau. Hãy chọn vai trò gần nhất với bạn hiện tại:
              </p>
            </div>

            {/* Role Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {ROLE_LENSES.map((role) => {
                const active = selectedRole.id === role.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`px-4 py-2.5 rounded text-xs sm:text-sm font-medium transition-all ${
                      active
                        ? 'bg-cam text-abyssal font-semibold shadow-md'
                        : 'bg-xanh/45 text-yen hover:text-kem border border-kem/10'
                    }`}
                  >
                    {role.name.split('/')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Role Content Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 cols: Value Flow & Traps */}
            <div className="lg:col-span-7 the p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-cam">
                  Cơ chế tạo giá trị & giữ tiền
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-kem mt-1">
                  {selectedRole.name}
                </h3>
                <p className="text-sm text-yen mt-1">{selectedRole.subtitle}</p>
              </div>

              {/* Value Flow Diagram Strip */}
              <div className="p-4 rounded bg-nen-sau border border-cam/25">
                <span className="font-mono text-[11px] uppercase tracking-wider text-yen block mb-1.5">
                  Đường đi của dòng giá trị:
                </span>
                <p className="text-xs sm:text-sm font-mono text-cam leading-relaxed">
                  {selectedRole.valueFlow}
                </p>
              </div>

              {/* 3 Common Traps */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-kem flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-cam" />
                  <span>3 điểm nghẽn phổ biến nhất ở nhóm này:</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedRole.commonTraps.map((trap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-yen leading-relaxed bg-nen-sau/50 p-3 rounded border border-kem/5"
                    >
                      <span className="font-mono text-xs text-cam font-bold mt-0.5">
                        0{i + 1}
                      </span>
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended First Step */}
              <div className="pt-4 border-t border-kem/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-lg">
                  <span className="font-mono text-xs text-cam uppercase">
                    Việc đầu tiên cần làm rõ:
                  </span>
                  <p className="text-xs sm:text-sm text-kem leading-relaxed">
                    {selectedRole.firstStep}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenProgramModal(selectedRole.recommendedProgramId)}
                  className="btn-p !py-2.5 !px-4 text-xs shrink-0"
                >
                  <span>Xem chương trình phù hợp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right 5 cols: Real Case Study of that Role */}
            <div className="lg:col-span-5 the p-6 sm:p-8 bg-nen-sau/80 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cam/15 text-cam font-mono text-xs">
                    <UserCheck className="w-3.5 h-3.5" />
                    Câu chuyện chuyển hóa thực tế
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-kem">
                    {selectedRole.caseStudy.person}
                  </h4>
                  <p className="text-xs font-mono text-cam mt-1">
                    {selectedRole.caseStudy.roleDetail}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded bg-abyssal/80 border border-kem/10">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-yen block mb-1">
                      Trước khi đến với ĐTV:
                    </span>
                    <p className="text-xs sm:text-sm text-yen leading-relaxed">
                      {selectedRole.caseStudy.before}
                    </p>
                  </div>

                  <div className="p-3.5 rounded bg-abyssal/80 border border-cam/25">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cam block mb-1">
                      Quá trình tháo gỡ & Thực hành:
                    </span>
                    <p className="text-xs sm:text-sm text-kem leading-relaxed">
                      {selectedRole.caseStudy.shift}
                    </p>
                  </div>

                  <div className="p-3.5 rounded bg-xanh/40 border border-cam/40">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cam flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Kết quả thực tế:
                    </span>
                    <p className="text-xs sm:text-sm text-kem font-medium leading-relaxed">
                      {selectedRole.caseStudy.after}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-kem/10 flex items-center justify-between">
                <a href="#bai-test" className="btn-l text-xs">
                  <Compass className="w-4 h-4 text-cam" />
                  <span>Định vị bài toán của riêng bạn qua 3 câu hỏi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
