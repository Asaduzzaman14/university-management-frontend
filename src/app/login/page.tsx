"use client";
import { Button, Col, Row } from 'antd';
import loginImage from '../../assets/login.png';
import Image from 'next/image';
import Form from '@/components/Forms/form';
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { getUserInfo, isLoggdin, storeInfo } from '@/services/authService';
import { useRouter } from 'next/navigation';


type FormValues = {
    id: string;
    password: string;
};

const LoginPage = () => {
    // console.log(isLoggdin());
    const router = useRouter();

    const [userLogin] = useUserLoginMutation();
    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            const res = await userLogin({ ...data }).unwrap();
            if (res?.data?.accessToken) {
                router.push('/profile');

            }
            storeInfo({ accessToken: res?.data.accessToken });
        } catch (error: any) {
            console.log(error.message);

        }
    };
    return (
        <Row
            justify={'center'}
            align={'middle'}
            style={{
                minHeight: '100vh'
            }}>
            <Col sm={12} md={16} lg={10}  >
                <Image src={loginImage} width={500} alt='login image'></Image>
            </Col>
            <Col sm={12} md={8} lg={8}  >
                <h1
                    style={{
                        margin: '15px 0px'
                    }}
                >First loginin your account</h1>
                <div>
                    <Form submitHandler={onSubmit} >
                        <div>
                            <FormInput name='id' type="text" size='large' label='User id' />
                        </div>

                        <div style={{
                            margin: '15px 0px'
                        }}>
                            <FormInput name='password' type="password" size='large' label="User password" />
                        </div>

                        <Button type='primary' htmlType='submit'> Login</Button>
                    </Form>
                </div>
            </Col>

        </Row>
    );
};

export default LoginPage;