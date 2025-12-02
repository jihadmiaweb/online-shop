import MineLayout from "@/components/Layout/public/mainLayout";
import { ReactNode } from "react";

function PublickLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <MineLayout>
                {children}
            </MineLayout>
        </div>
    );
}

export default PublickLayout;