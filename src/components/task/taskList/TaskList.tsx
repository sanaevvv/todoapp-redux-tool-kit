import React from 'react';
import sampleData from './sampleData.json';
import { TaskItem } from '../taskItem/TaskItem';
import styles from '../taskList/TaskList.module.scss';


export const TaskList: React.VFC = () => {
  return (
    <div className={styles.taskListWrapper}>
      {sampleData.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
