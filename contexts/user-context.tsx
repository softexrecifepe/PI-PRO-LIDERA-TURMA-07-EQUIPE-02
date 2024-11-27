"use client";

import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);

interface UserContextType {
    id: string | null;
    user: { name: string } | null;
    avatarUrl: string | null;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [id, setId] = useState<string | null>(null);
    const [user, setUser] = useState<{ name: string } | null>(null);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        const storedId = localStorage.getItem("id");
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
        const storedAvatarUrl = localStorage.getItem("avatarUrl");

        if (storedId && storedUser && storedAvatarUrl) {
            setId(storedId);
            setUser(storedUser);
            setAvatarUrl(storedAvatarUrl);
        } else {
            const fetchUser = async () => {
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    const userId = user.id;
                    const userData = { name: user.user_metadata.name };
                    const avatar = user.user_metadata.avatar_url || null;

                    setId(userId);
                    setUser(userData);
                    setAvatarUrl(avatar);

                    // Armazenar no localStorage
                    localStorage.setItem("id", userId);
                    localStorage.setItem("user", JSON.stringify(userData));
                    if (avatar) localStorage.setItem("avatarUrl", avatar);
                }
            };

            fetchUser();
        }

        const { data: subscription } = supabase.auth.onAuthStateChange(
            (_, session) => {
                if (session?.user) {
                    const userId = session.user.id;
                    const userData = { name: session.user.user_metadata.name };
                    const avatar = session.user.user_metadata.avatar_url || null;

                    setId(userId);
                    setUser(userData);
                    setAvatarUrl(avatar);

                    // Atualizar no localStorage
                    localStorage.setItem("id", userId);
                    localStorage.setItem("user", JSON.stringify(userData));
                    if (avatar) localStorage.setItem("avatarUrl", avatar);
                } else {
                    setId(null);
                    setUser(null);
                    setAvatarUrl(null);
                    localStorage.removeItem("id");
                    localStorage.removeItem("user");
                    localStorage.removeItem("avatarUrl");
                }
            }
        );

        return () => subscription.subscription.unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ id, user, avatarUrl }}>
            {children}
        </UserContext.Provider>
    );
}

export function useSession() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useSession deve ser usado dentro de UserProvider");
    }
    return context;
}
