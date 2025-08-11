import { NavBar } from "@/components/NavBar";

export function PageTemplateCopy() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <div class="bg-blue-500 h-16 flex items-center justify-center text-white">
        Top Bar
      </div>

      <div class="bg-green-500 h-16 flex items-center justify-center text-white">
        Center Bar
      </div>

      <div class="bg-red-500 h-16 flex items-center justify-center text-white">
        Bottom Bar
      </div>
    </div>
  );
}
