import React from 'react';
import styles from './TaskForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = { taskTitle: string };

export const TaskForm: React.VFC = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        NewTask
        <input className={styles.input} {...register('taskTitle')} />
      </label>
    </form>
  );
};
