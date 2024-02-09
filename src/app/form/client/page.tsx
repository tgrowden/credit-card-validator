"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import toast from "react-hot-toast";

import PaymentForm from "@/components/PaymentForm";

export default function ClientForm() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <p className="text-sm text-gray-700 text-center mb-10">
        This form posts to an API endpoint to handle validation of the input
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
              // only post the appropriate data to the server
              const body = JSON.stringify({
                cardNumber: formData.get("cardNumber")
              });

              const response = await fetch("/api/form-handler", {
                method: "POST",
                body,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }
              });

              if (response.ok) {
                toast.success("Valid card number!");
              } else {
                const msg = await response.json().then((data) => data.message);

                const errorMessage =
                  msg && typeof msg === "string" ? msg : "An error occurred";

                toast.error(errorMessage);
              }

              inputRef.current?.select();
            }
          }}
        />
      </ErrorBoundary>
    </>
  );
}
