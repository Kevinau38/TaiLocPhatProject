import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { Inquiry } from '@shared/types';
import { api } from '@/lib/api-client';
import { logEvent } from '@/lib/analytics';
const formSchema = z.object({
  name: z.string().min(2, { message: 'Vui lòng nhập tên của bạn.' }),
  phone: z.string().regex(/^(|\+?84[3-9]\d{8}|0[3-9]\d{8})$/, 'Số điện thoại không hợp lệ.').optional(),
  message: z.string().min(10, { message: 'Nội dung cần ít nhất 10 ký t��.' }),
});
export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const inquiryData: Inquiry = { ...values, timestamp: Date.now(), page: 'contact' };
    const handleSuccess = () => {
      logEvent('form_submit', { form: 'contact', name: values.name });
      form.reset();
    };
    try {
      await api<Inquiry>('/api/inquiries', {
        method: 'POST',
        body: JSON.stringify(inquiryData),
      });
      toast.success('Gửi yêu cầu thành công!', {
        description: 'Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.',
      });
      handleSuccess();
    } catch (error) {
      console.warn('API call failed, falling back to localStorage', error);
      try {
        const existingInquiries = JSON.parse(localStorage.getItem('tlp_inquiries_demo') || '[]');
        existingInquiries.push(inquiryData);
        localStorage.setItem('tlp_inquiries_demo', JSON.stringify(existingInquiries));
        toast.success('Yêu cầu của bạn đã được lưu lại!', {
          description: 'Chúng tôi sẽ xử lý ngay khi có kết n���i. Cảm ơn bạn!',
        });
        handleSuccess();
      } catch (storageError) {
        console.error('Failed to save to localStorage', storageError);
        toast.error('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>H��� và Tên</FormLabel>
              <FormControl>
                <Input placeholder="Nguyễn Văn A" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số Điện Thoại (Tùy ch��n)</FormLabel>
              <FormControl>
                <Input placeholder="09xxxxxxxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nội dung</FormLabel>
              <FormControl>
                <Textarea placeholder="Tôi cần tư vấn về..." className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full btn-gradient" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Gửi Yêu Cầu
        </Button>
      </form>
    </Form>
  );
}