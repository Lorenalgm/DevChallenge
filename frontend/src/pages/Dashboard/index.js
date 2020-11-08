import React, { useState, useEffect } from 'react';

import DashboardDefault from '../../components/DashboardDefault';
import StatusCard from '../../components/StatusCard';
import { StatusCardWrapper, Title, Container } from './styled';
import { ChallengeCard } from '../../components/ChallengeCard/styled';

const fakeData = {
    complete: 5,
    inProgress: 2,
};

function Dashboard() {
    const [statusCount, setStatusCount] = useState({});

    useEffect(() => {
        setStatusCount(fakeData);
    }, []);

    return (
        <DashboardDefault>
            <Container>
                <StatusCardWrapper>
                    <StatusCard
                        border="var(--green)"
                        count={statusCount.complete}
                        title="Desafios concluídos"
                    />
                    <StatusCard
                        border="var(--yellow)"
                        count={statusCount.inProgress}
                        title="Desafios em andamento"
                    />
                </StatusCardWrapper>
                <Title>#WeeklyDevChallenge</Title>
                <ChallengeCard />
            </Container>
        </DashboardDefault>
    );
}

export default Dashboard;
