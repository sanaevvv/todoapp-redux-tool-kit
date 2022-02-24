import React from 'react';
import styles from './TaskForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createTask } from '../taskSlice';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../taskSlice';
import Modal from 'react-modal';

type Inputs = { taskTitle: string };
type Props = { edit?: boolean };

export const TaskForm: React.VFC<Props> = ({ edit }) => {
  // const isModalOpen = useSelector(selectModal);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const handleEdit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    dispatch(createTask(data.taskTitle));
    reset();
  };
  return (
    <form onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(onSubmit)}>
      <label className={styles.label}>
        {edit ? 'Edit Task' : 'NewTask'}
        <input
          className={styles.input}
          {...register('taskTitle')}
          value={edit ? 'defaultValue' : ''}
        />
      </label>
      {edit ? (
        <div className={styles.buttonWrapper}>
          <button className={styles.submit} type="submit">
            Submit
          </button>

          <button
            className={styles.cancel}
            onClick={() => dispatch(toggleModal(false))}
            type="button"
          >
            Cancel
          </button>
        </div>
      ) : null}
    </form>
  );
};
