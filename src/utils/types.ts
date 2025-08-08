export type BaseReportData = {
    type: "GRI" | "IFRS";
    companyName: string;
    contactDetails: string;
    periodFrequency: string;
    inauguralOrSubsequent: string;
    reportingStandards: string;
    externalAuditorAppointed: string;
    reportingPeriod: string;
};

export type GRIReportData = BaseReportData & {
    leadershipTitle: string;
    policiesName: string;
    workshopsConducted: string;
    sustainabilityRisksAndOpportunities: string;
    sectorIndustryName: string;
    externalConsultants: string;
    benchmarkDetail: string;
    kpis: string;
    dataMonitoringSystems: string;
    ipccAndIea: string;
    innovativeFacility: string;
    toolsUsed: string;
};

export type IFRSReportData = BaseReportData & {
    departmentsNames: string;
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
};

export type ReportFormData = GRIReportData | IFRSReportData;
