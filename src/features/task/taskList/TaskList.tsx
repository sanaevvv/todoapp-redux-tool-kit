import React from 'react';
import { TaskItem } from '../taskItem/TaskItem';
import styles from '../taskList/TaskList.module.scss';
import { selectTask } from '../taskSlice';
import { useSelector } from 'react-redux';

export const TaskList: React.VFC = () => {
  const tasks = useSelector(selectTask);
  return (
    <div className={styles.taskListWrapper}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
