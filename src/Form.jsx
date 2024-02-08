import {useForm} from 'react-hook-form';
import _ from './Form.module.css';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  }


  return (
    <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={_.wrap}>
        <label className={_.label} htmlFor='email'>Email</label>
        <input
          className={_.input}
          type='text'
          id='email'
          aria-invalid={!!errors.email}
          {...register('email', {
          required: {
            value: true,
            message: 'Поле не должно быть пустым'
          },
          pattern: {
            value: /^.+@.+\..+$/,
            message: 'Неверный email'
          }
        })}
          />
        {errors.email && <p className={_.error}>{errors.email.message}</p>}
      </div>

      <div className={_.wrap}>
        <label className={_.label} htmlFor='password'>Пароль</label>
        <input
        className={_.input}
        type='password'
        id='password'
        aria-invalid={!!errors.password}
        {...register('password', {
          required: {
            value: true,
            message: 'Поле не должно быть пустым'
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
            message: 'Пароль не валиден'
          }
        })}
        />
        {errors.password && <p className={_.error}>{errors.password.message}</p>}
      </div>

      <div className={_.wrapCheckbox}>
        <input
        className={_.checkbox}
        type='checkbox'
        id='save'
        {...register('save')}
        />
        <label className={_.labelCheckbox} htmlFor='save'>Сохранить пароль</label>
      </div>
      <button className={_.submit} type='submit'>Войти</button>
    </form>
  )
}

export default Form
