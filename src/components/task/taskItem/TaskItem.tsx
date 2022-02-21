import React from 'react';
import styles from './TaskItem.module.scss';
import { MdEventNote } from 'react-icons/md';
import { MdModeEditOutline } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

type Props = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div className={styles.taskWrapper}>
      <div className={styles.title}>
        <button>
          <MdEventNote />
        </button>
        <p className={styles.titleText}>{task.title}</p>
      </div>

      <div className={styles.rightItems}>
        <input
          checked={task.completed}
          onClick={() => console.log(`check ${task.id}`)}
          type="checkbox"
          className={styles.checkbox}
        />

        <button onClick={() => console.log(`edit ${task.id}`)}>
          <MdModeEditOutline />
        </button>

        <button onClick={() => console.log(`delete ${task.id}`)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
