import {FC} from "react";

interface StarIconProps {
  size: number;
  isStarred: boolean;
  className?: string;
}

export const StarIcon: FC<StarIconProps> = ({size, isStarred, className}) => {
  if (isStarred) {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0L6.32252 3.17971L9.75528 3.45492L7.13988 5.69529L7.93893 9.04508L5 7.25L2.06107 9.04508L2.86012 5.69529L0.244718 3.45492L3.67748 3.17971L5 0Z"
          fill="var(--color-primary)"
        />
      </svg>
    );
  } else {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 1.30198L5.86086 3.37173L5.97814 3.65371L6.28256 3.67811L8.51703 3.85725L6.8146 5.31556L6.58266 5.51424L6.65352 5.8113L7.17364 7.99176L5.26063 6.8233L5 6.66411L4.73937 6.8233L2.82636 7.99176L3.34648 5.8113L3.41734 5.51424L3.1854 5.31556L1.48297 3.85725L3.71744 3.67811L4.02186 3.65371L4.13914 3.37173L5 1.30198Z"
          stroke="var(--color-typography-light"
        />
      </svg>
    );
  }
};
