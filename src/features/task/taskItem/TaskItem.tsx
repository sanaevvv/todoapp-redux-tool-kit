import React from 'react';
import styles from './TaskItem.module.scss';
import { MdEventNote, MdModeEditOutline, MdDelete } from 'react-icons/md';
import { TaskForm } from '../taskForm/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, selectModal } from '../taskSlice';
import Modal from 'react-modal';

Modal.setAppElement('#root');

type Props = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const TaskItem: React.FC<Props> = ({ task }) => {
  const isModalOpen = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(toggleModal(true));
  };
  const handleClose = () => {
    dispatch(toggleModal(false));
  };

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

        <button onClick={handleOpen}>
          <MdModeEditOutline />
        </button>
        <Modal isOpen={isModalOpen} onRequestClose={handleClose}>
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
