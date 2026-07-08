import SideBar from "./SideBar";
import { FilterProvider } from "../context/FilterContext";

export default function ProductsLayout({ children }) {
  return (
    <FilterProvider>
      <div className="max-w-[1400px] mx-auto flex gap-6 px-4">

        {/* SIDEBAR */}
        <div className="w-[250px] flex-shrink-0">
          <SideBar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {children}
        </div>

      </div>
    </FilterProvider>
  );
}