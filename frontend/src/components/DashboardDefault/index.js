import React from 'react';

import SidebarUser from '../SidebarUser';
import Logo from '../Logo';
import { DashboardContent, DbHeader } from './styled';

function DashboardDefault(props) {
    return (
        <>
            <SidebarUser />
            <DbHeader>
                <Logo />
            </DbHeader>
            <DashboardContent>{props.children}</DashboardContent>
        </>
    );
}

export default DashboardDefault;
