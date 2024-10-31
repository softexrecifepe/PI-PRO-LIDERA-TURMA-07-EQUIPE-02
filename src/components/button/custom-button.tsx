"use client";
export const CustomButton = ({
  children,
  onClick,
  className,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-btnTextColor bg-primary w-32 hover:bg-[#0056b3] font-bold cursor-pointer py-2 px-4 rounded transition duration-300 ease-in-out shadow-shadowColor ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
