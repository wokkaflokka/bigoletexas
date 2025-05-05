'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    if (error.message.includes('501')) {
      router.push('/not-implemented');
    } else if (error.message.includes('500')) {
      router.push('/server-error');
    }
  }, [error, router]);

  return null;
} 