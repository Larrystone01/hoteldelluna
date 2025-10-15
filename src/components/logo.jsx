export default function Logo() {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <g transform="translate(220, 130)">
        {/* Left decorative dot aligned with D */}
        <circle cx="-130" cy="0" r="5" fill="#ffffff" />
        {/* HDL monogram */}
        <text
          x="-60"
          y="0"
          fontFamily="'EB Garamond, serif"
          fontSize="85"
          fontWeight="100"
          fill="#ffffff"
          textAnchor="middle"
          // fontStyle="italic"
        >
          H
        </text>
        <text
          x="-30"
          y="20"
          fontFamily="'EB Garamond,, serif"
          fontSize="85"
          fontWeight="100"
          fill="#ffffff"
          textAnchor="middle"
          // fontStyle="italic"
        >
          D
        </text>
        <text
          x="1"
          y="45"
          fontFamily="'EB Garamond, serif"
          fontSize="85"
          fontWeight="100"
          fill="#ffffff"
          textAnchor="middle"
          // fontStyle="italic"
        >
          L
        </text>
        {/* Right decorative dot aligned with D */}
        <circle cx="50" cy="0" r="5" fill="#ffffff" />
      </g>

      {/* HOTEL DEL LUNA text */}
      <text
        x="200"
        y="240"
        fontFamily="'Montserrat', 'Arial', sans-serif"
        fontSize="30"
        fontWeight="100"
        fill="#ffffff"
        textAnchor="middle"
        letterSpacing="10"
      >
        HOTEL DEL LUNA
      </text>
    </svg>
  );
}
