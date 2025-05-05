'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Check if this is a 501 error
    if (error.message.includes('501')) {
      router.push('/501');
    }
    // Check if this is a 500 error
    else if (error.message.includes('500')) {
      router.push('/500');
    }
  }, [error, router]);

  return null;
} 