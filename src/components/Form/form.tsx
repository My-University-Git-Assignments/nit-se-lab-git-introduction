"use client"
import React, { useEffect, useState } from 'react'
import styles from './form.module.css'
import { Popconfirm, notification } from 'antd';
import type { PopconfirmProps } from 'antd';

interface User{
    firstname: string
    lastname: string
    hobby: string
}
export default function Form() { 
    const [user, setUser] = useState<User>({
        firstname: "",
        lastname: "",
        hobby: "Swimming"
    })
    const [submit, setSubmit] = useState(false)

    const firstnameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, firstname: e.target.value})
    }
    const lastnameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, lastname: e.target.value})
    }
    const hobbyChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUser({...user, hobby: e.target.value})
    }
    const confirm: PopconfirmProps['onConfirm'] = (e) => {
        e?.preventDefault()
        setSubmit(true)
      };
      
      const cancel: PopconfirmProps['onCancel'] = (e) => {
        e?.preventDefault()
        setSubmit(false)
        notification.info({
            message: `You have cancelled the submission`,
            placement: 'topRight',
        })
      };

      useEffect(() => {
        if(submit){
            notification.success({
                message: `Form Submitted`,
                description: `Thank you for submitting ${user.firstname} ${user.lastname}`,
                placement: 'topRight',
            })
            setSubmit(false)
            setUser({
                firstname: "",
                lastname: "",
                hobby: "Swimming"
            })
        }
      },[submit])
    
  return (
    <div className={styles.wrapper}>
        <h2>Sample Form</h2>
        <form className={styles.form}>
            <div className={styles.input}>               
                <label htmlFor="firstname">firstname:</label>
                <input value={user.firstname} onChange={firstnameChangeHandler} type="text" name="firstname" id="firstname" />
            </div>
            <div className={styles.input}>               
                <label htmlFor="lastname">Lastname:</label>
                <input value={user.lastname} onChange={lastnameChangeHandler} type="text" name="lastname" id="lastname" />
            </div>
            <div className={styles.input}> 
                <label htmlFor="hobbies">Favorite Hobby:</label>              
                <select onChange={hobbyChangeHandler} name="hobbies" id="hobbies">
                    <option value="Swimming">Swimming</option>
                    <option value="Codding">Codding</option>
                    <option value="Travelling">Travelling</option>
                    <option value="Travelling">Camping</option>
                    <option value="Playing">Playing</option>
                </select>
            </div>
            <Popconfirm
                title="Submit Form"
                description="Are you sure to submit your form?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <button className={styles.submit} onClick={(e) => e.preventDefault()} type="submit">Submit</button>
            </Popconfirm>

        </form>
    </div>
  )
}
