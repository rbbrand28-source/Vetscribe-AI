export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
    </>
  );
}
