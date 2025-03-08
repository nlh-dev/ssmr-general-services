import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Inicio',
        url: '#',
        icon: LayoutGrid,
    },
    {
        title: 'Inventario',
        url: '#',
        icon: LayoutGrid,
    },
    {
        title: 'Ordenes de Bienes',
        url: '#',
        icon: LayoutGrid,
    },
    {
        title: 'Movimientos',
        url: '#',
        icon: LayoutGrid,
    },
];


export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="#" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <div className='flex flex-col items-center'>
                <SidebarSeparator/>
                </div>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
