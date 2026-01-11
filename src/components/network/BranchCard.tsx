import { branches } from "@/data/branches";

export default function BranchCard({
  index,
  setIndex
}: {
  index: number;
  setIndex: (i: number) => void;
}) {
  const branch = branches[index];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-between">

      <div>
        <h3 className="text-2xl font-bold text-green-700">
          {branch.city}
        </h3>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {branch.address}
        </p>

        <div className="mt-4 text-sm text-gray-700">
          <p>📞 {branch.phone}</p>
          <p>✉️ {branch.email}</p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() =>
            setIndex((index - 1 + branches.length) % branches.length)
          }
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          ← Prev
        </button>

        <button
          onClick={() =>
            setIndex((index + 1) % branches.length)
          }
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Next →
        </button>
      </div>

    </div>
  );
}
