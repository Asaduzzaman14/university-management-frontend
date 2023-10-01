'use client';

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggdin } from "@/services/authService";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode; }) => {

    const router = useRouter();
    const userLoggedin = isLoggdin();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!userLoggedin) {
            router.push('/login');
        }
        setIsLoading(true);
    }, [router, userLoggedin]);

    // if (!isLoading) {
    //     return <p>Loading.......</p>;
    // }


    return (
        <Layout hasSider>
            <Sidebar />
            <Contents>
                {children}
            </Contents>
        </Layout>
    );
};

export default Dashboardlayout;