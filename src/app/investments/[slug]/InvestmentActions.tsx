"use client";

import FormSubmitButton from "@/components/FormSubmitButton";
import { Investment } from "@prisma/client";
import { useFormState } from "react-dom";
import { deleteInvestment } from "../actions";
import { useRouter } from "next/navigation";

interface InvestmentActionsProps {
  investment: Investment;
}

export default function InvestmentActions({
  investment,
}: InvestmentActionsProps) {
  return (
    <aside className="flex w-[200px] flex-none flex-row items-center gap-2 md:flex-col md:items-stretch">
      <UpdateInvestmentButton
        investmentId={investment.id}
        slag={investment.slug}
      />

      <DeleteInvestmentButton
        investmentId={investment.id}
        slag={investment.slug}
      />
    </aside>
  );
}

interface ActionButtonProps {
  investmentId: number;
  slag: string;
}

function UpdateInvestmentButton({ investmentId, slag }: ActionButtonProps) {
  const router = useRouter();
  const editUrl = `/investments/${slag}?isEditing=true`;
  const handleEdit = () => {
    router.push(editUrl);
  };

  return (
    <form action={handleEdit} className="space-y-1">
      <input hidden name="investmentId" defaultValue={investmentId} />
      <FormSubmitButton className="w-full bg-green-500 hover:bg-green-600">
        Edit
      </FormSubmitButton>
    </form>
  );
}

function DeleteInvestmentButton({ investmentId }: ActionButtonProps) {
  const [formState, formAction] = useFormState(deleteInvestment, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="investmentId" defaultValue={investmentId} />
      <FormSubmitButton className="w-full bg-red-500 hover:bg-red-600">
        Delete
      </FormSubmitButton>
      {formState?.error && (
        <p className="text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}
