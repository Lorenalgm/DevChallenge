import React from 'react';

import SidebarUser from '../SidebarUser';
import Logo from '../Logo';
import { DashboardWrapper, DashboardContent, DbHeader } from './styled';

function DashboardDefault(props) {
    return (
        <DashboardWrapper>
            <SidebarUser />

            <DashboardContent>
                <DbHeader>
                    <Logo />
                </DbHeader>
                {props.children}
            </DashboardContent>
        </DashboardWrapper>
    );
}

export default DashboardDefault;
