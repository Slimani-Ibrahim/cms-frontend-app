import React from 'react';
import { WithLoadingComponent, Loader } from 'components/shared';
import companyService from 'service/company-service';
import { WrappedCompanyList } from 'components/pages/company/company-list';

export const CompanyPage = () => {
    const [refresh, setRefresh] = React.useState();
    return (
        <div className='scroll-container position-relative' style={{ height: "inherit" }}>
            <CompanyListHoc shouldRefresh={(val) => setRefresh(val)} refresh={refresh} />
        </div>
    );
}

const CompanyListHoc = (props) => {
    const WithLoadingHoc = React.useMemo(() => WithLoadingComponent(WrappedCompanyList, () => companyService.getCompanies(), <div style={{ position: "absolute", top: "50%", left: "45%" }}><Loader /></div>)(props), [props.refresh]);
    return <WithLoadingHoc />
}