import SideBar from "./SideBar";

export default function ProductsLayout({ children }) {
  return (
    <div className="max-w-[1400px] mx-auto flex gap-6 px-4">
      <div className="w-[250px] flex-shrink-0">
        <SideBar />
      </div>

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}