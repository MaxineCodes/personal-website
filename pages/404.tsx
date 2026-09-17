import "../app/globals.css";
import "../app/rosepine.css";

export default function Custom404() {
    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-background)",
                backgroundImage: "radial-gradient(var(--color-base) 4px, transparent 3px)",
                backgroundSize: "40px 40px",
            }}>

            <div className="mx-auto px-4 py-8 sm:px-6">

                {/* Page Header */}
                <div className="mb-4 text-center">
                    <section className="mt-24">
                    </section>
                    <h1></h1>
                    <h1 className="text-8xl font-bold text-(--color-rose) sm:text-8xl">
                        404
                    </h1>

                    <p className="mt-4 text-base text-(--color-muted) sm:text-2xl">
                        Something went wrong
                    </p>

                    <section className="mt-15">
                    </section>
                    <h1 className="text-8xl font-bold text-(--color-muted) sm:text-8xl">
                        :(
                    </h1>
                    <section className="mt-24">
                    </section>

                </div>
            </div>
        </div>
    );
}


