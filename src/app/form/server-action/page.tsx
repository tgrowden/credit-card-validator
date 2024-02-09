"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import toast from "react-hot-toast";

import PaymentForm from "@/components/PaymentForm";
import handleFormSubmission from "@/actions/handleFormSubmission";

export default function ServerActionForm() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <p className="text-sm text-gray-700 text-center mb-10">
        This form uses a React server action to handle validation of the input
        server-side.
      </p>

      <ErrorBoundary
        fallback={
          <div className="mb-10 text-center">
            <p>There was an error submitting the form.</p>
          </div>
        }
      >
        <PaymentForm
          inputRef={inputRef}
          formProps={{
            action: async (formData) => {
              const { error } = await handleFormSubmission(formData);

              if (error) {
                toast.error(error);
              } else {
                toast.success("Valid card number!");
              }

              inputRef.current?.select();
            }
          }}
        />
      </ErrorBoundary>
    </>
  );
}
