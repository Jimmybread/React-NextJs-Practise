import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ users }) {
  return (
    <div className={styles.container}>

      <input type="text" name="" id="" defaultValue={"123"} />
      <button>按钮</button>
    </div>
  )
}
