import React from "react";

// Components
import Hero from "@/components/features/home/hero/Hero";
import Tournaments from "@/components/features/home/tournaments/Tournaments";

const HomePage: React.FC = () => {
    return (
        <main>
            <Hero />
            <Tournaments />
        </main>
    );
};

export default HomePage;
