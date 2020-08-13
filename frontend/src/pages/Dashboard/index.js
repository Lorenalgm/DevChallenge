import React from 'react';

import DashboardDefault from '../../components/DashboardDefault';
import StatusCard from '../../components/StatusCard';
import { StatusCardWrapper } from './styled';

function Dashboard() {
    return (
        <>
            <DashboardDefault>
                <StatusCardWrapper>
                    <StatusCard
                        border="var(--green)"
                        count="5"
                        title="Desafios concluidos"
                    />
                    <StatusCard
                        border="var(--yellow)"
                        count="2"
                        title="Desafios em andamento"
                    />
                </StatusCardWrapper>
                <h1>#WeeklyDevChallenge</h1>
            </DashboardDefault>
        </>
    );
}

export default Dashboard;
