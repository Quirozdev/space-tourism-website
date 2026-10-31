import { useNavigate } from "react-router";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-4 text-center">
      <div className="flex flex-col gap-y-2 pt-10 md:gap-y-4 xl:pt-0">
        <h3 className="text-preset-4 text-white uppercase opacity-50">
          Not Found
        </h3>
      </div>
      <p className="text-preset-9 font-barlow text-blue-300">
        We couldn't find this page.
      </p>
      <button
        className="text-preset-4 font-barlow cursor-pointer rounded-md border bg-transparent px-4 py-2 font-bold text-white hover:bg-white hover:text-blue-900"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}
