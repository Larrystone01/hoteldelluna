"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Optionally, fetch your backend to double-check payment status
    // fetch('/api/payments/verify?reference=...')
    // Then redirect to homepage
    router.replace("/"); // redirect to homepage
  }, [router]);

  return <p>Thank you for your payment. Redirecting to homepage...</p>;
}
