'use client'

import { MotionConfig } from 'framer-motion'

// Desactiva las animaciones de transform si el usuario pidió reducir el movimiento
export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
