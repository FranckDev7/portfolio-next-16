import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactCompiler: true, // active le compilateur React expérimental.
    images: {
        // autorise les qualités specifiées
        qualities: [75, 100],
        // Configurer les domaines si on charge des images externes
        remotePatterns: [] ,
    },
};

export default nextConfig;
