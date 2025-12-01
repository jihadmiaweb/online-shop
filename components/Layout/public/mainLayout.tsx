import PublickFoter from "@/components/Layout/public/foter";
import PublicHider from "@/components/Layout/public/hider";
import { ReactNode } from "react";

function MineLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <PublicHider />
            <div className="flex-1">
                {children}
            </div>
            <PublickFoter />
        </div>
    );
}

export default MineLayout;