/* eslint-disable react/no-unescaped-entities */
"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Tech Innovate",
      subject: "New Contact Message from Tech Innovate Website"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div>

      <div className="my-10 grid md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact Tech Innovate
          </h2>
          <p className="mt-5 max-w-sm">
            Ready to take your business to the next level with Tech
            Innovate? Contact us today to schedule a consultation and
            discover how our IT solutions can help you achieve your
            business objectives.
          </p>
          <p className="mt-5 max-w-sm">
            Thank you for visiting Tech Innovate, where innovation
            meets technology to drive success in today's digital
            landscape.
          </p>

          <div className="mt-5">
            <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
              <RiMapPin2Fill className="h-4 w-4" />
              <span>1734 Sanfransico, CA 93063</span>
            </div>
            <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
              <MdEmail className="h-4 w-4" />
              <a href={`mailto:${"acepttrsn@gmail.com"}`}>
                {"acepttrsn@gmail.com"}
              </a>
            </div>
            <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
              <FaPhone className="h-4 w-4" />
              <a href={`tel:${"+1(484)809-9633"}`}>
                {"+1(484)809-9633"}
              </a>
            </div>
            <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
              <BiLogoTelegram className="h-4 w-4" />
              <a
                href="https://t.me/abcdev_world"
                className="text-dark-600 dark:text-gray-400"
                target="_blank"
                rel="noreferrer">
                Join By Telegram
              </a>
            </div>
            <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
              <FaDiscord className="h-4 w-4" />
              <a
                href="https://discord.gg/SYJWZUxD"
                className="text-dark-600 dark:text-gray-400"
                target="_blank"
                rel="noreferrer">
                Join Our Discord Server
              </a>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                  errors.name
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                  errors.email
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className={`h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800   focus:ring-4 dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200  ${
                  errors.message
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("message", {
                  required: "Enter your Message"
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black ">
              {isSubmitting ? (
                <svg
                  className="mx-auto h-5 w-5 animate-spin text-white dark:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-center text-sm text-green-500">
              Successfully message sent!
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-center text-sm text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
