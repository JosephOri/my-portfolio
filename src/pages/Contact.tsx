import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";
import { H1, Paragraph } from "../components/ui";
import Section from "../components/ui/Section";
import { ContactMessageButton, Loader } from "../components/ui";
import styled from "styled-components";
import { toast } from "react-toastify";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID,
      );
      toast.success("Message sent successfully! I will get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
      });
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <ContactSection id="contact">
      <H1 className="mt-7 mb-4 text-left text-5xl text-teal-400">Contact me</H1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Enter your name"
          />
          {errors.name && (
            <Paragraph color="red">{errors.name.message}</Paragraph>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <Paragraph color="red">{errors.email.message}</Paragraph>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            {...register("message")}
            id="message"
            placeholder="Enter your message..."
          />
          {errors.message && (
            <Paragraph color="red">{errors.message.message}</Paragraph>
          )}
        </InputGroup>

        <ContactMessageButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader size="sm" /> : "Send Message"}
        </ContactMessageButton>
      </Form>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled(Section)`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 500;
  margin-bottom: 0.2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 4px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primaryColor}33;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 4px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primaryColor}33;
  }
`;
