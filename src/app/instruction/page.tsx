'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { DEVELOPER_DOMAIN } from '../../../constants';

export default function InstructionPage() {
  const router = useRouter();
  const [isLoading] = useState(false);

  const handleLoginRedirect = () => {
    // Redirect to the delete account page.
    router.push('/delete-account');
  };

  return (
    <div className="container mx-auto flex-grow px-4 py-10 text-center">
      <h1 className="mb-6 text-3xl font-bold">Account Deletion Instructions</h1>
      <p className="mb-4">
        To proceed with deleting your account, you must click the &quot;Login to
        Access Delete Account Page&quot; button below. This will direct you to
        the login page. After logging in, you will be able to access the page
        where you can delete your account.
      </p>
      <p className="mb-6">
        <strong>Important:</strong> Deleting your account will permanently
        remove all your data, including any investment records you have created.
        Please ensure you have backed up any important information before
        proceeding.
      </p>
      <Button
        onClick={handleLoginRedirect}
        disabled={isLoading}
        variant="default"
      >
        Login to Access Delete Account Page
      </Button>
      <p className="mt-6">
        For more information about how we handle your data, please review our{' '}
        <a href="/privacy" className="text-blue-500 underline">
          Privacy Policy
        </a>
        . If you have any questions, contact us at{' '}
        <a
          href={`mailto:support@${DEVELOPER_DOMAIN}`}
          className="text-blue-500 underline"
        >
          support@{DEVELOPER_DOMAIN}
        </a>
        .
      </p>
    </div>
  );
}
