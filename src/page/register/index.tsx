import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import api from '../api/hello';
import toast from 'react-hot-toast';

// Define the form values interface
interface FormValues {
  username: string;
  name: string;
  password: string;
  email: string;
}

// Define the validation schema using Yup
const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
  username: Yup.string().required('Username harus diisi'),
  email: Yup.string().email('Email harus valid').required('Email harus diisi'),
  password: Yup.string().required('Password harus diisi'),
  name: Yup.string().required('Name harus diisi'),
});

// Define the RegisterPelapor component
const RegisterPelapor: React.FC = () => {
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (values: FormValues) => {
    try {
    //   const res = await api.Register(values);
      toast.success('Sukses Create Akun');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };

  // Render the component
  return (
    <div className="pb-[228px]">
      <div className="w-[732px] h-fit bg-[#E2CEBD] border-4 border-black m-auto mt-[84px] pt-[32px] pb-[52px] px-[38px]">
        <h1 className="text-center text-black text-[58px] font-normal mb-[32px]">Create Account</h1>
        <div>
          {/* Formik form */}
          <Formik
            initialValues={{ username: '', name: '', password: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              {/* Form fields */}
              <div className="mb-[34px]">
                <h1 className="text-black text-[35px] font-normal mb-[16px]">Name</h1>
                <Field
                  type="text"
                  name="name"
                  className="rounded-[25px] py-[18px] px-[23px] w-full text-[25px]"
                  placeholder="Enter name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-lg pl-3"
                />
              </div>
              <div className="mb-[34px]">
                <h1 className="text-black text-[35px] font-normal mb-[16px]">Email</h1>
                <Field
                  type="text"
                  name="email"
                  className="rounded-[25px] py-[18px] px-[23px] w-full text-[25px]"
                  placeholder="Enter Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-lg pl-3"
                />
              </div>

              <div className="mb-[34px]">
                <h1 className="text-black text-[35px] font-normal mb-[16px]">Username</h1>
                <Field
                  type="text"
                  name="username"
                  className="rounded-[25px] py-[18px] px-[23px] w-full text-[25px]"
                  placeholder="Enter Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-lg pl-3"
                />
              </div>

              <div className="mb-[34px]">
                <h1 className="text-black text-[35px] font-normal mb-[16px]">Password</h1>
                <Field
                  type="password"
                  name="password"
                  className="rounded-[25px] py-[18px] px-[23px] w-full text-[25px]"
                  placeholder="Enter Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-lg pl-3"
                />
              </div>

              {/* Create button */}
              <div className="flex items-center justify-center">
                <button
                  className="w-full py-[13px] bg-stone-800 rounded-[25px] text-white text-[35px] mb-[32px]"
                  type="submit"
                >
                  Create
                </button>
              </div>

              {/* Login link */}
              <div className="flex items-center justify-center gap-[12px]">
                <h1 className="text-black text-opacity-50 text-xl font-normal">
                  Already have an account?
                </h1>
                <Link
                  to={'/login'}
                  className="text-blue-400 text-xl font-bold"
                >
                  Login here
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterPelapor;
