interface CircledExclamationIconProps {
  selected?: boolean
}

export function CircledExclamation({ selected }: CircledExclamationIconProps) {
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
        d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.813A5.813 5.813 0 018 2.187a5.813 5.813 0 010 11.626z"
        fill={fillColor}
      />
      <path
        d="M7.25 10.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM7.625 9h.75a.125.125 0 00.125-.125v-4.25a.125.125 0 00-.125-.125h-.75a.125.125 0 00-.125.125v4.25c0 .069.056.125.125.125z"
        fill={fillColor}
      />
    </svg>
  )
}
