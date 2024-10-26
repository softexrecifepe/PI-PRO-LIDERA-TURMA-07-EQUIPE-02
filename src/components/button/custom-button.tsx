"use client";
export const CustomButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-btnTextColor bg-primary w-32 hover:bg-blue-700 font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};
