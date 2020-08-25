import React from 'react';

import SidebarUser from '../SidebarUser';
import Logo from '../Logo';
import { DashboardContent, DbHeader } from './styled';

function DashboardDefault(props) {
    return (
        <>
            <SidebarUser />
            <DashboardContent>
                <DbHeader>
                    <Logo />
                </DbHeader>
                {props.children}
            </DashboardContent>
        </>
    );
}

export default DashboardDefault;
