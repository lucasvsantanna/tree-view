interface ThunderboltIconProps {
  selected?: boolean
}

export function ThunderboltIcon({ selected }: ThunderboltIconProps) {
    const fillColor = selected ? '#FFFFFF' : '#2188FF'

  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5.272h-3.934l3.537-4.47a.143.143 0 00-.112-.232H6.643a.142.142 0 00-.123.072l-4.627 7.99a.142.142 0 00.123.215H5.13l-1.596 6.386c-.034.14.134.237.237.137l10.327-9.853A.142.142 0 0014 5.272zm-8.39 6.664l1.077-4.303h-2.81l3.385-5.847h4.011l-3.72 4.702h3.768l-5.71 5.448z"
        fill={fillColor}
      />
    </svg>
  )
}
