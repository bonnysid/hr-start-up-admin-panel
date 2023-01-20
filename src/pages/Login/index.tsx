import * as ST from './styled'
import { FC } from 'react';
import { Button, Input } from '@src/components';
import { useAuth } from '@providers/AuthProvider';
import { useFormik } from 'formik';

interface LoginForm {
  username: string;
  password: string;
}

const Login: FC = () => {
  const { login } = useAuth();

  const auth = async (values: LoginForm) => {
    try {
      await login(values.username, values.password)
    } catch (e) {
      console.log(e)
    }
  }

  const form = useFormik<LoginForm>({
    initialValues: {
      password: '',
      username: '',
    },
    // validationSchema: VALIDATION_SCHEMA,

    onSubmit: async (values, { resetForm }) => {
      auth(values)
    },
  });

  return (
    <ST.Wrapper>
      <ST.Form onSubmit={form.handleSubmit}>
        <ST.Header>
          <ST.Logo />
          <ST.Title>Admin / Авторизация</ST.Title>
        </ST.Header>
        <Input name="username" onChange={form.handleChange} value={form.values.username} caption="Имя пользователя" />
        <Input name="password" onChange={form.handleChange} value={form.values.password} caption="Пароль" type="password" />
        <Button text="Войти" />
      </ST.Form>
    </ST.Wrapper>
  )
}

export default Login;
