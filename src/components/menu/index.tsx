import {
    CreditCard,
    LifeBuoy,
    LogOut,
    Settings,
    User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react";

export function DropdownMenuDemo() {

    const handleLogOutGoogle = async () => {
        try {
            await signOut({ redirectTo: "/" });
        } catch (error) {
            console.log("Erro ao sair", error);
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-200">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User />
                        <span>Perfil</span>
                        <DropdownMenuShortcut>⇧ + Win + P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
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
                <DropdownMenuItem>
                    <LifeBuoy />
                    <span>Suporte</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut />
                    <button onClick={handleLogOutGoogle}>Sair</button>
                    <DropdownMenuShortcut>⇧ + Win + Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
