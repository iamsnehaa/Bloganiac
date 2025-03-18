"use client";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center py-10">
      <button
        onClick={() => window.open("/signup", "_blank")}
        className="relative inline-flex h-16 w-48 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-lg font-semibold text-white tracking-wide backdrop-blur-3xl">
          Create a Post
        </span>
      </button>
    </div>
  );
};

export default CreatePost;
