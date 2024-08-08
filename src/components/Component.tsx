export default function Component({ text = "Component" }: { text?: string }) {
  return (
    <div className="w-52 h-52 border-solid border-2 border-gray-100 flex justify-center items-center">
      <div className="font-medium text-xl">{text}</div>
    </div>
  );
}
