"use client";

import {
    CreditCard,
    LifeBuoy,
    LogOut,
    Settings,
    User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function DropdownMenuDemo() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };

        getUser();

        const { data: subscription } = supabase.auth.onAuthStateChange(
            (_, session) => {
                setUser(session?.user || null);
            }
        );

        return () => subscription.subscription.unsubscribe();
    }, []);

    const handleLogOut = async () => {
        try {
            await supabase.auth.signOut();
            router.push("/")
        } catch (error) {
            console.error("Erro ao sair:", error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="text-white">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-200">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user && (
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User />
                            <span>{user.user_metadata?.name?.split(" ")[0] || "Perfil"}</span>
                            <DropdownMenuShortcut>⇧ + Win + P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push("/instrucoes")} className="cursor-pointer">
                            <CreditCard />
                            <span>Realizar teste</span>
                            <DropdownMenuShortcut>Win + B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings />
                            <span>Configurações</span>
                            <DropdownMenuShortcut>Win + S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                )}
                <DropdownMenuItem>
                    <LifeBuoy />
                    <span>Suporte</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
                    <LogOut />
                    <span>Sair</span>
                    <DropdownMenuShortcut>⇧ + Win + Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
