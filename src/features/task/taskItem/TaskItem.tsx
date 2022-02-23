import React from 'react';
import styles from './TaskItem.module.scss';
import { MdEventNote, MdModeEditOutline, MdDelete } from 'react-icons/md';
import { useModal } from 'react-hooks-use-modal';
import { TaskForm } from '../taskForm/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, selectModal } from '../taskSlice';

type Props = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const TaskItem: React.FC<Props> = ({ task }) => {
  // const isModalOpen = useSelector(selectModal);
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: false, //これはオプション。デフォルトはfalse
  });
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

        <button onClick={open}>
          <MdModeEditOutline />
        </button>
        <Modal>
          <div className={styles.modal}>
            <TaskForm edit />
          </div>
        </Modal>

        <button>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};