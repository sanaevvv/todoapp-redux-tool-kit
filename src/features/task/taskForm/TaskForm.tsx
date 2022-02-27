import styles from './TaskForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createTask } from '../taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleModal,
  selectTask,
  editTask,
  selectSelectedTask,
} from '../taskSlice';


type Inputs = { taskTitle: string };
type Props = { edit?: boolean };

export const TaskForm: React.VFC<Props> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectSelectedTask);

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const handleEdit: SubmitHandler<Inputs> = (data) => {
    const sendData = {
      ...selectTask,
      title: data.taskTitle,
    };
    dispatch(editTask(sendData));
    dispatch(toggleModal(false));
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    dispatch(createTask(data.taskTitle));
    reset();
  };
  return (
    <form onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(onSubmit)}>
      <label className={styles.label}>{edit ? 'Edit Task' : 'NewTask'}</label>
      {selectedTask ? (
        <input
          className={styles.input}
          {...register('taskTitle')}
          value={edit ? selectedTask.title : ''}
        />
      ) : (
        <input className={styles.input} {...register('taskTitle')} />
      )}

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
