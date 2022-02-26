import React from 'react';
import styles from './TaskItem.module.scss';
import { MdEventNote, MdModeEditOutline, MdDelete } from 'react-icons/md';
import { TaskForm } from '../taskForm/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectTask, toggleModal, selectModal } from '../taskSlice';
import Modal from 'react-modal';

Modal.setAppElement('#root');

type Props = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
};

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  content: {
    backgroundColor: '#fff',
    width: 'min(90%, 600px)',
    height: 'max-content',
    margin: 'auto',
    padding: '60px 80px',
  },
};

export const TaskItem: React.FC<Props> = ({ task }) => {
  const isModalOpen = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(selectTask(task));
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
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleClose}
          style={modalStyle}
        >
          {/* <div className={styles.modal}> */}
            <TaskForm edit />
          {/* </div> */}
        </Modal>

        <button>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
