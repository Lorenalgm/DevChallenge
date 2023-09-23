import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex gap-4 items-center">
      <div className="flex gap-2 items-center justify-center bg-yellow-400 w-8 h-8 rounded-sm">
        <p className="text-lg font-bold text-black">D</p>
      </div>
      <h1 className="text-lg font-bold">
        <span className="text-yellow-400">Dev</span>Challenge
      </h1>
    </Link>
  );
}
