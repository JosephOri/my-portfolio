import { useState } from "react";
import emailjs from "emailjs-com";
import { H1 } from "../../ui/components";
import Section from "../../ui/components/Section";
import { Button, Loader } from "../../ui/components";
import { toast } from "react-toastify";
import styled from "styled-components";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          message: formData.get("message"),
        },
        import.meta.env.VITE_EMAILJS_USER_ID,
      );
      toast.success("Email was sent successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection className="flex flex-col justify-center" id="contact">
      <H1 size="md" align="left" className="mt-7 mb-4 text-teal-400">
        Leave a message
      </H1>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            required
            placeholder="Enter your message..."
          />
        </InputGroup>
        <Button type="submit" disabled={isLoading} value="Send">
          {isLoading ? <Loader size="sm" /> : "Send Message"}
        </Button>
      </Form>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled(Section)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
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
