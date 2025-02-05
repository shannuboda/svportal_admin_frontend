import React, { useEffect, useState } from 'react'
import '../App.css'
import { Form, Input, Button, Checkbox } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  // const antd = window.antd;
    const [Fields, setFields] = useState({"mail":'',"password":''})
    const [response, setResponse] = useState()
    const Navigate = useNavigate()
  const changeValues = (e) => {
    setFields({
        ...Fields,
        [e.target.name]:e.target.value
    })
    console.log(Fields);
    
  };

  const FormFinish = async() => {
    // console.log("Failed:",Fields );
    try {
        const response = await axios.post('http://localhost:3000/admin_login',Fields)
        console.log(response.data["Admin"]);
        localStorage.setItem('AdminData',JSON.stringify(response.data['Admin']))
        Navigate('/home')
        
    } catch (error) {
        if(error.response){
            console.log(":Login Failed");
            
        }
    }

  };

useEffect(()=>{
if(localStorage.getItem('AdminData'))
{
    Navigate('/home')
}
},[])


 
  return (
    <div>
       <div className="login-page">
      <div className="login-box">
        {/* Illustration */}
        <div className="illustration-wrapper">
          <img
            src="https://c8.alamy.com/comp/2BNBY02/businessman-opening-secret-door-opportunity-accessible-entering-risk-solution-and-leadership-business-vector-concept-illustration-of-businessman-open-door-secret-leadership-challenge-opportunity-2BNBY02.jpg"
            alt="Login Illustration"
          />
        </div>

        {/* Ant Design Form */}
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onSubmit = {()=>{FormSubmit(e)}}
        >
          <p className="form-title">SVColleges Admin Dashboard</p>
          <p>Login to the Dashboard</p>

          {/* Username Field */}
          <Form.Item
            name="mail"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Mailid" aria-label="mail"name="mail" onChange={(e)=>{changeValues(e)}}/>
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              aria-label="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              name="password" onChange={(e)=>{changeValues(e)}}
            />
          </Form.Item>

        
          {/* Login Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={()=>{FormFinish()}}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default Login
