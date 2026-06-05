'use client'

import { useSession } from '@/lib/auth-client';
import React from 'react';
import { Card } from "@heroui/react";
import { DashboardStats } from '@/app/components/dashboard/DashboardStats';
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';
const RecruiterDashboardHomePage = () => {

    const { data: session, isPending } = useSession();

    if (isPending) {
        return <div>Loading</div>
    }


    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];
    const user = session?.user;
    console.log(user)
    return (
        <div className='px-4' >
            <h2 className='text-2xl font-bold '>Welcome Back , {user.name}</h2>

            <DashboardStats statsData={recruiterStats} />

        </div>
    );
};

export default RecruiterDashboardHomePage;