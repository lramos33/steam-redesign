import { ComponentProps, ElementType, InputHTMLAttributes, ReactNode, forwardRef } from "react";

import { Label } from "./Label";

import { cn } from "@/helpers/tailwind.helper";

// ================================== //

interface InputRootProps {
  className?: string;
  children: ReactNode;
}

function InputRoot({ children, className }: InputRootProps) {
  return <div className={cn("relative flex flex-col gap-1", className)}>{children}</div>;
}

// ================================== //

type TInputLabelProps = ComponentProps<typeof Label>;

function InputLabel({ className, children, ...props }: TInputLabelProps) {
  return (
    <Label className={className} {...props}>
      {children}
    </Label>
  );
}

// ================================== //

interface InputIconContainerProps {
  children: ReactNode;
}

function InputIconContainer({ children }: InputIconContainerProps) {
  return (
    <div
      className={cn(
        "relative",
        "peer-data-[error=true]:[&>input]:border-red-300 peer-data-[error=true]:[&>input]:bg-red-50 peer-data-[error=true]:[&>input]:outline-red-300"
      )}
    >
      {children}
    </div>
  );
}

// ================================== //

interface InputLeftIconProps {
  className?: string;
  icon: ElementType;
}

function InputLeftIcon({ icon: Icon, className }: InputLeftIconProps) {
  return <Icon className={cn("absolute bottom-1/2 left-3 h-5 w-5 translate-y-1/2 text-zinc-400", className)} />;
}

// ================================== //

interface InputRightIconProps {
  className?: string;
  onClick?: () => void;
  icon: ElementType;
}

function InputRightIcon({ icon: Icon, onClick, className }: InputRightIconProps) {
  return (
    <Icon
      className={cn("absolute bottom-1/2 right-3 h-5 w-5 translate-y-1/2 text-zinc-400", onClick && "cursor-pointer", className)}
      onClick={onClick}
    />
  );
}

// ================================== //

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  isFloating?: boolean;
  iconPosition?: "left" | "right" | "both";
}

type InputRef = HTMLInputElement;

const MainInput = forwardRef<InputRef, InputTextProps>(({ id, type = "text", iconPosition, isFloating, ...props }, ref) => {
  return (
    <input
      {...props}
      id={id}
      ref={ref}
      type={type}
      placeholder={isFloating ? " " : props.placeholder}
      className={cn(
        "peer flex h-11 w-full rounded-md border px-4 text-sm",
        "placeholder:text-zinc-400",
        "disabled:cursor-not-allowed disabled:border-none disabled:bg-zinc-200 disabled:text-zinc-400",
        "data-[error=true]:border-red-500 data-[error=true]:bg-red-50 data-[error=true]:focus-visible:outline-red-300",
        iconPosition === "left" && "pl-10",
        iconPosition === "right" && "pr-10",
        iconPosition === "both" && "px-10",
        props.className
      )}
    />
  );
});

MainInput.displayName = "Input";

// ================================== //

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  IconContainer: InputIconContainer,
  LeftIcon: InputLeftIcon,
  RightIcon: InputRightIcon,
  Main: MainInput,
};
