"use client"
import React, { useState } from 'react'
import styles from './form.module.css'
import { Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';

interface User{
    firstname: string
    lastname: string
    hobby: string
}
export default function Form() { 
    
  return (
    <div className={styles.wrapper}>
        <h2>Sample Form</h2>
        <form className={styles.form}>
            <div className={styles.input}>               
                <label htmlFor="firstname">firstname:</label>
                <input type="text" name="firstname" id="firstname" />
            </div>
            <div className={styles.input}>               
                <label htmlFor="lastname">Lastname:</label>
                <input type="text" name="lastname" id="lastname" />
            </div>
            <div className={styles.input}> 
                <label htmlFor="hobbies">Favorite Hobby:</label>              
                <select name="hobbies" id="hobbies">
                    <option value="Swimming">Swimming</option>
                    <option value="Codding">Codding</option>
                    <option value="Travelling">Travelling</option>
                    <option value="Travelling">Camping</option>
                    <option value="Playing">Playing</option>
                </select>
            </div>
            <button className={styles.submit} onClick={(e) => e.preventDefault()} type="submit">Submit</button>

        </form>
    </div>
  )
}
