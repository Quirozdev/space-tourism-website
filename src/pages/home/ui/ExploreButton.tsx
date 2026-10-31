import { useNavigate } from "react-router";

export function ExploreButton() {
  const navigate = useNavigate();

  return (
    <button
      className="group flex h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-white text-blue-900 uppercase hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] md:h-68 md:w-68"
      onClick={() => navigate("/destination")}
    >
      <span className="text-preset-4 text-center group-hover:opacity-50">
        Explore
      </span>
    </button>
  );
}
