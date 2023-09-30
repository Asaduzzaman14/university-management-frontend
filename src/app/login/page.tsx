"use client";
import { Button, Col, Row } from 'antd';
import loginImage from '../../assets/login.png';
import Image from 'next/image';
import Form from '@/components/Forms/form';
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';


type FormValues = {
    id: string;
    password: string;
};

const LoginPage = () => {
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        try {
            console.log(data);

        } catch (error) {

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
                            <FormInput name='id' type="text" size='large' label='id' />
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