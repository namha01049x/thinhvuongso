import { z } from 'zod';

const vnPhoneRegex = /^(0|\+?84)[35789][0-9]{8}$/;

export const consultationSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Vui lòng nhập họ và tên của bạn (ít nhất 2 ký tự).')
    .max(80, 'Họ tên không vượt quá 80 ký tự.'),
  phone: z
    .string()
    .transform((val) => val.replace(/[\s.-]/g, ''))
    .refine((val) => vnPhoneRegex.test(val), {
      message: 'Vui lòng nhập số điện thoại / Zalo hợp lệ tại Việt Nam (VD: 0985878672).',
    }),
  email: z
    .string()
    .email('Vui lòng nhập địa chỉ email hợp lệ.')
    .optional()
    .or(z.literal('')),
  contactChannel: z.enum(['Zalo', 'Điện thoại', 'Email'], {
    required_error: 'Vui lòng chọn kênh liên hệ thuận tiện nhất.',
  }),
  role: z.enum(['lam-cong', 'tu-doanh', 'chu-doanh-nghiep', 'nha-dau-tu'], {
    required_error: 'Vui lòng chọn vai trò hiện tại của bạn.',
  }),
  inquiryType: z.enum(['lo-trinh', 'bai-toan-rieng', 'but-pha-tai-chinh', 'tinh-hoa-thinh-vuong'], {
    required_error: 'Vui lòng chọn nội dung bạn muốn trao đổi.',
  }),
  problemStatement: z
    .string()
    .min(10, 'Hãy chia sẻ ngắn gọn ít nhất 10 ký tự về tình huống hoặc câu hỏi bạn đang vướng.')
    .max(1000, 'Nội dung chia sẻ không vượt quá 1000 ký tự.'),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;

export const quizLeadSchema = z.object({
  name: z
    .string()
    .min(2, 'Vui lòng cho biết tên của bạn.'),
  zalo: z
    .string()
    .transform((val) => val.replace(/[\s.-]/g, ''))
    .refine((val) => vnPhoneRegex.test(val), {
      message: 'Số điện thoại / Zalo chưa đúng định dạng 10 số Việt Nam.',
    }),
  email: z
    .string()
    .email('Địa chỉ email chưa hợp lệ.')
    .optional()
    .or(z.literal('')),
  subscribeArticles: z.boolean().default(true),
});

export type QuizLeadFormValues = z.infer<typeof quizLeadSchema>;

export const handbookSchema = z.object({
  fullName: z.string().min(2, 'Vui lòng nhập tên của bạn.'),
  email: z.string().email('Vui lòng nhập địa chỉ email chính xác để nhận cẩm nang PDF.'),
  phone: z
    .string()
    .transform((val) => val.replace(/[\s.-]/g, ''))
    .refine((val) => val === '' || vnPhoneRegex.test(val), {
      message: 'Số Zalo không hợp lệ.',
    })
    .optional()
    .or(z.literal('')),
});

export type HandbookFormValues = z.infer<typeof handbookSchema>;
