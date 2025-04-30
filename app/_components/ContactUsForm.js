"use client";

import { useForm } from "react-hook-form";
import { sendMessage } from "../_utils/actions";
import toast from "react-hot-toast";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <form
      action={sendMessage}
      className="space-y-4"
      onSubmit={handleSubmit(async (data) => {
        toast.promise(
          async () => {
            await sendMessage(data);
            reset();
          },
          {
            loading: "Sending...",
            success: "Email send successfully, thanks for reaching me",
            error:
              "Failed to send email, please try again later or reach us using whatsapp",
          },
        );

        // try {
        //   await sendMessage(data);
        //   toast.success("Email sent successfully, thanks for reaching me");
        //   reset();
        // } catch (e) {
        //   toast.error(
        //     "Failed to send email, please try again or reach us using whatsapp",
        //   );
        // }
      })}
    >
      <input
        type="text"
        placeholder="Your Name"
        {...register("name", { required: true, minLength: 3 })}
        className="border-secondary/20 focus:border-secondary w-full rounded-lg border bg-black/50 p-3 transition-colors"
      />
      {errors.name && (
        <p className="text-red-500">Please Provide valid User name</p>
      )}
      <input
        type="email"
        placeholder="Your Email"
        {...register("email", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        })}
        className="border-secondary/20 focus:border-secondary w-full rounded-lg border bg-black/50 p-3 transition-colors"
      />
      {errors.email && (
        <p className="text-red-500">Please Provide valid email name</p>
      )}
      <textarea
        placeholder="Your Message"
        rows="4"
        {...register("text", {
          required: true,
          minLength: 3,
        })}
        className="border-secondary/20 focus:border-secondary w-full rounded-lg border bg-black/50 p-3 transition-colors"
      />
      {errors.text && (
        <p className="text-red-500">Please Provide valid message name</p>
      )}
      <button className="bg-secondary hover:bg-secondary/90 w-full cursor-pointer rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-300">
        Send Message
      </button>
    </form>
  );
}
