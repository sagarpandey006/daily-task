"use client";
import { UserProfile } from "./UserProfile";
import { SearchButton } from "./SearchButton";
import { FaCalendarCheck } from "react-icons/fa";

interface TaskHeaderProps {
  onSearch: (value: string) => void;
}

export function TaskHeader({ onSearch }: TaskHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <AppLogo />
      <div className="flex items-center gap-2">
        <SearchButton onSearch={onSearch} />
        <UserProfile />
      </div>
    </div>
  );
}

function AppLogo() {
  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="bg-primary p-2 text-white rounded-sm text-xl">
        <FaCalendarCheck />
      </div>
      <div className="font-bold text-3xl flex gap-1 justify-center items-center">
        <span className="text-primary">Daily</span>
        <span>Task</span>
      </div>
    </div>
  );
}



// import { UserProfile } from "./UserProfile";

// import { SearchButton } from "./SearchButton";
// import { FaCalendarCheck } from "react-icons/fa";

// export function TaskHeader() {
//   return (
//     <div className="flex justify-between  items-center mb-6">
//       <AppLogo />
//       <div className="flex items-center gap-1 ">
//         <SearchButton />
//         <UserProfile />
//       </div>
//     </div>
//   );
// }

// function AppLogo() {
//   return (
//     <div className="flex gap-2 items-center justify-center    ">
//       <div className="bg-primary p-2 text-white rounded-sm text-xl ">
//         <FaCalendarCheck />
//       </div>

//       <div className="font-bold  text-3xl flex gap-1 justify-center items-center">
//         <span className="text-primary">Daily</span>
//         <span>Task</span>
//       </div>
//     </div>
//   );
// }
