import Link from "next/link";
import type { Metadata } from "next";
import Resume from "@/components/Resume";
import Spacer from "@/components/Spacer";

export const metadata: Metadata = {
    title: "Resume Maxine Meijboom",
    description: "Experience and qualifications of Maxine Meijboom, Software Developer & Technical 3D Artist.",
};

export default function ResumePage() {
    return (
        /* Pine-Forest Wallpaper */
        <div className="pine-forest-bg min-h-screen">

            <div className="grid gap-6 lg:grid-cols-1">
                <main className="gap-6">
                    <div className="rounded-xl p-15 bg-transparent">

                        {/* Resume from components/resume.tsx */}
                        <Resume/>

                    </div>
                </main>
            </div>
        </div>
    );
}
