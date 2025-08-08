'use client';

import { ChangeEvent, useState } from 'react';
import ReportModal from './ReportModal';
import Report from './ReportPage';
import Table from '@/components/Table';
import { Download, Edit3, View } from 'lucide-react';
// import Table from './Table';

interface TableProps {
    title?: string;
    columns: {
        key: string;
        label: string;
        render?: (value: any, row: any) => React.ReactNode;
    }[];
    data: any[];
    rowKey?: string;
    onRowClick?: (row: any) => void; // <-- Add this line
    showAddButton?: boolean;
    addButtonLabel?: string;
    onAddClick?: () => void;
    showSearch?: boolean;
}

export interface ReportFormData {
    type: "GRI" | "IFRS";
    name: string;
    industry: string;
    location: string;
    year: string;
    revenue: number | string;
    emissions: number | string;
    goal: string;
    contact: string;
    periodFrequency: string;
    inauguralOrSubsequent: string;
    reportingStandards: string;
    externalAuditorAppointed: string;
    leadershipTitle: string;
    board: string;
    committeeName: string;
    specificTrainingsProvided: string;
    policiesName: string;
    workshopsConducted: string;
    sustainabilityRisksAndOpportunities: string;
    energySource: string;
    sectorIndustryName: string;
    externalConsultants: string;
    benchmarkDetail: string;
    kpis: string;
    dataMonitoringSystems: string;
    ipccAndIea: string;
    physicalRisksScenarios: string;
    selectedBusinessSite: string;
    transitionRiskScenarios: string;
    innovativeFacility: string;
    toolsUsed: string;
    reportingPeriod: string;
    companyName: string;
    departmentsNames: string;
    contactDetails: string;
}

const dataTableRows = [
    {reportLink: 'https://res.cloudinary.com/dekpssbm1/image/upload/v1754573167/user-reports/okspta5twsrvcd265yvf.pdf', createdBy: 'Muhammad Husnain', createdAt: '08-08-2025',},
];

export default function ReportGeneration() {
    const [type, setType] = useState<'GRI' | 'IFRS' | null>(null);
    const [reportData, setReportData] = useState<ReportFormData | null>(null);
    const [tableData, setTableData] = useState(dataTableRows);

    const [formData, setFormData] = useState<ReportFormData>({
        type: 'GRI',
        name: '',
        industry: '',
        location: '',
        year: '',
        revenue: '',
        emissions: '',
        goal: '',
        contact: '',
        periodFrequency: '',
        inauguralOrSubsequent: '',
        reportingPeriod: '',
        reportingStandards: '',
        externalAuditorAppointed: '',
        leadershipTitle: '',
        board: '',
        committeeName: '',
        specificTrainingsProvided: '',
        policiesName: '',
        workshopsConducted: '',
        sustainabilityRisksAndOpportunities: '',
        energySource: '',
        sectorIndustryName: '',
        externalConsultants: '',
        benchmarkDetail: '',
        kpis: '',
        dataMonitoringSystems: '',
        ipccAndIea: '',
        physicalRisksScenarios: '',
        selectedBusinessSite: '',
        transitionRiskScenarios: '',
        innovativeFacility: '',
        toolsUsed: '',
        companyName: '',
        departmentsNames: '',
        contactDetails: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    function handleEditMobile(row: any, arg1: any): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className="h-[90%] p-4 relative">
            <h1 className="text-3xl font-bold mb-6">Report Generation</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t border-gray-100">
                    <h2 className="text-xl font-semibold mb-2">GRI</h2>
                    <p className="text-sm text-gray-600">
                        Science Based Targets initiative helps companies to set emission reduction targets in line with climate science.
                    </p>
                    <button
                        className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
                        onClick={() => setType('GRI')}
                    >
                        Generate Report
                    </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t border-gray-100">
                    <h2 className="text-xl font-semibold mb-2">IFRS</h2>
                    <p className="text-sm text-gray-600">
                        International Financial Reporting Sustainability Standards Initiative provides sustainability disclosure guidance.
                    </p>
                    <button
                        className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
                        onClick={() => setType('IFRS')}
                    >
                        Generate Report
                    </button>
                </div>
            </div>

            {/* Report History */}
            <div className='border-t border-gray-100 my-8 shadow-lg rounded-lg'>
                <Table
                    title="Recent Reports"
                    data={tableData} 
                    columns={[
                        { key: 'reportLink', label: 'Link of Report' },
                        { key: 'createdBy', label: 'Report Creator' },
                        { key: 'createdAt', label: 'Report Date' },
                    ]}
                    rowKey="reportLink"
                    actions={[
                        {
                            // label: 'Edit',
                            icon: <View className="w-4 h-4 cursor-pointer" />,
                            onClick: (row) => handleEditMobile(row, tableData.findIndex(item => item.reportLink === row._id)),
                            variant: 'success'
                        },
                        // {
                        //     // label: 'Delete',
                        //     icon: <Download className="w-4 h-4 cursor-pointer" />,
                        //     onClick: (row) => console.log('Delete row:', row),
                        //     variant: 'primary'
                        // }
                    ]}
                    />
            </div>

            {type && (
                <ReportModal
                    data={formData}
                    handleChange={handleChange}
                    type={type}
                    onClose={() => setType(null)}
                    onSubmit={(data) => {
                        setReportData(data);
                        setType(null);
                    }}
                    isVisible={true}
                />
            )}


            {reportData && (
                <div className="mt-10">
                    <Report 
                        data={reportData} 
                        onEdit={() => {
                            // setFormData(reportData);
                            setType(reportData.type as 'GRI' | 'IFRS');
                        }} 
                        onClose={() => setReportData(null)} 
                        viewMode={'full'} 
                    />
                </div>
            )}
        </div>
    );
}