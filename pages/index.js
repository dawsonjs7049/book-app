import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from '../styles/Login.module.css';
import React, {useState} from "react";
import Link from "next/link";
import {useAuth} from "../auth";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

export default function Home() {
  firebaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useAuth();

  console.log("USER: " + JSON.stringify(user));

  const handleLogin = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        window.location.href = "/home";
      })
      .catch(function (error) {
        const message = error.message;
        console.log("error: " + message);
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.h1}>Login</h1>
        <div style={{textAlign:'center'}}>User ID: {user ? user.uid : "No user signed in"}</div>
        <div className={styles.inputsBox}>
          <div className={styles.inputContainer}>
            <div className={styles.label}>Email</div>
            <input className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>Password</div>
            <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className={styles.underline}></div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.loginBtn} disabled={((email === "") || (password === "")) ? true : false} onClick={() => handleLogin()}>
            <Link href="/login"><a>SUBMIT</a></Link>
          </button>
        </div>
        
      </div>
    </div>
    










    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
