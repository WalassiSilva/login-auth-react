export default function FormTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg lg:text-2xl font-bold mb-4">
      {children} 
      <span className=" animate-pulse duration-300">.</span>
      <span className=" animate-pulse duration-500 ">.</span>
      <span className=" animate-pulse duration-700">.</span>
    </h2>
  );
}
