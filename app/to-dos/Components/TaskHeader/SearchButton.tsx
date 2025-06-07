"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchButtonProps {
  onSearch: (value: string) => void;
}

export function SearchButton({ onSearch }: SearchButtonProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value); // send value back to parent
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <IoSearchSharp className="text-[20px]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <Input
          id="search"
          placeholder="Search a task..."
          className="mt-2"
          value={inputValue}
          onChange={handleInputChange}
        />
      </PopoverContent>
    </Popover>
  );
}



// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import { Button } from "@/components/ui/button";
// import { IoSearchSharp } from "react-icons/io5";

// import { Input } from "@/components/ui/input";

// export function SearchButton() {
//   return (
//     <Popover>
//       <PopoverTrigger>
//         <Button variant="ghost">
//           <IoSearchSharp className="text-[20px]" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent>
//         <Input id="search" placeholder="Search a task..." className="mt-2" />
//       </PopoverContent>
//     </Popover>
//   );
// }
