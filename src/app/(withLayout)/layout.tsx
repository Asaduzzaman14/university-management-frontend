import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";

const Dashboardlayout = ({ children }: { children: React.ReactNode; }) => {
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