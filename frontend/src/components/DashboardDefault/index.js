import React from 'react';

import SidebarUser from '../SidebarUser';
import Logo from '../Logo';
import { DashboardContent, DbHeader } from './styled';

function DashboardDefault() {
    return (
        <>
            <SidebarUser />
            <DashboardContent>
                <DbHeader>
                    <Logo />
                </DbHeader>
            </DashboardContent>
        </>
    );
}

export default DashboardDefault;
