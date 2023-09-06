const StarsSvg = ({ gray }: { gray?: boolean }) => {
  const colorFill = gray ? "#e5e5e5" : "#FFD700";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
    >
      <polygon
        fill={colorFill}
        points="10 0 12.245 6.078 18.367 6.951 13.878 11.153 15.102 17.245 10 14.375 4.898 17.245 6.122 11.153 1.633 6.951 7.755 6.078"
      />
    </svg>
  );
};

export { StarsSvg };
