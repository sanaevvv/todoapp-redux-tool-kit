import React from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/Header';
import { TaskForm } from './features/task/taskForm/TaskForm';
import { TaskList } from './features/task/taskList/TaskList';
import { auth } from './firebase';
// import { UserAuth } from './pages/userAuth/UserAuth';

export const App: React.VFC = () => {
  console.log(auth);
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
