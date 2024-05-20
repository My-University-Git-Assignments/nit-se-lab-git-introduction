"use client"
import React, { useState } from 'react'
import styles from './form.module.css'
import { Modal } from 'antd';


export default function Form() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

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
            <div className={styles.buttons}>
                <button className={styles.button} onClick={showModal}>Intrests</button>
                <button className={styles.submit} type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}
