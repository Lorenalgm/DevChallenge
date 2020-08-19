import React from 'react';

import DashboardDefault from '../../components/DashboardDefault';
import StatusCard from '../../components/StatusCard';
import { StatusCardWrapper, Title } from './styled';
import { ChallengeCard } from '../../components/ChallengeCard/styled';

function Dashboard() {
    return (
        <>
            <DashboardDefault>
                <StatusCardWrapper>
                    <StatusCard
                        border="var(--green)"
                        count="5"
                        title="Desafios concluídos"
                    />
                    <StatusCard
                        border="var(--yellow)"
                        count="2"
                        title="Desafios em andamento"
                    />
                </StatusCardWrapper>
                <Title>#WeeklyDevChallenge</Title>
                <ChallengeCard />
            </DashboardDefault>
        </>
    );
}

export default Dashboard;
