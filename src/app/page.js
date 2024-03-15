'use client'
import Image from "next/image";
import styles from "./page.module.css";
import DataFetcher from "./components/datos";
export default function Home() {
  return (
    <div>
      <h1>Axios</h1>
      <DataFetcher/>
    </div>
  );
}
