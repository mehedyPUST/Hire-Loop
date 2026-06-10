// 'use client'

// import { useSession } from '@/lib/auth-client';
// import React from 'react';
// import { Card } from "@heroui/react";
// import { DashboardStats } from '@/app/components/dashboard/DashboardStats';
// import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';



// const RecruiterDashboardHomePage = () => {

//     const { data: session, isPending } = useSession();

//     if (isPending) {
//         return <div>Loading</div>
//     }


//     const recruiterStats = [
//         { title: "Total Job Posts", value: "48", icon: Briefcase },
//         { title: "Total Applicants", value: "1,284", icon: Persons },
//         { title: "Active Jobs", value: "18", icon: Thunderbolt },
//         { title: "Jobs Closed", value: "32", icon: CircleCheck },
//     ];
//     const user = session?.user;
//     console.log(user)
//     return (
//         <div className='px-4' >
//             <h2 className='text-2xl font-bold '>Welcome Back , {user.name}</h2>

//             <DashboardStats statsData={recruiterStats} />

//         </div>
//     );
// };

// export default RecruiterDashboardHomePage;




'use client'

import { useSession } from '@/lib/auth-client';
import React from 'react';
import { Card } from "@heroui/react";
import { DashboardStats } from '@/app/components/dashboard/DashboardStats';
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';

// Disable static prerendering for this page
export const dynamic = 'force-dynamic';

const RecruiterDashboardHomePage = () => {
    const { data: session, isPending, error } = useSession();

    // Handle loading state
    if (isPending) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="text-lg font-semibold">Loading dashboard...</div>
                    <div className="text-sm text-gray-500 mt-2">Please wait</div>
                </div>
            </div>
        );
    }

    // Handle error state
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="text-lg font-semibold text-red-600">Error loading session</div>
                    <div className="text-sm text-gray-500 mt-2">Please refresh the page or try again later</div>
                </div>
            </div>
        );
    }

    // Handle no session
    if (!session?.user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="text-lg font-semibold">Please log in</div>
                    <div className="text-sm text-gray-500 mt-2">You need to be logged in to access this page</div>
                </div>
            </div>
        );
    }

    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];

    const user = session.user;

    return (
        <div className='px-4 py-6'>
            <h2 className='text-2xl font-bold mb-6'>Welcome Back, {user.name}</h2>
            <DashboardStats statsData={recruiterStats} />
        </div>
    );
};

export default RecruiterDashboardHomePage;