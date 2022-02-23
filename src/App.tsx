import React from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/Header';
import { TaskForm } from './features/task/taskForm/TaskForm';
import { TaskList } from './features/task/taskList/TaskList';

export const App: React.VFC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.inner}>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </>
  );
};
