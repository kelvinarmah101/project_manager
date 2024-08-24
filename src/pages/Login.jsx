import React from 'react';
import { useEffect } from 'react';
import { BsEyeFill, BsEyeSlashFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = () =>{
    useEffect(() => {
        const passwordInput = document.querySelector('.checkPass');
        const passIcon = document.querySelector('.passIcon');
        const passShow = document.querySelector('.passShow')
        const users = document.querySelector('.users');
        function showPassword() {
          if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passIcon.style.display = 'none';
            passShow.style.display = 'block';
            
          } else {
            passwordInput.type = 'password';
            passIcon.style.display = 'block';
            passShow.style.display = 'none';
          }
        }
        passIcon?.addEventListener('click', showPassword);
        passShow?.addEventListener('click', showPassword)
        return () => {
          passIcon?.removeEventListener('click', showPassword);
          passShow?.removeEventListener('click', showPassword);
        };
      },[]);
    return(
        <div className='login m-0 h-screen flex items-center justify-center'>
            <div className='container flex w-[80%] h-[650px]'>
                <div className='left flex-1  bg-blue-200 justify-center p-5'>
                    <div className='academic-info flex flex-col items-center gap-2 mt-20'>
                        <img src="/assets/project.svg" alt="aim app" className='w-96 mb-4'/>
                        <h2 className='text-lg font-semibold text-red-600 uppercase'>Academic Project Manager</h2>
                    </div>
                </div>
                <div className='flex-1 bg-white justify-center items-center p-5'>
                    <div className='logo text-center'>
                        <img src="/assets/logo-light.png" alt="aim app" className='mx-auto mb-4'/>
                        <h2 className='text-1xl text-blue-400'>Login</h2>
                    </div>
                    <form action="/dashboard" method='get'>
                        <div className='input-group mb-3 '>
                            <label htmlFor="username" className='mb-2'>Username</label>
                            <input type="text" name='username' id='username' placeholder='Enter your username' className='w-[100%] outline-[2px] outline-blue-400 p-2 border checkPass' />
                        </div>
                        <div className='input-group mb-3 '>
                            <label htmlFor="password">Password</label>
                            <div className='relative'>
                            <input type="password" name='password' id='password' placeholder='Enter your password' className='w-[100%] outline-[2px] outline-blue-400 p-2 border checkPass'  />
                            <BsFillEyeSlashFill className='absolute bottom-[30%] right-[2%] text-lg passIcon'/>
                            <BsEyeFill className='absolute bottom-[30%] right-[2%] text-lg passShow hidden'/>
                            </div>
                            <a className='text-sm text-blue-400'>Forgot password?</a>
                        </div>

                        <div className='input-group mb-3 '>
                            <div className='relative'>
                                <select name="user" id="" className='users'>
                                    <option value="Lecturer">Lecturer</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                        </div>

                        <div className='input-group mb-3 '>
                            <label htmlFor="student_id">Student ID</label>
                            <div className='relative'>
                            <input type="password" name='id' id='student_id' placeholder='eg. 00000000' className='w-[100%] outline-[2px] outline-blue-400 p-2 border checkPass'/>
                            <BsFillEyeSlashFill className='absolute bottom-[30%] right-[2%] text-lg passIcon'/>
                            <BsEyeFill className='absolute bottom-[30%] right-[2%] text-lg passShow hidden'/>
                            </div>
                        </div>
                        <button className='btn bg-blue-400 rounded p-3 mt-7 w-[100%] text-white' type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
       
    );
}
export default Login;