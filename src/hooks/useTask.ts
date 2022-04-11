import React from "react";
import { TaskContext } from "../contexts/taskContext";

export const useTask = () => React.useContext(TaskContext);