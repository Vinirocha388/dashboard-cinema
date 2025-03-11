import Header from "@/components/Header";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";


export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.dashboardContainer}>
      <Sidebar />
      <DashboardContent />
      </main>
      
    </div>
  );
}
