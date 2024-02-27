"use client"

import { useReportWebVitals } from 'next/web-vitals';

type MetricType = {
    id: string;
    name: string;
    startTime: number;
    value: number;
    label?: string;
};

const WebVitals = () => {
    const handleWebVitals = (metric: MetricType) => {
        console.log(metric);
    };

    useReportWebVitals(handleWebVitals);

    return null;
};

export default WebVitals;
