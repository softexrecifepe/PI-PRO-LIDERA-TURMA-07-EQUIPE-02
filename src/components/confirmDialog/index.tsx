import { cloneElement, ReactElement } from "react";
interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  icon: ReactElement;
  message?: string;
  title?: string;
  confirmButtonLabel: string;
}

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  icon,
  message,
  confirmButtonLabel,
}: ConfirmDialogProps) => {

  const iconStyle = `fill-current w-10 h-10`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#2D3134] bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      aria-modal="true"
      role="dialog"
    >
      <div className="w-72 h-80 bg-gray-100 rounded-xl flex flex-col items-center justify-between px-4 py-1 shadow-lg">
        <div className="flex flex-col items-center gap-2 w-3/4 p-4">
          {cloneElement(icon, { className: iconStyle })}
          <p className="font-medium text-[#2D3134] text-xl text-center">{message}</p>
        </div>
        <div className="flex w-full justify-evenly">
          <button onClick={onClose} className="font-semibold text-gray-700 text-xl p-2">
            Voltar
          </button>
          <div className="h-3/4 bg-white w-0.5 self-center" />
          <button
            onClick={onConfirm}
            className={`font-semibold text-secundary text-xl p-2`}
          >
            {confirmButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
