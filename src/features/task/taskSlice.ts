import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskState = {
  idCount: number;
  tasks: Task[];
  selectedTask: Task | null;
  isModalOpen: boolean;
};

const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: 'TaskA', completed: false }],
  selectedTask: null,
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // タスクの新規作成
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    // タスクの選択
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    // タスクの編集
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.title = title;
      }
    },
    // タスクの削除
    deleteTask: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((t) => t.id !== id);
    },
    // タスクの完了・未完了フラグ
    completeTask: (state, action) => {
      const { id } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // モーダルの開閉
    toggleModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const {
  createTask,
  selectTask,
  editTask,
  deleteTask,
  completeTask,
  toggleModal,
} = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectModal = (state: RootState) => state.task.isModalOpen;
export const selectSelectedTask = (state: RootState) => state.task.selectedTask;

export default taskSlice.reducer;
