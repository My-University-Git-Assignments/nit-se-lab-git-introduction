import React from 'react'
import styles from './form.module.css'
import { Modal } from 'antd';


export default function Form() {
  return (
    <div className={styles.container}>
        <h2>Sample Form</h2>
        <form action="#" className={styles.form}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <div className={styles.buttons}>
                <button type="submit">Submit</button>
                <button>Back</button>
            </div>
        </form>
    </div>
  )
}
