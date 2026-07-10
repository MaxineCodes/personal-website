import Link from "next/link";
import type { Metadata } from "next";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
    title: "Resume Maxine Meijboom",
    description: "Experience and qualifications of Maxine Meijboom, Software Developer & Technical 3D Artist.",
};

export default function ResumePage() {
    return (
        /* Pine-Forest Wallpaper */
        <div className="pine-forest-bg min-h-screen">
            {/* Resume from components/resume.tsx */}
            <Resume/>
        </div>
    );
}
