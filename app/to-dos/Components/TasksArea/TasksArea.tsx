import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ComboboxDemo } from "./PriorityCombobox";
import { TasksOptions } from "./TasksOptions";
import { useTasksStore } from "@/app/stores/useTasksStore";
import { Task } from "@/app/data/Tasks";
import { toast } from "@/hooks/use-toast";
import CircularProgress from "@mui/material/CircularProgress";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { useUserStore } from "@/app/stores/useUserStore";

interface TasksAreaProps {
  searchTerm: string;
}

export function TasksArea({ searchTerm }: TasksAreaProps) {
  const { tasks, fetchTasks } = useTasksStore();
  const { user } = useUserStore();

  useEffect(() => {
    getTasksData(user);
  }, [user]);

  async function getTasksData(user: { id: string; email: string } | null) {
    await fetchTasks(user);
  }

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollArea className="h-60 flex flex-col gap-4">
      {filteredTasks.length === 0 ? (
        <div className="h-full w-full flex items-center justify-center flex-col gap-6">
          <FaUmbrellaBeach className="text-[79px] text-slate-500 opacity-85" />
          <span className="text-sm text-slate-400 opacity-85 text-center">
            {searchTerm
              ? "No matching tasks found."
              : "It looks like there are no tasks available. Click above to add a new task."}
          </span>
        </div>
      ) : (
        <>
          {filteredTasks.map((singleTask) => (
            <SingleTask key={singleTask.id} singleTask={singleTask} />
          ))}
        </>
      )}
    </ScrollArea>
  );
}

export function SingleTask({ singleTask }: { singleTask: Task }) {
  const { updateTaskFunction, setTaskSelected, setIsTaskDialogOpened } =
    useTasksStore();
  const [loading, setLoading] = useState(false);

  async function handleCheckboxChange() {
    setLoading(true);
    const updateTaskObject: Task = {
      ...singleTask,
      status: singleTask.status === "completed" ? "in progress" : "completed",
    };

    const result = await updateTaskFunction(updateTaskObject);

    if (!result.success) {
      toast({ title: "Error updating task" });
    }

    setLoading(false);
  }

  const lowerOpacity = singleTask.status === "completed" ? "opacity-65" : "";

  return (
  <div
    className={`border flex items-center p-3 rounded-md w-full justify-between mb-3 ${lowerOpacity}`}
  >
    <div className="flex items-center gap-2">
      {loading ? (
        <CircularProgress size={"18px"} color="inherit" />
      ) : (
        <Checkbox
          id={`task-${singleTask.id}`}
          className="w-5 h-5"
          checked={singleTask.status === "completed"}
          onCheckedChange={handleCheckboxChange}
        />
      )}

      <div className="flex flex-col gap-1">
        <label
          onClick={() => {
            setTaskSelected(singleTask);
            setIsTaskDialogOpened(true);
          }}
          htmlFor="task"
          className="text-lg font-semibold cursor-pointer hover:text-primary"
        >
          {singleTask.name}
        </label>
        <Badge variant="outline" className="text-[10px] opacity-55">
          {singleTask.status}
        </Badge>
      </div>
    </div>

    <div className="flex gap-3 items-center">
      <ComboboxDemo singleTask={singleTask} />
      <TasksOptions singleTask={singleTask} />
    </div>
  </div>
);

}