import React from 'react';


const EstimatorResultPage = ({location}) => {
    const { impact, severeImpact } = location.state;
    return <div className="container py-5 myGrid">
                <div className="card mx-2">
                    <div className="card-body">
                        <h2 className="text-danger my-2">Impact Cases</h2>
                        <p>Currently Infected : <span>{impact.currentlyInfected}</span></p>
                        <p>Infections By Requested Time : <span>{impact.infectionsByRequestedTime}</span></p>
                        <p>Severe Cases By Requested Time : <span>{impact.severeCasesByRequestedTime}</span></p>
                        <p>Hospital Beds By Requested Time : <span>{impact.hospitalBedsByRequestedTime}</span></p>
                        <p>Cases For ICU By Requested Time : <span>{impact.casesForICUByRequestedTime}</span></p>
                        <p>Cases For Ventilators By Requested Time : <span>{impact.casesForVentilatorsByRequestedTime}</span></p>
                        <p>Dollars In Flight : <span>{impact.dollarsInFlight}</span></p>
                    </div>
                </div>
                <div className="card mx-2">
                    <div className="card-body">
                        <h2 className="text-danger my-2">Severe Impact Cases</h2>
                        <p>Currently Infected : <span>{severeImpact.currentlyInfected}</span></p>
                        <p>Infections By Requested Time : <span>{severeImpact.infectionsByRequestedTime}</span></p>
                        <p>Severe Cases By Requested Time : <span>{severeImpact.severeCasesByRequestedTime}</span></p>
                        <p>Hospital Beds By Requested Time : <span>{severeImpact.hospitalBedsByRequestedTime}</span></p>
                        <p>Cases For ICU By Requested Time : <span>{severeImpact.casesForICUByRequestedTime}</span></p>
                        <p>Cases For Ventilators By Requested Time : <span>{severeImpact.casesForVentilatorsByRequestedTime}</span></p>
                        <p>Dollars In Flight : <span>{severeImpact.dollarsInFlight}</span></p>
                    </div>
                </div>
            </div>
}

export default EstimatorResultPage;