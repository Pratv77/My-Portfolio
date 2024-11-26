export default function Tooltip({ message, children, className }) {
  return (
    <div className="relative flex max-w-max flex-col items-center justify-center">
      <div className="group relative">
        {children}
        <div
          className={`absolute left-1/2 top-10 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-250 group-hover:scale-100 z-[20] ${className}`}
        >
          <div className="flex max-w-xs flex-col items-center shadow-lg">
            <div className="rounded bg-gray-800 p-2 text-center text-xs text-white">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}