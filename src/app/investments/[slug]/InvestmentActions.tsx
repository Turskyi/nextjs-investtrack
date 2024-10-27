"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { useEffect, useRef, useState } from "react";

interface InvestmentActionsProps {
  slug: string;
}

export default function InvestmentActions({ slug }: InvestmentActionsProps) {
  const router = useRouter();
  const editButtonRef = useRef<HTMLButtonElement>(null);
  const deleteButtonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);

  const handleEdit = () => {
    router.push(`/edit-investment/${slug}`);
  };

  const handleDelete = async () => {
    const confirmed = confirm(
      "Are you sure you want to delete this investment?",
    );
    if (confirmed) {
      await prisma.investment.delete({
        where: { slug },
      });
      router.push("/investments");
    }
  };
useEffect(() => {
    const editWidth = editButtonRef.current?.offsetWidth || 0;
    const deleteWidth = deleteButtonRef.current?.offsetWidth || 0;
    setButtonWidth(Math.max(editWidth, deleteWidth));
  }, []);
  return (
    <aside className="space-y-3">
      <Button onClick={handleEdit} 
     ref={editButtonRef}
     style={{ width: buttonWidth ? `${buttonWidth}px` : 'auto' }}
      >
        Edit
      </Button>
      <Button
        onClick={handleDelete}
        ref={deleteButtonRef}
        style={{ width: buttonWidth ? `${buttonWidth}px` : 'auto' }}
        variant="destructive"
      >
        Delete
      </Button>
    </aside>
  );
}
